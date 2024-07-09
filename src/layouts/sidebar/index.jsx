
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
// * React icons
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  
  const subMenusList = [
    {
      name: "React",
      icon: RiBuilding3Line,
      menus: ["color-render", "Dark-Mode", "Carousel", "Search","Counter",
      "Todo","FolderStructure","InfiniteScroll"],
    },
    {
      name: "Javascript",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div>  
      <motion.div 
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
          h-screen"
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
          <span className="text-xl whitespace-pre">Interview Prep</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Languages
                </small>
                <li>
                  <Link to="/javascript" className="link">JavaScript Q</Link>
                </li>
                <li >
                    <Link to="/reactjs" className="link"> React Q</Link>
                </li>
                {subMenusList?.map((menu) => (
                  // to={`/${menu.name}`}
                  <div key={menu.name} className="flex flex-col gap-1" >
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
          </ul>
        </div>
        
      </motion.div>
    </div>
  );
};

export default Sidebar;
