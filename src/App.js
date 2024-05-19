import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from "./components/HomePage";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import MovieDetailedView from "./components/MovieDetailedView";
import { useState } from "react";

function App() {
  const [value,setValue] = useState("")
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage category="popular" value={value} setValue={setValue}/>}/>
        <Route path="/toprated" element={<TopRated category="top_rated" value={value} setValue={setValue}/>} />
        <Route path="/upcoming" element={<Upcoming category="upcoming" value={value} setValue={setValue}/>}/>
        <Route path ="/:id" element={<MovieDetailedView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
