import { products } from "../../constants/products";
import FeaturedRow from "../FeaturedRow/FeaturedRow";
export default function FeaturedPlants() {
  const title = "Featured Plants";
  return <FeaturedRow title={title} products={products} />;
}
