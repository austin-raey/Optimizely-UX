//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react";
import type { JSX, ReactNode } from "react";

import type DefaultParagraphStyles from "./DefaultParagraph.opti-style.json";

export type DefaultParagraphComponent<DT extends Record<string, any> = Record<string, any>> = (
	props: DefaultParagraphComponentProps<DT>,
) => ReactNode;
export type DefaultParagraphComponentProps<DT extends Record<string, any> = Record<string, any>> =
	JSX.IntrinsicElements["div"] & {
		data: DT;
		layoutProps: DefaultParagraphProps | undefined;
	};
export type DefaultParagraphProps = LayoutProps<typeof DefaultParagraphStyles>;

export type ParagraphElementComponent<
	DT extends Record<string, any> = Record<string, any>,
	LP extends ParagraphElementLayoutProps = ParagraphElementLayoutProps,
> = (props: ParagraphElementComponentProps<DT, LP>) => ReactNode;
export type ParagraphElementComponentProps<
	DT extends Record<string, any> = Record<string, any>,
	LP extends ParagraphElementLayoutProps = ParagraphElementLayoutProps,
> = JSX.IntrinsicElements["div"] & {
	data: DT;
	layoutProps: LP | undefined;
};

export type ParagraphElementLayoutProps = DefaultParagraphProps;

export function isDefaultParagraphProps(props?: null | ParagraphElementLayoutProps): props is DefaultParagraphProps {
	return props?.template == "DefaultParagraph";
}

export function isDefaultProps(props?: null | ParagraphElementLayoutProps): props is DefaultParagraphProps {
	return props?.template == "DefaultParagraph";
}
