import React, { lazy, Suspense } from "react"
import { Redirect } from "react-router-dom"
import HomeLayout from "layouts/HomeLayout"
import BlankLayout from "layouts/BlankLayout"

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import("application/Recommend"));
const SingersComponent = lazy(() => import("application/Singers"));
const RankComponent = lazy(() => import("application/Rank"));
const AlbumComponent = lazy(() => import("application/Album"))
const SingerComponent = lazy(() => import("application/Singer"))
const SearchComponent = lazy(() => import("application/Search"))
const MVComponent = lazy(() => import("application/MV"))
// 导入路由
export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />

          },
          {
            path: '/recommend',
            component: SuspenseComponent(RecommendComponent),
            routes: [
              {
                path: "/recommend/:id",
                exact : true,
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/singers",
            component: SuspenseComponent(SingersComponent),
            routes : [
              {
                path : "/singers/:id",
                exact : true,
                component : SuspenseComponent(SingerComponent)
              }
            ]
          },
          {
            path: "/rank",
            component: SuspenseComponent(RankComponent),
            routes : [
              {

                path : "/rank/:id",
                exact : true,
                component : SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/mv",
            component: SuspenseComponent(MVComponent),
          },
          {
            path : "/search",
            exact : true,
            component : SuspenseComponent(SearchComponent)
          }
        ]
      },
    ]
  }
]