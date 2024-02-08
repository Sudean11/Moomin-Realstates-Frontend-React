import React, { useState } from "react";
import { fetchService } from "../../../../services/client-api/fetchService";
import { useDispatch } from "react-redux";
import { getCurrentItems } from "../../../../features/dataSlice";

const AdvancedSearch = () => {
  // Define state variables for each select element
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [zipCode,setZipCode] = useState("");
  const dispatch = useDispatch();


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform search based on the selected options
    let queryString = '';

    if (category) queryString += `?category=${category}`;

    if(queryString ===''){
      if(city) queryString +=`?city=${city}`;
    }else{
      if(city) queryString +=`&city=${city}`;
    }

    if(queryString ===''){
      if(state) queryString +=`?state=${state}`;
    }else{
      if(state) queryString +=`&state=${state}`;
    }
    if(queryString ===''){
      if(zipCode) queryString +=`?zipCode=${zipCode}`;
    }else{
      if(zipCode) queryString +=`&zipCode=${zipCode}`;
    }

    if (queryString === '') {
      if (priceRange) queryString += `?priceRange=${priceRange}`;
    } else {
      if (priceRange) queryString += `&priceRange=${priceRange}`;
    }

    if (queryString === '') {
      if (bathrooms) queryString += `?bathrooms=${bathrooms}`;
    } else {
      if (bathrooms) queryString += `&bathrooms=${bathrooms}`;

    }
    if (queryString === '') {
      if (beds) queryString += `?beds=${beds}`;
    } else {
      if (beds) queryString += `&beds=${beds}`;
    }

    console.log(queryString);

    let result = await fetchService.filteredProperties(`/api/v1/property${queryString}`)
    dispatch(getCurrentItems(result))
  };



  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Advanced Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="filter"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="filter"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
            className="filter"
          />
        </div>

        <div className="mt-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter">
            <option value="">Categories</option>
            <option value="APARTMENT">APARTMENT</option>
            <option value="OFFICE">OFFICE</option>
            <option value="HOUSE">HOUSE</option>
            <option value="CONDO">CONDO</option>
            <option value="SHOP">SHOP</option>
            <option value="VILLA">VILLA</option>
            <option value="COTTAGE">COTTAGE</option>
          </select>
        </div>
        <div className="mt-3">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="filter">
            <option value="">Price Range</option>
            <option value="40000-80000">$40,000 - $80,000</option>
            <option value="80000-120000">$80,000 - $120,000</option>
            <option value="120000-200000">$120,000 - $200,000</option>
            <option value="200000-300000">$200,000 - $300,000</option>
            <option value="300000-500000">$300,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1000,000</option>
          </select>
        </div>
        <div className="gap-2 mt-3 flex-align-center">
          <select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="filter">
            <option value="">Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">Above 4</option>
          </select>
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="filter">
            <option value="">Beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none">
          Search Property
        </button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
