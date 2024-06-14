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

  const [stateNews, setStateNews] = useState([]);
  useEffect(() => {
    getNews();
  },[]);

  const getNews = async (category?: string) => {
    const endpoint = category ? `/api/news/${category}` : '/api/news/';
    const response = await fetch(endpoint);
    const data = await response.json();
    setStateNews(data);
  }

  return (
    <div className="flex flex-col">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="flex justify-between">
        <div className="w-1/6">
          <div className="fixed">
            <Calendar />
            <Filter getNews={getNews} />
          </div>
        </div>
        <News state={stateNews}/>
      </div>
    </div>
  )
}


export default App;
