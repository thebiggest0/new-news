import Navbar from "@/scenes/navbar";
import News from "./scenes/news";
import Calendar from "./scenes/calendar";
import Filter from "./scenes/filter";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.home);
      } else {
        setIsTopOfPage(false);
      }
    }
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="flex ">
        <News />
        <div>
          <Calendar/>
          <Filter />
        </div>
      </div>
    </div>
  )
}


export default App;
