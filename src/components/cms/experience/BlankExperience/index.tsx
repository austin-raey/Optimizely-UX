import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { isNode, OptimizelyComposition } from "@remkoj/optimizely-cms-react/rsc";
import { type Metadata } from "next";

import { getSdk } from "@/gql";
import { getFragmentData } from "@/gql/fragment-masking";
import { type BlankExperienceDataFragment, BlankExperienceDataFragmentDoc } from "@/gql/graphql";
import { ExperienceDataFragmentDoc, type InputMaybe, type Locales } from "@/gql/graphql";

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperienceExperience: CmsComponent<BlankExperienceDataFragment> = ({ ctx, data }) => {
	// eslint-disable-next-line react-compiler/react-compiler, react-hooks/immutability
	if (ctx) ctx.editableContentIsExperience = true;
	const composition = getFragmentData(ExperienceDataFragmentDoc, data).composition;
	return (
		<div className="vb:experience" data-component="BlankExperience">
			{composition && isNode(composition) && <OptimizelyComposition ctx={ctx} node={composition} />}
		</div>
	);
};
BlankExperienceExperience.displayName = "Blank Experience (Experience/BlankExperience)";
BlankExperienceExperience.getDataFragment = () => ["BlankExperienceData", BlankExperienceDataFragmentDoc];
BlankExperienceExperience.getMetaData = async (contentLink, locale, client) => {
	const sdk = getSdk(client);
	const data = await sdk.getBlankExperienceMetaData({
		key: contentLink.key,
		locale: locale as InputMaybe<Locales> | undefined,
	});
	const pageData = data.page?.items?.at(0);
	if (!pageData) return {};

	const meta: Omit<Metadata, "openGraph"> & { openGraph: NonNullable<Required<Metadata>["openGraph"]> } = {
		description: pageData.seo?.description,
		metadataBase: tryToUrl(pageData?.meta?.url?.base),
		openGraph: {
			description: pageData.seo?.description ?? undefined,
			title: pageData.seo?.title ?? pageData.meta?.displayName ?? undefined,
		},
		other: {
			"idio:content-type": "Blank experience",
		},
		title: pageData.seo?.title || pageData.meta?.displayName,
	};

	return meta;
};

function tryToUrl(toConvert: null | string | undefined) {
	if (!toConvert) return undefined;
	try {
		return new URL(toConvert);
	} catch {
		return undefined;
	}
}

export default BlankExperienceExperience;
