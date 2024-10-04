import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./pages/Home"));
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
                <Home />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
