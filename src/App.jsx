import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
//import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import {ServicesPage} from "./components/ServicesPage";
import {EMS} from "./components/ems.tsx";
//import {App} from "./components/UserDashboard.js";
import SmoothScroll from "smooth-scroll";
import "./index.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

//page routes:

const App = () => {
  return (
    <Router>
      <TopNav />
      <SideNavDark />
      <Routes>
      <Route path="/ems" element={<EMS />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;