import "server-only";
// Optimizely SaaS CMS SDK
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { type Metadata } from "next";

// Optimizely Graph
import { getSdk } from "@/gql";
import { type LandingPageDataFragment, LandingPageDataFragmentDoc, type Locales } from "@/gql/graphql";

export const LandingPage: OptimizelyNextPage<LandingPageDataFragment> = ({
	ctx,
	data: { MainContentArea, TopContentArea },
}) => {
	return (
		<div className="landing-page">
			<CmsContentArea className="w-full" ctx={ctx} fieldName="TopContentArea" items={TopContentArea} />
			<CmsContentArea className="w-full" ctx={ctx} fieldName="MainContentArea" items={MainContentArea} />
		</div>
	);
};
LandingPage.getDataFragment = () => ["LandingPageData", LandingPageDataFragmentDoc];
LandingPage.getMetaData = async (contentLink, locale, client) => {
	const sdk = getSdk(client); // Get the SDK with authentication applied - if needed
	const result = await sdk.getLandingPageMetaData({
		...contentLink,
		locale: locale ? (localeToGraphLocale(locale) as Locales) : null,
	});
	const matchingPosts = (result.LandingPage?.pages || []).filter(isNotNullOrUndefined);
	if (matchingPosts.length != 1) return {};
	const cmsManagedData = matchingPosts[0];
	const meta: WithPropertySet<Metadata, "openGraph"> = {
		description: cmsManagedData.SeoSettings?.MetaDescription,
		metadataBase: tryToUrl(cmsManagedData?._metadata?.url?.base),
		openGraph: {
			description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
			title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName ?? undefined,
		},
		other: {
			"idio:content-type": "Landing Page",
		},
		title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName,
	};
	return meta;
};

type WithPropertySet<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<Required<T>[P]> };

function isNotNullOrUndefined<T>(toTest?: null | T | undefined): toTest is T {
	return toTest ? true : false;
}

function tryToUrl(toConvert: null | string | undefined) {
	if (!toConvert) return undefined;
	try {
		return new URL(toConvert);
	} catch {
		return undefined;
	}
}
export default LandingPage;
