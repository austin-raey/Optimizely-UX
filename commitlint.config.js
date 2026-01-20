// commitlint.config.js | .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
const config = {
	prompt: {
		allowBreakingChanges: ["feature", "bugfix"],
		allowCustomIssuePrefix: true,
		allowCustomScopes: true,
		allowEmptyIssuePrefix: true,
		allowEmptyScopes: true,
		emojiAlign: "left",
		formatMessageCB: (message) => {
			// Footer is re-used for ticket id
			const { body, emoji, footer: ticket, subject, type } = message;
			const formattedTicket = ticket.replace(/[\n\s]/g, "").replace(",", ", ");
			return [`${emoji}  ${formattedTicket ? `[${formattedTicket}] ` : ""}${type}: ${subject}`, body]
				.join("\n\n")
				.trim();
		},
		markBreakingChangeMode: false,
		messages: {
			body: '(OPTIONAL) Provide a LONGER description of the change. Use "|" to break new line:\n',
			confirmCommit: "Are you sure you want to proceed with the commit above?",
			footer: "List any JIRA TICKETS associated with this change. E.g.: RAA-567, EPICFAD-90, ISM-1234, etc.:\n",
			subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
			type: "Select the type of change that you're committing:",
		},
		skipQuestions: ["scope", "footerPrefix"],
		types: [
			{ emoji: "✨", name: "✨ feat:     A new feature", value: "feat" },
			{ emoji: "🐛", name: "🐛 fix:      A bug fix", value: "fix" },
			{
				emoji: "📝",
				name: "📝 docs:     Documentation only changes",
				value: "docs",
			},
			{
				emoji: "🎨",
				name: "🎨 style:    Changes that do not affect the meaning of the code",
				value: "style",
			},
			{
				emoji: "🛠️",
				name: "🛠️ refactor: A code change that neither fixes a bug nor adds a feature",
				value: "refactor",
			},
			{
				emoji: "⚡️",
				name: "⚡️ perf:     A code change that improves performance",
				value: "perf",
			},
			{
				emoji: "✅",
				name: "✅ test:     Adding missing tests or correcting existing tests",
				value: "test",
			},
			{
				emoji: "🤖",
				name: "🤖 ci:       Changes to our CI configuration files and scripts",
				value: "ci",
			},
			{
				emoji: "🧹",
				name: "🧹 chore:    Other changes that don't modify src or test files",
				value: "chore",
			},
		],
		useEmoji: true,
	},
	rules: {
		"body-leading-blank": [2, "always"],
		"body-max-line-length": [2, "always", 100],
		"footer-leading-blank": [2, "always"],
		"footer-max-line-length": [2, "always", 100],
		"header-max-length": [2, "always", 200],
		"scope-empty": [2, "always"],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
	},
};

module.exports = config;
