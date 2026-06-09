import { Catalog } from "../../Catalog/Catalog";
import { Filters } from "./Filters/Filters";

export const CatalogPage = () => {
  return (
    <>
      <Filters />
      <Catalog />
    </>
  );
};
