import type { LayoutProps } from "@remkoj/optimizely-cms-react";
import type { JSX, ReactNode } from "react";

import type DefaultColumnStyles from "./DefaultColumn/DefaultColumn.opti-style.json";

export type ColumnComponent<
	DT extends Record<string, any> = Record<string, any>,
	LP extends ColumnLayoutProps = ColumnLayoutProps,
> = (props: ColumnComponentProps<DT, LP>) => ReactNode;
export type ColumnComponentProps<
	DT extends Record<string, any> = Record<string, any>,
	LP extends ColumnLayoutProps = ColumnLayoutProps,
> = JSX.IntrinsicElements["div"] & {
	data: DT;
	layoutProps: LP | undefined;
};
export type ColumnLayoutProps = DefaultColumnProps;

export type DefaultColumnComponent<DT extends Record<string, any> = Record<string, any>> = (
	props: DefaultColumnComponentProps<DT>,
) => ReactNode;
export type DefaultColumnComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & {
		data: DT;
		layoutProps: DefaultColumnProps | undefined;
	};

export type DefaultColumnProps = LayoutProps<typeof DefaultColumnStyles>;

export function isDefaultColumnProps(props?: ColumnLayoutProps | null): props is DefaultColumnProps {
	return props?.template == "DefaultColumn";
}

export function isDefaultProps(props?: ColumnLayoutProps | null): props is DefaultColumnProps {
	return props?.template == "DefaultColumn";
}
