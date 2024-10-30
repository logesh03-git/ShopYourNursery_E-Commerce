import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const ShopProducts = React.lazy(
  () => import("./components/SearchProducts/ShopProducts")
);
const FavoritePage = React.lazy(() => import("./pages/Favorite/FavoritePage"));
const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

import Layout from "./layout/Layout";
import { Suspense } from "react";
import Checkout from "./components/CheckoutPayment/Checkout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shop-plants"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <ShopProducts />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <About />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <Contact />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <CartPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/cart/checkout"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <Checkout />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-screen font-semibold text-xl">
                    Loading...
                  </div>
                }
              >
                <FavoritePage />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
