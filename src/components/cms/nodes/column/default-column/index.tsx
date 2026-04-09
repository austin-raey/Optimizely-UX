import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { DefaultColumnProps } from "../displayTemplates";

export const DefaultColumn: CmsLayoutComponent<DefaultColumnProps> = ({ children, layoutProps }) => {
	const layout = extractSettings(layoutProps);
	return (
		<div
			className="vb:column vb:column:DefaultColumn"
			style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
		>
			{children}
		</div>
	);
};

export default DefaultColumn;
