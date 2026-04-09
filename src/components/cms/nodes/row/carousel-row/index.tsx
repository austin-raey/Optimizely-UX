import { type CmsLayoutComponent, extractSettings } from "@remkoj/optimizely-cms-react/rsc";

export const CarouselRow: CmsLayoutComponent = ({ children, layoutProps }) => {
  return (
    <div
      className="vb:row vb:row:CarouselRow"
      style={{ alignItems: "stretch", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
    >
      {children}
    </div>
  );
};

export default CarouselRow;
