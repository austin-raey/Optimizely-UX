import "server-only";
import { createEditPageComponent } from "@remkoj/optimizely-cms-nextjs/preview";
import { createAuthorizedClient } from "@remkoj/optimizely-cms-nextjs/rsc";

import { factory } from "@/components/cms/factory";
import { getContentById as loader } from "@/gql/functions";

export default createEditPageComponent(factory, {
	clientFactory: (token?: string) => createAuthorizedClient(token),
	contentResolver: ({ searchParams: { ctx, key, loc: locale, preview_token: token, ver: version } }) => {
		if (key) {
			return {
				ctx,
				key,
				locale: version ? undefined : locale,
				path: null,
				token,
				version,
			};
		}
		return undefined;
	},
	loader,
	//refreshTimeout: 500, // Enable this line when you have issues with the preview not updating at all
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";
