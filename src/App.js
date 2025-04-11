import Home from "./components/Home";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-card" element={<ProfileCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
