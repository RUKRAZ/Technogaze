import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

import { Contact } from "./components/Contact";
import { Landing } from "./components/landing";
import { useNavigate } from 'react-router-dom';

import { EmployeeLogin } from "./components/employee_login";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EmployeeRegister } from "./components/employee_register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import { ProfilePage } from "./components/ProfilePage";
import {ServicesPage} from "./components/ServicesPage";
import { VerifyEmailPage } from "./components/VerifyEmailPage";
import { CreditCardForm } from "./components/paymentPage";
import { ResetPassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
import {UserDash} from "./components/UserDashboard.js";
import { UIUXDevServicePage } from "./components/UIUXDevServicePage";
import { WebDevServicePage } from "./components/WebDevServicePage";
import { AppDevServicePage } from "./components/AppDevServicePage";
import { SoftwareDevServicePage } from "./components/SoftwareDevServicePage";
import SmoothScroll from "smooth-scroll";
import "./index.css";
import ChatBot from 'react-simple-chatbot';



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});





//page routes:

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

function NavBarLogic() {
    const location = useLocation();

    const loggedInPaths = ['/services', '/ems'];
    const loggedOutPath = ['/login'];

    const loggedIn = loggedInPaths.includes(location.pathname);
    const loggedOut = loggedOutPath.includes(location.pathname);

    if(loggedIn){
        setIsLoggedIn(true);
    }   

    if(loggedOut){
        setIsLoggedIn(false);
    }
};


const navigate = useNavigate();

  const handleChatTrigger = (path) => {
    return () => {
      navigate(path);
    };
  };



  return (
    <Router>
        <Navigation />
    
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path ="/uiux-services" element={<UIUXDevServicePage />} />     
        <Route path="/webDev-services" element={<WebDevServicePage />} /> 
      
        <Route path="/software-services" element={<SoftwareDevServicePage />} />  
        
        
        <Route path="/appDev-services" element ={<AppDevServicePage />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee_register" element={<EmployeeRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-dashboard" element={<UserDash />} />
        <Route path="/ems" element={<EMS />} />
        {/* Add other routes as needed */}
      </Routes>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Welcome to Bay Develops, what can we help you with today?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Products', trigger: handleChatTrigger('/services') },
              { value: 2, label: 'Sign up!', trigger: handleChatTrigger('/register') },
              { value: 3, label: 'Learn about us', trigger: handleChatTrigger('/about') },
              { value: 4, label: 'Contact us', trigger: handleChatTrigger('/contact') }
            ],
        
          },
          {
            id: '3',
            message: 'Redirecting...',
            trigger: () => handleChatTrigger,
            waitAction: true,
          },

        ]}
      />

      

    </Router>

  );
};


const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInPaths = ['/services', '/ems'];
    const loggedOutPath = ['/login'];

    setIsLoggedIn(loggedInPaths.includes(location.pathname));
  }, [location.pathname]);

  const handleChatTrigger = (path) => {
    navigate(path);
  };

  return (
    <>
      {isLoggedIn ? <SideNavDark /> : <TopNav />}
    </>
  );
};

export default App;



/*<ChatBot
    steps={[
      {
        id: '1',
        message: 'Welcome to Bay Develops, what can we help you with today?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Products', trigger: handleChatTrigger('/services') },
          { value: 2, label: 'Sign up!', trigger: handleChatTrigger('/register') },
          { value: 3, label: 'Learn about us', trigger: handleChatTrigger('/about') },
          { value: 4, label: 'Contact us', trigger: handleChatTrigger('/contact') }
        ],
        
      },
      {
        id: '3',
        message: 'Redirecting...',
        trigger: () => chatTrigger,
        waitAction: true,
      },

    ]}
  />*/ 