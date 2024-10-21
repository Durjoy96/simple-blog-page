import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Header/Navbar";
import SpentTime from "./components/SpentTime";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-[1fr_.5fr] gap-6 mt-6">
        <Blogs></Blogs>
        <div>
          <SpentTime></SpentTime>
        </div>
      </div>
    </>
  );
}

export default App;
