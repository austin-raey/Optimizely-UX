import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";

export const CardColumn: CmsLayoutComponent = ({ children }) => {
	// const layout = extractSettings(layoutProps);
	return (
		<div className="vb:column vb:column:CardColumn" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
			{children}
		</div>
	);
};

export default CardColumn;
