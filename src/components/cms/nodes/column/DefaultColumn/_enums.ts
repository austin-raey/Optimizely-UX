import { type extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import { type DefaultColumnProps } from "../displayTemplates";

type DefaultColumnLayoutDict<K extends keyof DefaultColumnLayoutSpec, T = any> = Record<DefaultColumnLayoutSpec[K], T>;
type DefaultColumnLayoutSpec = Required<ReturnType<typeof extractSettings<DefaultColumnProps>>>;

export const contentSpacingClasses: DefaultColumnLayoutDict<"contentSpacing", string> = {
	large: "gap-4 py-4 lg:gap-4 lg:py-4",
	medium: "gap-2 py-2",
	none: "gap-0 py-0",
	small: "gap-1 py-1",
	xl: "gap-6 py-6 lg:gap-12 lg:py-12",
	xxl: "gap-8 py-8 lg:gap-36 lg:py-36",
};

export const justifyContentClasses: DefaultColumnLayoutDict<"justifyContent", string> = {
	center: "justify-center justify-items-center",
	end: "justify-end justify-items-end",
	start: "justify-start justify-items-start",
};

export const alignContentClasses: DefaultColumnLayoutDict<"alignContent", string> = {
	center: "content-center items-center",
	end: "content-end items-end",
	start: "content-start items-start",
};

export const showFromClasses: DefaultColumnLayoutDict<"showFrom", string> = {
	always: "block",
	fromLarge: "hidden lg:block",
	fromMedium: "hidden md:block",
	fromSmall: "hidden sm:block",
};

export const minWidthClasses: DefaultColumnLayoutDict<"minWidth", string> = {
	auto: "",
	large: "lg:min-w-[32rem]",
	medium: "lg:min-w-[24rem]",
	small: "lg:min-w-[12rem]",
};

export const overFlowClasses: DefaultColumnLayoutDict<"overflow", string> = {
	clip: "overflow-hidden",
	full: "",
	left: "right-0",
	right: "left-0",
};
