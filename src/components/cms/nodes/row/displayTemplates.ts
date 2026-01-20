import type { LayoutProps } from "@remkoj/optimizely-cms-react";
import type { JSX, ReactNode } from "react";

import type BackgroundRowStyles from "./BackgroundRow/BackgroundRow.opti-style.json";
import type DefaultRowStyles from "./DefaultRow/DefaultRow.opti-style.json";

export type BackgroundRowComponent<DT extends Record<string, any> = Record<string, any>> = (
	props: BackgroundRowComponentProps<DT>,
) => ReactNode;
export type BackgroundRowComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & {
		data: DT;
		layoutProps: BackgroundRowProps | undefined;
	};
export type BackgroundRowProps = LayoutProps<typeof BackgroundRowStyles>;

export type DefaultRowComponent<DT extends Record<string, any> = Record<string, any>> = (
	props: DefaultRowComponentProps<DT>,
) => ReactNode;
export type DefaultRowComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & {
		data: DT;
		layoutProps: DefaultRowProps | undefined;
	};
export type DefaultRowProps = LayoutProps<typeof DefaultRowStyles>;

export type RowComponent<
	DT extends Record<string, any> = Record<string, any>,
	LP extends RowLayoutProps = RowLayoutProps,
> = (props: RowComponentProps<DT, LP>) => ReactNode;
export type RowComponentProps<
	DT extends Record<string, any> = Record<string, any>,
	LP extends RowLayoutProps = RowLayoutProps,
> = JSX.IntrinsicElements["div"] & {
	data: DT;
	layoutProps: LP | undefined;
};

export type RowLayoutProps = BackgroundRowProps | DefaultRowProps;

export function isBackgroundRowProps(props?: null | RowLayoutProps): props is BackgroundRowProps {
	return props?.template == "BackgroundRow";
}

export function isDefaultProps(props?: null | RowLayoutProps): props is DefaultRowProps {
	return props?.template == "DefaultRow";
}

export function isDefaultRowProps(props?: null | RowLayoutProps): props is DefaultRowProps {
	return props?.template == "DefaultRow";
}
