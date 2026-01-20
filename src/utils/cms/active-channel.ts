import { env } from "@/env";

// TODO: Will need to include seperate channels per environment as well (default dev)
export const ACTIVE_CHANNEL = (
	{
		icahn: "https://optimizely-ux.vercel.app",
		mshealth: "https://20251021moseyhealthpoc.vercel.app",
		nyee: "https://optimizely-ux-five.vercel.app",
	} satisfies Record<typeof env.OPTIMIZELY_CHANNEL, string>
)[env.OPTIMIZELY_CHANNEL];

/*
// FUTURE:
export const ACTIVE_CHANNEL = (
	{
		dev: {
			icahn: "https://example-icahn-dev.vercel.app",
			mshealth: "https://example-mshealth-dev.vercel.app",
			nyee: "https://example-nyee-dev.vercel.app",
		},
		stage: {
			icahn: "https://example-icahn-stage.vercel.app",
			mshealth: "https://example-mshealth-stage.vercel.app",
			nyee: "https://example-nyee-stage.vercel.app",
		},
		// eslint-disable-next-line perfectionist/sort-objects
		prod: {
			icahn: "https://example-prod-icahn.vercel.app",
			mshealth: "https://example-prod-mshealth.vercel.app",
			nyee: "https://example-prod-nyee.vercel.app",
		},
	} satisfies Record<"dev" | "prod" | "stage", Record<typeof env.OPTIMIZELY_CHANNEL, string>>
)["prod"][env.OPTIMIZELY_CHANNEL];
*/
