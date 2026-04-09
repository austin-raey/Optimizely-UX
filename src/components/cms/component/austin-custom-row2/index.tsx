import { type CmsComponent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { type AustinCustomRow2DataFragment, AustinCustomRow2DataFragmentDoc } from "~/gql/graphql";

import { AustinCustomRow2LayoutProps } from "./displayTemplates";

/**
 * Austin Custom Row
 * ---
 *
 */
export const AustinCustomRow2Component: CmsComponent<AustinCustomRow2DataFragment, AustinCustomRow2LayoutProps> = ({
  data,
  editProps,
  layoutProps,
}) => {
  const componentName = "Austin Custom Row";
  const componentInfo = "";
  return (
    <CmsEditable className="border-y-solid mb-4 w-full border-y border-y-slate-900 py-2" {...editProps}>
      <div className="font-bold italic">{componentName}</div>
      <div>{componentInfo}</div>
      {Object.getOwnPropertyNames(data).length > 0 && (
        <pre className="w-full overflow-x-hidden rounded-sm border border-solid border-slate-900 bg-slate-200 p-2 font-mono text-sm text-slate-900">
          {JSON.stringify(data, undefined, 4)}
        </pre>
      )}
    </CmsEditable>
  );
};
AustinCustomRow2Component.displayName = "Austin Custom Row (_component/AustinCustomRow2)";
AustinCustomRow2Component.getDataFragment = () => ["AustinCustomRow2Data", AustinCustomRow2DataFragmentDoc];

export default AustinCustomRow2Component;
