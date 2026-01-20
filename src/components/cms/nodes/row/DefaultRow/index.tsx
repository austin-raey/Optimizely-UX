import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { DefaultRowProps } from "../displayTemplates";

enum AlignContentClasses {
	center = "content-center items-center",
	end = "content-end items-end",
	start = "content-start items-start",
	stretch = "content-stretch items-stretch",
}

enum ContentSpacingClasses {
	large = "gap-4 lg:gap-8",
	medium = "gap-4",
	none = "gap-0",
	small = "gap-2",
	xl = "gap-4 lg:gap-24",
	xxl = "gap-4 lg:gap-72",
}

enum JustifyContentClasses {
	center = "justify-center justify-items-center",
	end = "justify-end justify-items-end",
	start = "justify-start justify-items-start",
	stretch = "justify-stretch justify-items-stretch",
}

enum RowFromClasses {
	lg = "lg:flex-row",
	md = "md:flex-row",
	xl = "xl:flex-row",
}

enum TextClasses {
	dark = "with-dark-text",
	inherit = "",
	light = "with-light-text",
	lightShadow = "with-light-text with-text-shadow",
}

enum VerticalSpacingClasses {
	large = "my-8",
	medium = "my-4",
	none = "my-0",
	small = "my-2",
	verylarge = "lg:my-40 my-20",
}

enum WidthClasses {
	container = "container mx-auto",
	full = "",
}

export const DefaultRow: CmsLayoutComponent<DefaultRowProps> = ({ children, layoutProps }) => {
	const {
		alignContent = "start",
		contentSpacing = "none",
		justifyContent = "start",
		maxWidth = "full",
		showAsRowFrom = "lg",
		textColor = "inherit",
		verticalSpacing = "small",
	} = extractSettings(layoutProps);

	const spacing = ContentSpacingClasses[contentSpacing] ?? "";
	const justify = JustifyContentClasses[justifyContent] ?? "";
	const align = AlignContentClasses[alignContent] ?? "";
	const vertical = VerticalSpacingClasses[verticalSpacing] ?? "";
	const rowFrom = RowFromClasses[showAsRowFrom] ?? "";
	const width = WidthClasses[maxWidth] ?? "";
	const text = TextClasses[textColor] ?? "";

	return (
		<div
			className={`vb:row vb:row:DefaultRow flex flex-1 flex-col flex-nowrap ${rowFrom} ${justify} ${align} ${vertical} ${spacing} ${width} ${text}`}
		>
			{children}
		</div>
	);
};

DefaultRow.displayName = "DefaultRow";

export default DefaultRow;
