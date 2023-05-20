import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Feed } from "./components/Feed.js";
import { MakePost } from "./components/MakePost.js";
import { ViewPost } from "./components/ViewPost";

const AppRoutes = [
  {
    index: true,
    element: <Feed />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/feed',
    element: <Feed />
  },
  {
    path: '/submit',
    element: <MakePost />
  },
  {
    path: `/post/:postId`,
    element: <ViewPost />
  }
];

export default AppRoutes;
