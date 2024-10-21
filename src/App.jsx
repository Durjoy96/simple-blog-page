import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Header/Navbar";
import SpentTime from "./components/Bookmark/SpentTime";
import Bookmark from "./components/Bookmark/Bookmark";
import { useState } from "react";

function App() {
  const [bookmarkData, setBookmarkData] = useState([]);

  const getBookmarkedData = (data) => {
    const newArr = [...bookmarkData, data];
    console.log(newArr);
    setBookmarkData(newArr);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.5fr]">
        <Blogs getBookmarkedData={getBookmarkedData}></Blogs>
        <div className="mt-6">
          <SpentTime></SpentTime>
          <Bookmark data={bookmarkData}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
