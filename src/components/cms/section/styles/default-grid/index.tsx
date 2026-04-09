import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { DefaultGridProps } from "../displayTemplates";

export const DefaultGrid: CmsLayoutComponent<DefaultGridProps> = ({ children, layoutProps }) => {
	const layout = extractSettings(layoutProps);
	return <div className="vb:_section vb:_section:DefaultGrid">{children}</div>;
};

export default DefaultGrid;
