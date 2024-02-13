import { useState, useRef } from "react";
// import './AddProperty.css';
import { postService } from "../../../../services/client-api/postService";
import { Navigate, useNavigate } from "react-router-dom";
import { authService } from "../../../../services/client-api/authService";

const AddProperty = () => {
  const navigate = useNavigate();
  const propertyNameRef = useRef();
  const descriptionRef = useRef();
  const addressRef = useRef();
  const streetRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();
  const squareFeetRef = useRef();
  const numberOfRoomsRef = useRef();
  const numberOfBathRoomsRef = useRef();
  const rentAmountRef = useRef();
 
  const rentedDateRef = useRef();
  const propertyTypeRef = useRef();
  const homeTypeRef = useRef();
 
  const imageRef = useRef();

  const submitNewProperty = async (e) => {
    e.preventDefault();
    debugger;
    const auth = await authService.getEmailFromLocalStorage();
    const formData = new FormData();

    // Append each field to the formData object
    formData.append("name", propertyNameRef.current.value);
    formData.append("email", auth);
    formData.append("description", descriptionRef.current.value);
    formData.append("area", addressRef.current.value);
    formData.append("street", streetRef.current.value);
    formData.append("zip", zipRef.current.value);
    formData.append("city", cityRef.current.value);
    formData.append("squareFeet", squareFeetRef.current.value);
    formData.append("bedroom", parseInt(numberOfRoomsRef.current.value));
    formData.append("bathroom", parseInt(numberOfBathRoomsRef.current.value));
    formData.append("price", parseInt(rentAmountRef.current.value));
    formData.append("propertyTypes", propertyTypeRef.current.value);
    formData.append("owner", null); // Adjust as needed based on your application logic
    formData.append("featured", false); // Adjust as needed based on your application logic
    formData.append("location", null); // Adjust as needed based on your application logic
    formData.append("banner", imageRef.current.files[0]); // Adjust as needed based on your application logic
    // formData.append('propertyImages', []);

    console.log(formData); // Just logging for demonstration, replace with API call
    sendData(formData);
  };
  debugger;
  const sendData = async (formData) => {
    try {
      const response = await postService.sendNewProperty(formData);
      navigate("/owner-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-add mt-5">
  <div className="box-add p-4 bg-white shadow-md rounded-md overflow-y-auto max-h-full">
    <form className="space-y-4">
      <div className="card-header">
        <h5 className="login-title text-lg font-bold">Add Property</h5>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="form-label">Property Name</label>
            <input
              ref={propertyNameRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Description</label>
            <textarea
              ref={descriptionRef}
              className="form-textarea border border-gray-300 rounded-md p-2"
              rows="5"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="form-label">Address</label>
            <input
              ref={addressRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Street</label>
            <input
              ref={streetRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Zip</label>
            <input
              ref={zipRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">City</label>
            <input
              ref={cityRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Square Feet</label>
            <input
              ref={squareFeetRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Number Of Rooms</label>
            <input
              ref={numberOfRoomsRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Number Of Bathrooms</label>
            <input
              ref={numberOfBathRoomsRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Price</label>
            <input
              ref={rentAmountRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Rented Date</label>
            <input
              ref={rentedDateRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Property Type</label>
            <input
              ref={propertyTypeRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Home Type</label>
            <input
              ref={homeTypeRef}
              type="text"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label">Insert Pictures</label>
            <input
              ref={imageRef}
              type="file"
              className="form-input border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={submitNewProperty}  className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AddProperty;
