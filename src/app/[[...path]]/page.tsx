import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { isDevelopment } from "@remkoj/optimizely-cms-react/rsc";
import { AuthMode, createClient, IOptiGraphClient } from "@remkoj/optimizely-graph-client";
import { draftMode } from "next/headers";

import { setupFactory } from "~/components/cms/factory";
import { getContentByPath } from "~/gql/functions";
import { ACTIVE_CHANNEL } from "~/utils/cms/active-channel";

const { CmsPage, generateMetadata, generateStaticParams } = createPage(setupFactory(), {
	channel: ACTIVE_CHANNEL,
	/**
	 * The factory to use to create the GraphQL Client to fetch data from Optimizely
	 * CMS.
	 *
	 * @returns     The Optimizely Graph Client
	 */
	async client(token?: string, mode?: "metadata" | "request"): Promise<IOptiGraphClient> {
		// Create the actual graph client
		const isDev = isDevelopment();
		const client = createClient(undefined, token, {
			cache: !isDev,
			nextJsFetchDirectives: true,
			queryCache: !isDev,
		});

		// Check if we're in request mode, if not the "draft mode" check will fail
		if (mode == "request") {
			const { isEnabled } = await draftMode();

			// When draftmode is enabled, switch to common drafts
			if (isEnabled) {
				client.updateAuthentication(AuthMode.HMAC);
				client.enablePreview();
			}
		}
		return client;
	},

	/**
	 * The demo site is single language, so we're always defaulting to English.
	 * For a multi-lingual implementation, you may omit this parameters when you
	 * have both a [lang] URL segment and define the channel. Otherwise implement
	 * your own synchronous logic to get the initial locale based on the parameters.
	 *
	 * @returns     The initial locale
	 */
	//paramsToLocale: () => "en",

	/**
	 * Inject the "getContentByPath" master query that will be used to load all
	 * content for the page in one request. When omitted, the default implementation
	 * will revert to many requests in order to load the content.
	 */
	getContentByPath,
});
// Configure the Next.JS route handling for the pages
export const dynamic = "error"; // Throw an error when the [[...path]] route becomes dynamic, as this will seriously hurt site performance
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

export { generateMetadata, generateStaticParams };
export default CmsPage;
