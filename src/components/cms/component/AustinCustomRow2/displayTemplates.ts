//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type {
	CmsComponentProps,
	LayoutProps,
	LayoutPropsSettingKeys,
	LayoutPropsSettingValues,
} from "@remkoj/optimizely-cms-react";
import type { ComponentType, JSX } from "react";

import type DefaultAustinCustomRow2Styles from "./DefaultAustinCustomRow2.opti-style.json";

export type AustinCustomRow2Component<DT extends Record<string, any> = Record<string, any>> = ComponentType<
	AustinCustomRow2ComponentProps<DT>
>;
export type AustinCustomRow2ComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & Omit<CmsComponentProps<DT, AustinCustomRow2LayoutProps>, "children">;
export type AustinCustomRow2LayoutKeys = LayoutPropsSettingKeys<AustinCustomRow2LayoutProps>;
export type AustinCustomRow2LayoutOptions<K extends AustinCustomRow2LayoutKeys> = LayoutPropsSettingValues<
	AustinCustomRow2LayoutProps,
	K
>;
export type AustinCustomRow2LayoutProps = DefaultAustinCustomRow2Props;

export type DefaultAustinCustomRow2Component<DT extends Record<string, any> = Record<string, any>> = ComponentType<
	DefaultAustinCustomRow2ComponentProps<DT>
>;
export type DefaultAustinCustomRow2ComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & Omit<CmsComponentProps<DT, DefaultAustinCustomRow2Props>, "children">;
export type DefaultAustinCustomRow2Keys = LayoutPropsSettingKeys<DefaultAustinCustomRow2Props>;
export type DefaultAustinCustomRow2Options<K extends DefaultAustinCustomRow2Keys> = LayoutPropsSettingValues<
	DefaultAustinCustomRow2Props,
	K
>;
export type DefaultAustinCustomRow2Props = LayoutProps<typeof DefaultAustinCustomRow2Styles>;

export function isDefaultAustinCustomRow2Props(
	props?: AustinCustomRow2LayoutProps | null,
): props is DefaultAustinCustomRow2Props {
	return props?.template == "DefaultAustinCustomRow2";
}

export function isDefaultProps(props?: AustinCustomRow2LayoutProps | null): props is DefaultAustinCustomRow2Props {
	return props?.template == "DefaultAustinCustomRow2";
}
