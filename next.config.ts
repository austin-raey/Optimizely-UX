import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: [
				// Optimizely CMP Preview
				"*.webproofing.cmp.optimizely.com",
				// Optimizely Web Experimentation & Personalization Editor
				"www.optimizelyedit.com/",
			],
		},
	},
	images: {
		remotePatterns: [
			// Optimizely CMS
			{
				hostname: "*.cms.optimizely.com",
				pathname: "/**",
				protocol: "https",
			},
			// Optimizely Content Recommendations
			{
				hostname: "*.idio.co",
				pathname: "/**",
				protocol: "https",
			},
			// Optimizely DAM
			{
				hostname: "*.cmp.optimizely.com",
				pathname: "/**",
				protocol: "https",
			},
		],
	},
	productionBrowserSourceMaps: true,
	reactCompiler: true,
	transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
