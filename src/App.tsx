import { Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="relative flex">
      <h1>sidebar</h1>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <h1>Search bar</h1>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<h1>top artists</h1>} />
              <Route path="/top-charts" element={<h1>Top Charts</h1>} />
              <Route path="/around-you" element={<h1>Aroubd you</h1>} />
              <Route path="/artists/:id" element={<h1>Artists details</h1>} />
              <Route path="/songs/:songid" element={<h1>Song details</h1>} />
              <Route path="/search/:searchTerm" element={<h1>Search</h1>} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <h1>Top play</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
