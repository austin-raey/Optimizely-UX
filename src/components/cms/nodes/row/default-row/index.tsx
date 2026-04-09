import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { DefaultRowProps } from "../displayTemplates";

export const DefaultRow: CmsLayoutComponent<DefaultRowProps> = ({ children, layoutProps }) => {
	const layout = extractSettings(layoutProps);
	return (
		<div
			className="vb:row vb:row:DefaultRow"
			style={{ alignItems: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
		>
			{children}
		</div>
	);
};

export default DefaultRow;
