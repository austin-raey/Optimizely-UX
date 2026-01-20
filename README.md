# Requirements

- Node
- PNPM
- VSCode with the following extensions:
  - ESLint
  - Prettier - Code formatter
  - Tailwind CSS IntelliSense
  - GraphQL

Expected versions of Node and PNPM can be found in the [`package.json`](./package.json) `engines` and `packageManager` field.

# Getting Started

1. Create a `.env.local` file based on the `.env.example` file and fill in the required environment variables. See [.env.example](.env.example). These must be populated with the Environment Variables generated on the Optimizely Dashboard.

2. To choose which channel to use, set the `OPTIMIZELY_CHANNEL` variable in your `.env.local` file to one of the available channels: `mshealth`, `icahn`, or `nyee`. This will determine which content is fetched from the Optimizely CMS.

3. To see the project in action, run the following commands:

   ```sh
   pnpm install
   pnpm dev
   ```

# Tools Available

- NextJS + React for rendering
- Optimizely's first-party SDKs to help with CMS integration. Most of these live under the `@remkoj/` namespace in [`package.json`](./package.json)
- Tailwind + [cva](https://beta.cva.style/) + [clsx](https://www.npmjs.com/package/clsx) + postcss for styling
- GraphQL for data querying. Most GraphQL code is auto generated via graphql-codegen, however, it can be used manually as-needed for other CMS queries.
- OpenTelemetry for analytics
- Playwright + Vitest + Storybook for testing, unit testing, visual testing and validation.
- Eslint and Prettier for linting and formatting
- `@t3-oss/next-envjs` + `next-runtime-env` for environment variable convenience in code
- GitHub Actions for CI/CD
- lefthook + cz-git for Git hooks management

# Working with CMS Components

## Developing a New Content Type or Modifying an Existing One

When adding or modifying components, make sure to follow the following workflow:

1. In the Optimizely CMS Content Type editor, add and configure your new Content Type with all of its fields.

2. In the Optimizely CMS Page Editor, on a test page, add your Content Type to the page and configure it.

3. In this codebase, run the following commands to automaticlaly pull in the GraphQL types and boilerplate code for your new Content Type:

   ```sh
    # Generates some boilerplate code for your new component
    pnpm opti-cms nextjs:create -t NameOfMyComponent

   	# Alternatively, if you are only need to pull the latest GraphQL types for a component, you can run:
   	pnpm opti-cms nextjs:fragments -t NameOfMyComponent

   	# Sets up the GraphQL types and queries for you so the page can query them.
    pnpm graph:compile

   	# Begin viewing and developing your component
   	pnpm dev
   ```

4. Implement your new component code within the `components/cms/...` directory.

## Adding A New Style Definition

Sometimes, you may want to add a new style definition to a particular Content Type. This can be used to allow content authors to modify aspects of a component's appearance without needing to create a whole new Content Type for each variant.

This can be done in multiple ways:

- **(Preferred)** Create a property on the Content Type in the CMS that allows the authors to select a variant, style, or other style-related option.
  - This requires the least extra manual work.
  - You would use the above instructions to pull the latest GraphQL types.
    ```sh
    # For reference,
    pnpm opti-cms nextjs:fragments -t NameOfMyNewComponent
    ```

- Use Optimizely's `opti-style` CLI tools to create a new style definition that can be applied to components.
  - This option will hook into Optimizely's "Style" selection system.
  - This option only surfaces in the CMS UI in the Experience Editor, and only for specific Content Types, such as Sections. For this reason, usage of this method may be limited.

To create a `opti-style`-type style configuration, do the following:

1. Find an existing `*.opti-style.json` to copy as a template, or create a new one from scratch. This file will go in the same directory as your CMS component, e.g. `components/cms/MyComponent/MyComponent.opti-style.json`.

2. Modify the `contentType` field to match the Content Type you are adding styles for. Also, modify the `displayName`, `key`, and `settings` fields as needed. The `key` should match any items in your component's `displayTemplates.ts`, if applicable - as these styles will be used for that variant.

3. Once you have created or modified your `*.opti-style.json` file, run the following command to push the style definition to the CMS:

   ```sh
   pnpm opti-cms styles:push -t NameOfMyComponent
   ```

4. In the Optimizely CMS, your new style definition should now be available for selection in the Style dropdown when editing instances of that Content Type.

# First-party Optimizely Example Resources

| Resource                                                                                   | Description                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Optimizely's CMS Demo Example](https://github.com/episerver/cms-saas-vercel-demo)         | Has several example CMS components, configurations, and GraphQL queries within the `apps/frontend` folder. This application is a NextJS app. It also includes documentation. Uses `yarn` (our repo uses `pnpm`). |
| [Optimizely's CMS SaaS Starter Example](https://github.com/remkoj/optimizely-saas-starter) | A more barebones NextJS starter template with less component examples, but has some additional documentation. Uses `yarn` (our repo uses `pnpm`).                                                                |
