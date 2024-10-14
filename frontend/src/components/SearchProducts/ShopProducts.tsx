import { useState, useEffect } from "react";
import AdBanner from "./Banner/AdBanner";
import Filter from "./Filter";
import Products from "./Products";
import { plantProducts } from "../../constants/tempProducts";
import filterMap from "../../constants/filtermap";
export default function ShopProducts() {
  const [filter, setFilter] = useState<any>({ plantSizes: [], price: [] });
  const [products, setProducts] = useState(plantProducts);
  const handleFilter = (e: any) => {
    setFilter((prev: any) => ({
      ...prev,
      plantSizes: prev.plantSizes.includes(e.target.value)
        ? prev.plantSizes.filter((item: string) => item !== e.target.value)
        : [...prev.plantSizes, e.target.value],
    }));
  };

  useEffect(() => {
    const getFilteredProducts = () => {
      setProducts(() =>
        plantProducts.filter((product) =>
          filter.plantSizes.length != 0
            ? filter.plantSizes.includes(product.size)
            : true
        )
      );
    };
    getFilteredProducts();
    console.log(filter);
  }, [filter]);
  console.log(products);
  return (
    <div className="max-w-[1600px] w-full">
      <AdBanner />
      <div className="px-[4vw] flex gap-x-8">
        <Filter
          filterMap={filterMap}
          handleFilter={handleFilter}
          filter={filter}
        />
        <Products products={products} />
      </div>
    </div>
  );
}
