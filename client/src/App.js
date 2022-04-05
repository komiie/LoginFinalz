import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Loginsida from "./Components/Loginsida";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginsida" element={<Loginsida />} />
      </Routes>
    </Router>
  );
}

export default App;
