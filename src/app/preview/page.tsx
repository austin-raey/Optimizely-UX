import { createEditPageComponent } from "@remkoj/optimizely-cms-nextjs/preview";
import { createClient } from "@remkoj/optimizely-graph-client";

import { setupFactory } from "@/components/cms/factory";
import { getContentById } from "@/gql/functions";

export default createEditPageComponent(setupFactory(), {
	clientFactory: (token?: string) =>
		createClient(undefined, token, {
			cache: false,
			nextJsFetchDirectives: true,
			queryCache: false,
		}),
	loader: getContentById,
	refreshTimeout: 500, // Enable this line when you have issues with the preview not updating at all
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";
