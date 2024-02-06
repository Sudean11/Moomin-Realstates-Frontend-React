import { useState } from "react";
import './AddProperty.css'


const AddProperty = () => {

    const [propertyName, setPropertyName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [numberOfRooms, setNumberOfRooms] = useState("");
    const [numberOfBathRooms, setNumberOfBathRooms] = useState("");
    const [rentAmount, setRentAmount] = useState("");
    const [isRented, setIsRented] = useState("");
    const [rentedDate, setRentedDate] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [homeType, setHomeType] = useState("");
    const [isForSale, setIsForSale] = useState("");
    const [image, setImage] = useState({ file: null });

    function onFileUploadChange(e) {
        setImage({ file: e.target.files[0] });
      };
      function Submit(e) {
        e.preventDefault();
      };

    return (
        <div className="container mt-9 pt-20 box ">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div>
                        <div className="card-header">
                            <h3 className="login-title">Add Property</h3>
                        </div>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                            <label className="form-label">Property Name</label>
                            <input
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}
                            type="email"
                            class="form-control custom-input"
                            />
                            </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        class="form-control custom-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="5"
                    ></textarea>
                </div>
                <div className="mb-3">
            <label  class="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class="form-contro custom-input"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="mb-3">
            <label className="form-label ">
              Square Feet
            </label>
            <input
              value={squareFeet}
              onChange={(e) => setSquareFeet(e.target.value)}
              type="text"
              className="form-control custom-input"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" >
              Number Of Rooms
            </label>
            <input
              value={numberOfRooms}
              onChange={(e) => setNumberOfRooms(e.target.value)}
              type="text"
              className="form-control custom-input"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" >
              Number Of Bathrooms
            </label>
            <input
              value={numberOfBathRooms}
              onChange={(e) => setNumberOfBathRooms(e.target.value)}
              type="text"
              className="form-control custom-input"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" >
              Rent Amount
            </label>
            <input
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              type="text"
              className="form-control custom-input"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Property Type
            </label>
            <select
              value={isRented}
              onChange={(e) => setIsRented(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>House for Rent</option>
              <option>House for Sale</option>
            </select>
          </div>
          <div >
            <label className="form-label">
              Home Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>House</option>
              <option>Trailer</option>
            </select>
          </div>
          <div className="mb-3" >
            <label className="form-label">
              Insert pictures
            </label>
            <input
              onChange={onFileUploadChange}
              type="file"
              className="form-control"
            />
          </div>

          <button  onClick={Submit} type="submit" className="btn btn-primary">
            Submit
          </button>

            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default AddProperty;