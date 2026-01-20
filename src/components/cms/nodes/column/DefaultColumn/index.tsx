import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { type DefaultColumnProps } from "../displayTemplates";
import {
	alignContentClasses,
	contentSpacingClasses,
	justifyContentClasses,
	minWidthClasses,
	overFlowClasses,
	showFromClasses,
} from "./_enums";

export const DefaultColumn: CmsLayoutComponent<DefaultColumnProps> = ({ children, layoutProps }) => {
	const tpl = layoutProps?.template ?? "none";
	const baseClasses: string[] = ["vb:column vb:column:" + tpl + " flex-1"];
	const cssClasses: string[] = ["flex flex-col"];
	const {
		alignContent = "start",
		contentSpacing = "none",
		justifyContent = "start",
		minWidth = "auto",
		overflow = "full",
		showFrom = "always",
	} = extractSettings(layoutProps);

	// Basic visibility rules
	baseClasses.push(showFromClasses[showFrom]);

	// Container styling
	cssClasses.push(contentSpacingClasses[contentSpacing]);
	cssClasses.push(justifyContentClasses[justifyContent]);
	cssClasses.push(alignContentClasses[alignContent]);
	cssClasses.push(minWidthClasses[minWidth]);
	cssClasses.push(overFlowClasses[overflow]);
	const useChildContainer = overflow == "right" || overflow == "left";

	// Output container
	return useChildContainer ? (
		<div className={baseClasses.join(" ") + " relative"}>
			<div className={"relative top-0 " + cssClasses.join(" ")}>{children}</div>
		</div>
	) : (
		<div className={[...baseClasses, "relative top-0", ...cssClasses].join(" ")}>{children}</div>
	);
};
DefaultColumn.displayName = "DefaultColumn";

export default DefaultColumn;
