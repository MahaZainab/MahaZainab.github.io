// Libraries Imports
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
// Local Imports
const HomePage = lazy(() => import("@/pages/home"));

export default function AppRouting() {
  return (
    <BrowserRouter basename="/MahaZainab.github.io/">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
