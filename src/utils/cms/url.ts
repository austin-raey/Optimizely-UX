import { type LinkDataFragment, type LinkItemDataFragment, type ReferenceDataFragment } from "@/gql/graphql";

export type LinkData = LinkDataFragment & {
	" $fragmentRefs"?: {
		LinkDataFragment: LinkDataFragment;
	};
};
export type LinkItemData = LinkItemDataFragment & {
	" $fragmentRefs"?: {
		LinkItemDataFragment: LinkItemDataFragment;
	};
};
export type ReferenceData = ReferenceDataFragment & {
	" $fragmentRefs"?: {
		ReferenceDataFragment: ReferenceDataFragment;
	};
};

export function getLinkData(input?: LinkData | LinkItemData | null | ReferenceData): LinkData | undefined {
	if (!input) return undefined;
	if ((input as ReferenceData).url) return (input as ReferenceData).url ?? undefined;
	return (input as LinkData) ?? undefined;
}

export function linkDataToUrl(item: LinkData | null | undefined): undefined | URL {
	try {
		return new URL(item?.default ?? "/", item?.base ?? undefined);
	} catch {
		return undefined;
	}
}
