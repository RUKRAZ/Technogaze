import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SideNavDark } from "./sideNavDark";

export const ProfilePage = () => {
    const [currentUsername, setCurrentUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State to store success message

    const navigate = useNavigate();


    const handleEmailSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await axios.post('http://localhost:8080/update-email', {
                currentEmail,
                newEmail
            });
            console.log(response.data);
            setSuccessMessage('Email updated successfully'); // Set success message
            setTimeout(() => {
                window.location.reload(); // Reload the page after a delay
            }, 2000); // Reload after 2 seconds
            navigate('/login');
        } catch (error) {
            console.error('Error updating email:', error);
            // Handle error responses
        }
    };

    const handleUsernameSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await axios.post('http://localhost:8080/update-username', {
                currentUsername,
                newUsername
            });
            console.log(response.data);
            setSuccessMessage('Username updated successfully'); // Set success message
            setTimeout(() => {
                window.location.reload(); // Reload the page after a delay
            }, 2000); // Reload after 2 seconds
            navigate('/login');
        } catch (error) {
            console.error('Error updating username:', error);
            // Handle error responses
        }
    };

    return (
        <div className='bg-black flex h-auto justify-center items-left'>
            <div className="sideNavBar" style={{paddingRight: '200px'}}>
                <SideNavDark />
            </div>
            <div className='container bg-pink rounded-lg w-2/3  mt-8 max-w-[1000] sm:min-h-[862] '>
                <h1 className="text-6xl flex justify-center text-white p-5">Profile Info</h1>
                <div className="flex flex-col items-center border border-black border-solid shadow-lg w-500 bg-pink min-w-[400] rounded-lg">
                    <h1 className="text-white container object-right-bottom">*Required Fields</h1>
                    {successMessage && <p className="text-white text-2xl">{successMessage}</p>} {/* Display success message if it exists */}
                    <form className="flex flex-col justify-around gap-x-44 flex-wrap" onSubmit={handleEmailSubmit}>
                        <label className="text-white text-4xl-2">Change Email*:<br />
                            <input className="min-w-[250] p-3 rounded-md  text-black" type="text" name="currentEmail" placeholder='Enter Email' value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)} />
                        </label>
                        <label className="text-white text-4xl-2">Confirm Change*:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black" type="text" name="newEmail" placeholder='Enter Email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        </label>
                        <button type='submit' className='bg-black text-white border-r-5 p-6 m-5 rounded-xl'>Save Changes</button>
                    </form>
                    <form className="flex flex-col justify-around gap-x-44 flex-wrap" onSubmit={handleUsernameSubmit}>
                        <label className="text-white text-4xl-2">Change Username*:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black " type="text" name="currentUsername" placeholder='Current Username' value={currentUsername} onChange={(e) => setCurrentUsername(e.target.value)} />
                        </label>
                        <label className="text-white text-4xl-2">Confirm Change*:<br />
                            <input className="min-w-[250] p-3 rounded-md text-black" type="text" name="newUsername" placeholder='New Username' value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                        </label>
                        <button type='submit' className='bg-black text-white border-r-5 p-6 m-5 rounded-xl'>Save Changes</button>
                    </form>
                    <a onClick={() => navigate('/verify-email')} className='text-white p-20 text-4xl-2'>Change Password</a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
