import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

export const CardRow: CmsLayoutComponent = ({ children, layoutProps }) => {
	return (
		<div
			className="vb:row vb:row:CardRow"
			style={{ alignItems: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
		>
			{children}
		</div>
	);
};

export default CardRow;
