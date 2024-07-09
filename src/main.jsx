import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Reactjs from "./layouts/Reactjs/Reactjs";
import Javascript from "./layouts/Javascript/Javascript";
import Colorrender from "./layouts/Reactcode/Colorrender";
import Darkmode from "./layouts/Reactcode/Darkmode";
import Carousel from "./layouts/Reactcode/Carousel";
import Search from "./layouts/Reactcode/Search";
import Counter from "./layouts/Reactcode/Counter";
import Todo from "./layouts/Reactcode/Todo";
import FolderStructure from "./layouts/Reactcode/FolderStructure/FolderStructure";
import fileExplorer from "./layouts/Reactcode/FolderStructure/data";
import InfiniteScroll from "./layouts/Reactcode/InfiniteScroll";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<errorElement/>,
    children:[
      {
        path:"/Reactjs",
        element: <Reactjs/>
      },
      {
        path:"/javascript",
        element: <Javascript/>
      },
      {
        path:"/color-render",
        element: <Colorrender/>
      },
      {
        path:"/Dark-Mode",
        element: <Darkmode/>
      },
      {
        path:"/Carousel",
        element: <Carousel/>
      },
      {
        path:"/Search",
        element: <Search/>
      },
      {
        path:"/Counter",
        element: <Counter/>
      },
      {
        path:"/Todo",
        element: <Todo/>
      },
      {
        path:"/FolderStructure",
        element: <FolderStructure fileExplorer={fileExplorer}/>
      },
      {
        path:"/InfiniteScroll",
        element: <InfiniteScroll/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={appRouter}/>
    </StrictMode>
  
);
