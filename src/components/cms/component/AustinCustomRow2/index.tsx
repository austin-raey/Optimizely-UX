import { type CmsComponent, CmsContentArea, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { type AustinCustomRow2DataFragment, AustinCustomRow2DataFragmentDoc } from "@/gql/graphql";

import { AustinCustomRow2LayoutProps } from "./displayTemplates";

/**
 * Austin Custom Row
 * ---
 *
 */
export const AustinCustomRow2Component: CmsComponent<AustinCustomRow2DataFragment, AustinCustomRow2LayoutProps> = ({
	ctx,
	data,
	editProps,
	layoutProps,
}) => {
	console.log(data);
	return (
		<CmsEditable className="bg-red-500" {...editProps}>
			<CmsContentArea className="w-full" ctx={ctx} fieldName="TopContentArea" items={data.ColumnOne} />
		</CmsEditable>
	);
};
AustinCustomRow2Component.displayName = "Austin Custom Row (_component/AustinCustomRow2)";
AustinCustomRow2Component.getDataFragment = () => ["AustinCustomRow2Data", AustinCustomRow2DataFragmentDoc];

export default AustinCustomRow2Component;
