import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Tempbox from "../components/Tempbox";
const Home = () => {
  const [isOpenSidebar, setisOpenSidebar] = useState(false);
  function SidebarChange(a) {
    setisOpenSidebar(a);
  }
  return (
    <div>
      <div className="flex gap-5 items-center min-h-screen">
        <Sidebar bh={isOpenSidebar} />
        <Tempbox props={SidebarChange} op={isOpenSidebar} />
      </div>
    </div>
  );
};

export default Home;
