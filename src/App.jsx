import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Header/Navbar";
import SpentTime from "./components/Bookmark/SpentTime";
import Bookmark from "./components/Bookmark/Bookmark";
import { useState } from "react";

function App() {
  const [bookmarkData, setBookmarkData] = useState([]);
  const [times, setTimes] = useState([]);

  const getBookmarkedData = (data) => {
    const newArr = [...bookmarkData, data];
    setBookmarkData(newArr);
  };

  const getTime = (data) => {
    const newArr = [...times, data.read_time];
    setTimes(newArr);
    //remove the read blog from the bookmark
    const newBookmarkArr = bookmarkData.filter((item) => item !== data);
    setBookmarkData(newBookmarkArr);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.5fr]">
        <Blogs getBookmarkedData={getBookmarkedData} getTime={getTime}></Blogs>
        <div className="mt-6 sticky top-6 h-screen">
          <SpentTime times={times}></SpentTime>
          <Bookmark data={bookmarkData}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
