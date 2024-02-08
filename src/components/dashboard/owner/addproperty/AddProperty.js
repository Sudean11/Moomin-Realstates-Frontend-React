import { useState, useRef } from "react";
import './AddProperty.css';
import { postService } from "../../../../services/client-api/postService";
import { Navigate, useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate=useNavigate();
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
  const isRentedRef = useRef();
  const rentedDateRef = useRef();
  const propertyTypeRef = useRef();
  const homeTypeRef = useRef();
  const isForSaleRef = useRef();
  const imageRef = useRef();

  function Submit(e) {
    e.preventDefault();

    const formData = new FormData();

// Append each field to the formData object
formData.append('name', propertyNameRef.current.value);
formData.append('description', descriptionRef.current.value);
formData.append('area', addressRef.current.value);
formData.append('street', streetRef.current.value);
formData.append('zip', zipRef.current.value);
formData.append('city', cityRef.current.value);
formData.append('squareFeet', squareFeetRef.current.value);
formData.append('bedroom', parseInt(numberOfRoomsRef.current.value));
formData.append('bathroom', parseInt(numberOfBathRoomsRef.current.value));
formData.append('price', parseInt(rentAmountRef.current.value));
formData.append('status', isRentedRef.current.value);
formData.append('propertyTypes', propertyTypeRef.current.value);
formData.append('owner', null); // Adjust as needed based on your application logic
formData.append('featured', false); // Adjust as needed based on your application logic
formData.append('location', null); // Adjust as needed based on your application logic
formData.append('banner', imageRef.current.files[0]); // Adjust as needed based on your application logic
// formData.append('propertyImages', []);
    

    console.log(formData); // Just logging for demonstration, replace with API call
sendData(formData);

  };
  debugger;
  const sendData=async(formData)=>
  {
    try{
    const response=await postService.sendNewProperty(formData);
    navigate('/owner-dashboard');
    }
    catch(error )
    {
      console.log(error);
    }

  }

  return (
    <div className="container-add">
      <div className="box-add">
        <form>
          <div>
            <div>
              <div className="card-header">
                <h3 className="login-title">Add Property</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Property Name</label>
                  <input
                    ref={propertyNameRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    ref={descriptionRef}
                    className="form-control custom-input"
                    rows="5"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    ref={addressRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Street</label>
                  <input
                    ref={streetRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Zip</label>
                  <input
                    ref={zipRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    ref={cityRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Square Feet</label>
                  <input
                    ref={squareFeetRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number Of Rooms</label>
                  <input
                    ref={numberOfRoomsRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number Of Bathrooms</label>
                  <input
                    ref={numberOfBathRoomsRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    ref={rentAmountRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Is Rented</label>
                  <input
                    ref={isRentedRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rented Date</label>
                  <input
                    ref={rentedDateRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Property Type</label>
                  <input
                    ref={propertyTypeRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Home Type</label>
                  <input
                    ref={homeTypeRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Is For Sale</label>
                  <input
                    ref={isForSaleRef}
                    type="text"
                    className="form-control custom-input"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Insert Pictures</label>
                  <input
                    ref={imageRef}
                    type="file"
                    className="form-control"
                  />
                </div>
                <button onClick={Submit} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
