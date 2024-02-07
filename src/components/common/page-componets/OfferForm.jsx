import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleOfferFormVisibility } from '../../../features/uiSlice';

const OfferForm = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='bg-white p-4 rounded w-96 relative'>
                <button onClick={()=>dispatch(toggleOfferFormVisibility())} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                    X
                </button>
                <div className="mb-4">
                    <label htmlFor="offerPrice" className="block text-gray-600 mb-2">Your Offer Price:</label>
                    <input
                        id="offerPrice"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your offer price"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600 mb-2">Message:</label>
                    <textarea
                        id="message"
                        className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your message"
                    />
                </div>

                <div className="flex justify-center sm:justify-start">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferForm;
