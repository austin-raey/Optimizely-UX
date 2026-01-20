import type { LayoutProps } from "@remkoj/optimizely-cms-react";
import type { JSX, ReactNode } from "react";

import type DefaultGridStyles from "./DefaultGrid/DefaultGrid.opti-style.json";

export type DefaultGridComponent<DT extends Record<string, any> = Record<string, any>> = (
	props: DefaultGridComponentProps<DT>,
) => ReactNode;
export type DefaultGridComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & {
		data: DT;
		layoutProps: DefaultGridProps | undefined;
	};
export type DefaultGridProps = LayoutProps<typeof DefaultGridStyles>;

export type SectionComponent<
	DT extends Record<string, any> = Record<string, any>,
	LP extends SectionLayoutProps = SectionLayoutProps,
> = (props: SectionComponentProps<DT, LP>) => ReactNode;
export type SectionComponentProps<
	DT extends Record<string, any> = Record<string, any>,
	LP extends SectionLayoutProps = SectionLayoutProps,
> = JSX.IntrinsicElements["div"] & {
	data: DT;
	layoutProps: LP | undefined;
};

export type SectionLayoutProps = DefaultGridProps;

export function isDefaultGridProps(props?: null | SectionLayoutProps): props is DefaultGridProps {
	return props?.template == "DefaultGrid";
}

export function isDefaultProps(props?: null | SectionLayoutProps): props is DefaultGridProps {
	return props?.template == "DefaultGrid";
}
