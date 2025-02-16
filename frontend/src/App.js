import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={<h1 className="text-center mt-10">About Pages</h1>} />
        <Route path="/projects" element={<h1 className="text-center mt-10">Projects Page</h1>} />
        <Route path="/contact" element={<h1 className="text-center mt-10">Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;