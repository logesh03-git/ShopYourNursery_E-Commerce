import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
import Layout from "./layout/Layout";
import { Suspense } from "react";
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
      </Routes>
    </BrowserRouter>
  );
}
