import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProfileCard from "./components/ProfileCard";
import Collections from "./components/Collections";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/our-collections" element={<Collections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
