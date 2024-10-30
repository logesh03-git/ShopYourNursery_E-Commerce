import React, { Suspense } from "react";
import PopularPlants from "../../components/PopularPlants/PopularPlants";
import FeaturedPlants from "../../components/FeaturedPlants/FeaturedPlants";
import Carousel from "../../components/Carousel/Carousel";
import DeliveryDetail from "../../components/OrderDetail/DeliveryDetail";
import Shippingaddress from "../../components/OrderDetail/Shippingaddress";
import Review from "../../components/OrderDetail/Review";
import GrandTotal from "../../components/OrderDetail/GrandTotal";

const DiscoverCategories = React.lazy(
  () => import("../../components/DiscoverCategories/DiscoverCategories")
);
const CustomerReviews = React.lazy(
  () => import("../../components/Reviews/CustomerReviews")
);
const Vase = React.lazy(() => import("../../components/Vase/Vase"));
export default function Home() {
  return (
    <>
      <Carousel />
      <DeliveryDetail />
      <Shippingaddress />
      <Review />
      <GrandTotal />
      <FeaturedPlants />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <DiscoverCategories />
      </Suspense>
      <PopularPlants />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <Vase />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen font-semibold text-xl">
            Loading Products...
          </div>
        }
      >
        <CustomerReviews />
      </Suspense>
    </>
  );
}
