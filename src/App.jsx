import { Outlet, Route, Routes } from "react-router-dom";

import Sidebar from "./layouts/sidebar";


// https://www.youtube.com/watch?v=YELPZw5ieHQ
// https://github.com/Sridhar-C-25/sidebar-with-submenu_vid/tree/main
// https://www.youtube.com/watch?v=xexnkL_3Fgw

const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-auto mx-auto my-5">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
