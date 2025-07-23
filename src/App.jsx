import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchFlight from './components/SearchFlight';
import Contact from './components/Contact';

const App = () => {
  const [tab, setTab] = useState("home");

  return (
    <Router>
      <Navbar tab={tab} />
      <div className="">
        <Routes>
          <Route path="/" element={<Hero setTab={setTab} />} />
          <Route path="/search" element={<SearchFlight setTab={setTab} />} />
          <Route path="/about" element={<About setTab={setTab} />} />
          <Route path="/contact" element={<Contact setTab={setTab} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
