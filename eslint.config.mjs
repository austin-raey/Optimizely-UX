import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import reactCompiler from "eslint-plugin-react-compiler";
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
// import unicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import ts from "typescript-eslint";

const gitignorePath = new URL(".gitignore", import.meta.url).pathname;

const eslintConfig = defineConfig([
	includeIgnoreFile(gitignorePath),

	eslint.configs.recommended,
	ts.configs.recommended,
	ts.configs.stylistic,
	// TODO: Enable this later after configuring rules properly
	// unicorn.configs.recommended,
	perfectionist.configs["recommended-natural"],

	reactCompiler.configs.recommended,
	...nextVitals,
	...nextTs,

	prettier,

	{
		rules: {
			// "unicorn/prevent-abbreviations": [
			// 	"error",
			// 	{
			// 		replacements: {
			// 			env: false,
			// 			props: false,
			// 		},
			// 	},
			// ],
			// TODO: Revisit / re-enable this.
			"@typescript-eslint/no-explicit-any": "off",
		},
	},

	...storybook.configs["flat/recommended"],

	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "**/src/gql/**/*", "!.storybook"]),
]);

export default eslintConfig;
