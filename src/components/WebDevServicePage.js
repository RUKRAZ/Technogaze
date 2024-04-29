import './WebDevServicePage.css';
import {Button} from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

export const WebDevServicePage = () => {
  const navigate = useNavigate();

  // Define your service object
  const webDevService = {
    id: "webdev001",
    name: "Web Development",
    description: "Professional web development service for your business.",
    price: 99.99,
  };

  const saveToSessionStorage = (service) => {
    sessionStorage.setItem('service', JSON.stringify(service));
  };
  
  const goToPayment = () => {
    navigate(`/paymentPage?name=${encodeURIComponent(webDevService.name)}&price=${webDevService.price}`);
  };
  
  
  return (
    <>
    <div className="flex">
      <SideNavDark />
    <div class="servicepage">
        <div class="text">

            <b style={{paddingLeft: '150px'}}>About Our Web Development Services</b>

            <p></p>

            <div style={{paddingLeft: '150px'}}>At Bay Develops, we offer a comprehensive range of web development services to help businesses
               of all sizes create and maintain high-quality, user-friendly websites and web applications. 
               Our team of experienced and skilled developers can help you with everything from designing your
                website's layout and navigation to developing complex custom features and integration.</div>

            <p></p>

            <div style={{paddingLeft: '150px'}}>We understand that every business is different, so we take a personalized approach to every web
               development project. We start by working with you to understand your unique needs and goals.
                Then, we develop a custom plan to create a website that will help you achieve your business
                 objectives.</div>

            <p></p>

            <b style={{paddingLeft: '150px'}}>We offer a wide range of web development services, including:</b>

            <p></p>

            <ul style={{paddingLeft: '150px'}}>
              <li>Website design and development</li>
              <li>Web application development</li>
              <li>E-commerce development</li>
              <li>Content management system (CMS) development</li>
              <li>Custom web development</li>
              <li>Web hosting and maintenance</li>
            </ul>

            <b style={{paddingLeft: '150px'}}>We also offer a variety of additional services, such as:</b>

            <p></p>

            <ul style={{paddingLeft: '150px'}}>
              <li>Search engine optimization (SEO)</li>
              <li>Pay-per-click (PPC) advertising</li>
              <li>Social media marketing</li>
              <li>Content creation</li>
            </ul>

            <div style={{paddingLeft: '150px'}}>We are committed to providing our clients with the highest quality web development services.
               We use the latest technologies and best practices to create websites that are secure, fast,
                and easy to use. We also offer a variety of support and maintenance services to ensure that
                 your website is always running smoothly.</div>

            <p></p>

            <b style={{paddingLeft: '150px'}}>Why Choose Us for Your Web Development Needs?</b>

            <p></p>

            <div style={{paddingLeft: '150px'}}>Here are just a few reasons why you should choose Bay Develops for your web development needs:</div>

            <p></p>

            <ul style={{paddingLeft: '150px'}}>
              <li> We have a team of experienced and skilled developers who are passionate about their work.</li>
              <li>We offer a wide range of web development services to meet the needs of businesses of all sizes.</li>
              <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
              <li>We use the latest technologies and best practices to create websites that are secure, fast, and easy to use.</li>
              <li>We offer a variety of support and maintenance services to ensure that your website is always running smoothly.</li>
            </ul>

            <div style={{paddingLeft: '150px'}}>If you are looking for a reliable and experienced web development company, contact us today.
               We will be happy to discuss your needs and help you create a website that will help you achieve
                your business objectives.</div>

              <Button
                sx={{ width: 300, height: 25, mt: 2, ml: 35, mb: 2, fontSize: 10 }}
                className="self-stretch"
                color="error"
                name="Purchse Service"
                size="large"
                variant="contained"
                onClick={goToPayment}
              >
                Purchase Service
              </Button>
        </div>
        <div>
          <img class="web_dev" src="./img/webDev.jpg" width="500px" alt="webDev"></img>
        </div>
    </div>
    </div>
    </>
  );
}

export default WebDevServicePage;