import { env as runTimeEnv } from "@ryankshaw/next-runtime-env";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export enum EnvKeys {
	NEXT_PUBLIC_DOMAIN_URL = "NEXT_PUBLIC_DOMAIN_URL",
	OPTIMIZELY_CHANNEL = "OPTIMIZELY_CHANNEL",
}

const server = {
	[EnvKeys.OPTIMIZELY_CHANNEL]: z.enum(["mshealth", "icahn", "nyee"]).default("mshealth"),
};
const client = {
	[EnvKeys.NEXT_PUBLIC_DOMAIN_URL]: z.url().optional().default("https://www.mountsinai.org"),
};
const shared = {
	...client,
};

const sharedEnv = Object.fromEntries(
	Object.keys(shared).map((key) => [key, process.env[key as keyof typeof shared]]),
) as Record<keyof typeof shared, string | undefined>;

// Public envs should be mapped via `next-runtime-env`
const publicEnv = Object.fromEntries(
	Object.keys(client).map((key) => [key, runTimeEnv(key as keyof typeof client)]),
) as Record<keyof typeof client, string | undefined>;

// Combine
const experimental__runtimeEnv = {
	...sharedEnv,
	...publicEnv,
};

export const env = createEnv({
	client,
	emptyStringAsUndefined: true,
	experimental__runtimeEnv,
	server,
	shared,
});
