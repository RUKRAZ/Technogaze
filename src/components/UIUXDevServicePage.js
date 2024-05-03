import './UIUXDevServicePage.css';
import { Button } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>


export const UIUXDevServicePage = () => {
    const navigate = useNavigate();

    // Define your service object
    const uiuxDevService = {
      id: "uiuxDev001",
      name: "UI/UX Development",
      description: "Professional UI/UX development service for your business.",
      price: 99.99,
    };
  
    const saveToSessionStorage = (service) => {
      sessionStorage.setItem('service', JSON.stringify(service));
    };
    
    const goToPayment = () => {
      navigate(`/paymentPage?name=${encodeURIComponent(uiuxDevService.name)}&price=${uiuxDevService.price}`);
    };

    return (
        <>
        <div className="flex">
            <SideNavDark />
            <div class="servicepage">
                <div class="text">

                        <b style={{paddingLeft: '150px'}}>About Our UI/UX Design Services</b>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>At Bay Develops, we offer a comprehensive range of UI/UX design services to help businesses of all sizes create and maintain user-friendly and visually, 
                            appealing digital products. Our team of experienced and skilled designers can help you with everything from understanding your user's needs and
                            designing wire-frames and prtotypes to creating high-fidelity mock-ups and implementing your final design.
                            We believe that good UI/UX design is essential for creating successful digital products. We take a user-centered approach to our design process,
                            ensuring that every decision we make is based on the needs and wants of your target users. We also use the latest design trends and technologies to 
                            create interfaces that are both visually appealing and easy to use.</div>

                        <p></p>

                        <b style={{paddingLeft: '150px'}}>We offer a wide range of UI/UX design services, including:</b>

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>User research and analysis</li>
                            <li>Wireframing and prototyping</li>
                            <li>Visual design</li>
                            <li>Interaction design</li>
                            <li>Usability testing</li>
                            <li>Accessibility testing</li>
                            <li>Implementation support</li>
                        </ul>
                
                        <b style={{paddingLeft: '150px'}}>We also offer a variety of additional services, such as:</b> 

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>Brand indentity design</li>
                            <li>Content design</li>
                            <li>Icon design</li>
                            <li>Motion graphics design</li>
                            <li>Prototyping tools training</li>
                        </ul>

                        <div style={{paddingLeft: '150px'}}>We are committed to providing our clients with the highest quality UI/UX design services. We work closely with our clients at every stage of the design
                            process to ensure that their needs are met and that they are happy with the final results.</div>

                        <p></p>

                        <b style={{paddingLeft: '150px'}}>Why Choose Us for Your UI/UX Design Needs?</b>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>Here are just a few reasons why you should choose Bay Develops for your UI/UX design needs:</div>

                        <p></p>

                        <ul style={{paddingLeft: '150px'}}>
                            <li>We have a team of experienced and skilled developers who are passionate about creating user-friendly and visually appealing digital products.</li>
                            <li>We take a user-centered approach to our design process, ensuring that every decision we make is based on the needs and wants of your target 
                                users.</li>
                            <li>We use the latest design trends and technologies to create interfaces that are both visually appealing and easy to use.</li>
                            <li>We offer a wide range of UI/UX design services to meet the needs of businesses of all sizes.</li>
                            <li>We work closely with our clients at every stage of the design process to ensure that their needs are met and that they are happy with the final 
                                results.</li>
                        </ul>

                        <p></p>

                        <div style={{paddingLeft: '150px'}}>If you are looking for a reliable and experienced UI/UX design company, contact us today.</div>

                        <Button
                            sx={{ width: 300, height: 25, mt: 2, ml: 35, mb: 2, fontSize: 10 }}
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
                    <img class="ui_keyboard" src="./img/uiKeysDev.jpg" width="500px" alt="uiKeys"></img>
                    <img class="ui_laptop" src="./img/uiLapDev.jpg" width="500px" alt="uiLaptop"></img>
                </div>
            </div>
            </div>
        </>
    );
};

export default UIUXDevServicePage;