import { Suspense } from "react";
import Home from "../pages/home";
import Counter from "../pages/counter";
import Login from "../pages/login";
import Demo from "../pages/demo";
import BaseLayout from "../layouts/BaseLayout";

//- 懒加载优化
const lazyLoad = (children) => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

export const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: "/counter",
        element: lazyLoad(<Counter />),
      },
      {
        path: "/demo",
        element: lazyLoad(<Demo />),
      },
    ],
  },
  {
    path: "/login",
    element: lazyLoad(<Login />),
  },
];
