import { type CmsComponent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

import { type VideoMediaComponentDataFragment, VideoMediaComponentDataFragmentDoc } from "@/gql/graphql";

export const VideoMedia: CmsComponent<VideoMediaComponentDataFragment> = ({ contentLink, ctx, data }) => {
	const url: null | string | undefined = data.meta?.url?.default;
	const label: string = data.meta?.name ?? "";

	if (!url) return null;

	return (
		<CmsEditable as="div" className="relative h-full w-full" cmsId={contentLink.key} ctx={ctx}>
			<video
				aria-label={label}
				autoPlay={false}
				className="object-contain"
				controls={true}
				loop={false}
				muted={false}
				src={url}
			>
				{label}
			</video>
		</CmsEditable>
	);
};
VideoMedia.getDataFragment = () => ["VideoMediaComponentData", VideoMediaComponentDataFragmentDoc];

export default VideoMedia;
