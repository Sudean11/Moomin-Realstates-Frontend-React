import { useState, useRef } from "react";
import './AddProperty.css';

const AddProperty = () => {
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

    const reqBody = {
      name: propertyNameRef.current.value,
      description: descriptionRef.current.value,
      address: addressRef.current.value,
      street: streetRef.current.value,
      zip: zipRef.current.value,
      city: cityRef.current.value,
      squareFeet: squareFeetRef.current.value,
      numberOfRooms: numberOfRoomsRef.current.value,
      numberOfBathRooms: numberOfBathRoomsRef.current.value,
      rentAmount: rentAmountRef.current.value,
      isRented: isRentedRef.current.value,
      rentedDate: rentedDateRef.current.value,
      propertyType: propertyTypeRef.current.value,
      homeType: homeTypeRef.current.value,
      isForSale: isForSaleRef.current.value,
      image: imageRef.current.files[0] // access file from the input element
    };

    console.log(reqBody); // Just logging for demonstration, replace with API call
  };

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
