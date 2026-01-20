import { env } from "@/env";

// TODO: Will need to include seperate channels per environment as well (default dev)
export const ACTIVE_CHANNEL = (
	{
		icahn: "http://localhost:3002",
		mshealth: "https://20251021moseyhealthpoc.vercel.app",
		nyee: "http://localhost:3001",
	} satisfies Record<typeof env.OPTIMIZELY_CHANNEL, string>
)[env.OPTIMIZELY_CHANNEL];
