import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { BackgroundRowProps } from "../displayTemplates";

export const BackgroundRow: CmsLayoutComponent<BackgroundRowProps> = ({ children, layoutProps }) => {
	const layout = extractSettings(layoutProps);
	return (
		<div
			className="vb:row vb:row:BackgroundRow"
			style={{ alignItems: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
		>
			{children}
		</div>
	);
};

export default BackgroundRow;
