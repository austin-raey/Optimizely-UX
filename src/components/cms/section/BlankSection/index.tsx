import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { type BlankSectionDataFragment, BlankSectionDataFragmentDoc } from "@/gql/graphql";

import DefaultGrid from "../styles/DefaultGrid";
import { SectionLayoutProps } from "../styles/displayTemplates";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSectionSection: CmsComponent<BlankSectionDataFragment, SectionLayoutProps> = ({
	children,
	contentLink,
	ctx,
	layoutProps,
}) => {
	return (
		<CmsEditable as={DefaultGrid} cmsId={contentLink.key} ctx={ctx} data={{}} layoutProps={layoutProps}>
			{children}
		</CmsEditable>
	);
};
BlankSectionSection.displayName = "Blank Section (Section/BlankSection)";
BlankSectionSection.getDataFragment = () => ["BlankSectionData", BlankSectionDataFragmentDoc];

export default BlankSectionSection;
