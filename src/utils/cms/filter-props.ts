import type { CmsComponentProps } from "@remkoj/optimizely-cms-react";

export function omit<T extends object, F extends (keyof T)[]>(omitFrom: T, fields: F): Omit<T, F[number]> {
	const outputObject: Partial<Omit<T, F[number]>> = {};
	for (const propName in omitFrom)
		if (!fields.includes(propName)) {
			//@ts-expect-error Field key not matched
			outputObject[propName] = omitFrom[propName];
		}
	return outputObject as Omit<T, F[number]>;
}

export function pick<T extends object, F extends (keyof T)[]>(pickFrom: T, fields: F): Pick<T, F[number]> {
	const outputObject: Partial<Pick<T, F[number]>> = {};
	for (const propName in pickFrom) if (fields.includes(propName)) outputObject[propName] = pickFrom[propName];
	return outputObject as Pick<T, F[number]>;
}

const CmsComponentPropKeys: (keyof Omit<CmsComponentProps<any>, "children">)[] = [
	"contentLink",
	"ctx",
	"data",
	"editProps",
	"inEditMode",
	"layoutProps",
];

export function omitCmsComponentProps<T extends object>(
	omitFrom: T,
): Omit<T, keyof Omit<CmsComponentProps<any>, "children">> {
	return omit<Partial<CmsComponentProps<any>> & T, (keyof Omit<CmsComponentProps<any>, "children">)[]>(
		omitFrom,
		CmsComponentPropKeys,
	);
}
