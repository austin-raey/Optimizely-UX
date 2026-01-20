import { type CmsComponent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

import { type ImageMediaComponentDataFragment, ImageMediaComponentDataFragmentDoc } from "@/gql/graphql";

export const ImageMedia: CmsComponent<ImageMediaComponentDataFragment> = ({ contentLink, ctx, data }) => {
	const alt: string = data.alt || data.meta?.name || "";
	const url: null | string | undefined = data.meta?.url?.default;

	if (!url) return null;

	return (
		<CmsEditable as="div" className="relative h-full w-full" cmsId={contentLink.key} ctx={ctx}>
			<Image alt={alt} className="object-contain" fill src={url} />
		</CmsEditable>
	);
};
ImageMedia.getDataFragment = () => ["ImageMediaComponentData", ImageMediaComponentDataFragmentDoc];

export default ImageMedia;
