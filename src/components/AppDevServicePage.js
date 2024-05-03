import './AppDevServicePage.css';
import { Button } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

export const AppDevServicePage = () => {
    const navigate = useNavigate();

    // Define your service object
    const appDevService = {
      id: "appdev001",
      name: "App Development",
      description: "Professional app development service for your business.",
      price: 99.99,
    };
  
    const saveToSessionStorage = (service) => {
      sessionStorage.setItem('service', JSON.stringify(service));
    };
    
    const goToPayment = () => {
      navigate(`/paymentPage?name=${encodeURIComponent(appDevService.name)}&price=${appDevService.price}`);
    };
    return (
        <>
        <div className="flex">
            <SideNavDark />
            <div class="servicepage">
                <div class="text">

                        <b style={{paddingLeft: '150px'}}>About Our Application Development Services</b>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>At Bay Develops, we offer a comprehensive range of application development services to help businesses of all sizes create and maintain high-quality, 
                            reliable, and user-friendly applications. Our team of experienced and skilled developers can help you with everything from defining your requirements
                            and designing your application architecture to developing, testing, and deploying your application.
                            We understand that every business is different, so we take a personalized approach to every application development project. We start by working with
                            you to understand your unique needs and goals. Then, we develop a custom plan to create an application solution that will help you achieve your
                            business objectives. We understand that every business is different, so we take a personalized approach to every 
                            software development project. We start by working with you to understand your unique needs and 
                            goals. Then, we develop a custom plan to create a software solution that will help you achieve 
                            your business objectives.</div>

                        <p></p>

                        <b style={{paddingLeft: '150px'}}>We offer a wide range of application development services, including:</b>

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>Custom software development</li>
                            <li>Web application development</li>
                            <li>Mobile application development</li>
                            <li>Desktop application development</li>
                            <li>Cloud application development</li>
                            <li>Enterprise software development</li>
                            <li>DevOps consulting and implementation</li>
                            <li>Software testing and quality assurance</li>
                        </ul>
                

                        <b style={{paddingLeft: '150px'}}>We also offer a variety of additional services, such as:</b> 

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>Software maintenance and support</li>
                            <li>Software integration</li>
                            <li>Software migration</li>
                            <li>Software training</li>
                        </ul>

                        <div style={{paddingLeft: '150px'}}>We are committed to providing our clients with the highest quality application development services. We use the latest technologies and best practices
                            to develop application solutions that are secure, reliable, and easy to use. We also offer a variety of support and maintenance services to ensure that
                            your application is always running smoothly.</div>

                        <p></p>

                        <b style={{paddingLeft: '150px'}}>Why Choose Us for Your Application Development Needs?</b>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>Here are just a few reasons why you should choose Bay Develops for your application development needs:</div>

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>We have a team of experienced and skilled developers who are passionate about their work.</li>
                            <li>We offer a wide range of application development services to meet the needs of businesses of all sizes.</li>
                            <li>We take a personalized approach to every project and work closely with our clients to understand their unique needs and goals.</li>
                            <li>We use the latest technologies and best practices to develop application solutions that are secure, reliable, and easy to use.</li>
                            <li>We offer a variety of support and maintenance services to ensure that your application is always running smoothly.</li>
                        </ul>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>If you are looking for a reliable and experienced application development company, contact us today. We will be happy to discuss your needs and help 
                            you create a application solution that will help you achieve your business objectives.</div>

                        <p></p>

                        <b style={{paddingLeft: '150px'}}>Additional Information</b>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>In addition to the above, here are some additional things you may want to include in your about section:</div>

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>Your company's mission and vision</li>
                            <li>Your company's values</li>
                            <li>Your company's culture</li>
                            <li>Your company's team</li>
                            <li>Your company's portfolio of work</li>
                            <li>Your company's testimonials from past clients</li>
                            <li>Your company's contact information</li>
                        </ul>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>You can also use your about section to highlight any specializations or areas of expertise that your company has. For example, if you specialize in
                            developing mobile applications for the healthcare industry, you would want to mention that in your about section.
                            Finally, don't forget to keep your about section up-to-date. As your company grows and changes, you should update your about section to reflect those 
                            changes.</div>

                        <Button
                            sx={{ width: 300, height: 25, mt: 2, ml: 20, mb: 2, fontSize: 10 }}
                            className="self-stretch"
                            color="error"
                            name="Purchase Service"
                            size="large"
                            variant="contained"
                            onClick={goToPayment}
                        >
                            Purchase Service
                        </Button>

                </div>
                <div>
                    <img class="app_image" src="./img/appDev.jpg" alt="appImg"></img>
                </div>
            </div>
        </div>
        </>
    );
};

export default AppDevServicePage;



