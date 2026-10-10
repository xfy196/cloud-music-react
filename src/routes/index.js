import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "layouts/HomeLayout";

const RecommendComponent = lazy(() => import("application/Recommend"));
const SingersComponent = lazy(() => import("application/Singers"));
const RankComponent = lazy(() => import("application/Rank"));
const AlbumComponent = lazy(() => import("application/Album"));
const SingerComponent = lazy(() => import("application/Singer"));
const SearchComponent = lazy(() => import("application/Search"));
const MVComponent = lazy(() => import("application/MV"));
const MvDetailComponent = lazy(() => import("application/MvDetail"));
const SkinsComponent = lazy(() => import("application/Skins"));

function LazyPage({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Navigate to="/recommend" replace />} />
        <Route
          path="recommend"
          element={
            <LazyPage>
              <RecommendComponent />
            </LazyPage>
          }
        >
          <Route
            path=":id"
            element={
              <LazyPage>
                <AlbumComponent />
              </LazyPage>
            }
          />
        </Route>
        <Route
          path="singers"
          element={
            <LazyPage>
              <SingersComponent />
            </LazyPage>
          }
        >
          <Route
            path=":id"
            element={
              <LazyPage>
                <SingerComponent />
              </LazyPage>
            }
          />
        </Route>
        <Route
          path="rank"
          element={
            <LazyPage>
              <RankComponent />
            </LazyPage>
          }
        >
          <Route
            path=":id"
            element={
              <LazyPage>
                <AlbumComponent />
              </LazyPage>
            }
          />
        </Route>
        <Route
          path="mv"
          element={
            <LazyPage>
              <MVComponent />
            </LazyPage>
          }
        >
          <Route
            path=":id"
            element={
              <LazyPage>
                <MvDetailComponent />
              </LazyPage>
            }
          />
        </Route>
        <Route
          path="search"
          element={
            <LazyPage>
              <SearchComponent />
            </LazyPage>
          }
        />
        <Route
          path="changeSkins"
          element={
            <LazyPage>
              <SkinsComponent />
            </LazyPage>
          }
        />
      </Route>
    </Routes>
  );
}
