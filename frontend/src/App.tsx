import Navbar from "@/scenes/navbar";
import News from "./scenes/news";
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
      <News />
    </div>
  )
}


export default App;
