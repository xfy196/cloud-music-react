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

// 导入路由
export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        // render: () => <Redirect to={"/recommend"} />
      }
    ]
  }
]