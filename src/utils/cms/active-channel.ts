import { env } from "@/env";

// TODO: Will need to include seperate channels per environment as well (default dev)
export const ACTIVE_CHANNEL = (
	{
		icahn: "https://optimizely-ux.vercel.app/",
		mshealth: "https://20251021moseyhealthpoc.vercel.app",
		nyee: "https://optimizely-ux-five.vercel.app/",
	} satisfies Record<typeof env.OPTIMIZELY_CHANNEL, string>
)[env.OPTIMIZELY_CHANNEL];
