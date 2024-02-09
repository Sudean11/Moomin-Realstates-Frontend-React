import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMessageUserFormVisibility } from '../../../features/uiSlice';
import { authService } from '../../../services/client-api/authService';
import { postService } from '../../../services/client-api/postService';

const MessageBox = ({ offerId }) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(''); // Declare state for message

    const handleChange = (event) => {
        // Update the state with the new value of the textarea
        setMessage(event.target.value);
    };

    const sendMessageswithOfferId = async () => {
        try {
            const email = await authService.getEmailFromLocalStorage();
            const requestBody = {
                email: email, // Set the email dynamically
                message: message, // Get the message from the state
                offerId: offerId, // Set the offer ID dynamically
            };

            const response = await postService.sendMessageswithOfferIdFromOwner(requestBody);
        } catch (e) {
            console.log(e);
        }
    };

    const sendMessage = () => {
        sendMessageswithOfferId();
        dispatch(toggleMessageUserFormVisibility());
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='bg-white p-4 rounded w-96 relative'>
                <button onClick={() => dispatch(toggleMessageUserFormVisibility())} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                    X
                </button>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600 mb-2">Message:</label>
                    <textarea
                        id="message"
                        className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your message"
                        value={message} // Set the value of the textarea to the state
                        onChange={handleChange} // Update the state on change
                    />
                </div>

                <div className="flex justify-center sm:justify-start">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={sendMessage}
                    >
                        Submit
                    </button >
                </div>
            </div>
        </div>
    );
};

export default MessageBox;
