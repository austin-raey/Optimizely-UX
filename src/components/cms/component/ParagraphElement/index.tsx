import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { extractSettings, RichText } from "@remkoj/optimizely-cms-react/rsc";

import { type ParagraphElementDataFragment, ParagraphElementDataFragmentDoc } from "@/gql/graphql";

import { DefaultParagraphProps } from "./displayTemplates";

enum AlignClasses {
	center = " mx-auto",
	left = " mr-auto ml-0",
	right = " ml-auto mr-0",
}

/**
 * Paragraph
 *
 */
export const ParagraphElementElement: CmsComponent<ParagraphElementDataFragment, DefaultParagraphProps> = ({
	contentLink,
	ctx,
	data: { text },
	layoutProps,
}) => {
	const { placement = "left", transform = "default" } = extractSettings(layoutProps);

	const width = transform == "full" ? " max-w-none" : "";
	const align = AlignClasses[placement];

	return (
		<CmsEditable
			as={RichText}
			className={`rich-text prose${width}${align}`}
			cmsFieldName="text"
			cmsId={contentLink.key}
			ctx={ctx}
			forwardCtx="ctx"
			text={text?.json}
		/>
	);
};
ParagraphElementElement.displayName = "Paragraph (Element/ParagraphElement)";
ParagraphElementElement.getDataFragment = () => ["ParagraphElementData", ParagraphElementDataFragmentDoc];

export default ParagraphElementElement;
