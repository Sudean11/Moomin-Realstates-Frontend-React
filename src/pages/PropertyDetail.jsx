import React, { useEffect, useState } from 'react';
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import '../index.css';
const ProductDetails = ({
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  description,
  textLength,
  showLabels,
}) => {

  const [pictures, setPictures] = useState([
    "/images/property (17).jpg",
    "/images/property (18).jpg",
    "/images/property (19).jpg",
    "/images/property (20).jpg",
    "/images/property (21).jpg",
    "/images/property (24).jpg",
    "/images/property (26).jpg",

  ]);

  // const [activeImage, setActiveImage] = useState(pictures[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    console.log("check")
    console.log(name,
      location,
      price,
      distance,
      purpose,
      number_of_beds,
      number_of_bathrooms,
      dimensions);
  }, [activeImageIndex]);



  return (

    <div className="container mx-auto py-8 px-4 md:flex md:flex-wrap   pt-16 bg-zinc-100 border-2 border-gray-300 rounded-lg " style={{ maxWidth: 1090 }}>
      <div className=" flex flex-col">
        <div className="mb-0" style={{ height: 600 }}>
          <img src={pictures[activeImageIndex]} alt="Property image 1" className="w-full h-full object-fit rounded-lg" />
        </div>
        <div className=" relative flex item-center pt-7" >
          <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
            {
              pictures.map((image, index) => (
                 index!= activeImageIndex && <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(index)} className="w-[220px] h-[100px] p-2 inline-block cursor-pointer hover:scale-105 ease-in-out rounded-lg" />
              ))
            }
          </div>
        </div>
      </div>

      <div className="md:w-1/2 pl-4 pt-6 md:pl-8">
        <div className="text-2xl font-bold mb-2">$425,000</div>
        <div className=" flex-align-center gap-x-2 text-2xl font-bold mb-4">
          <BiMap />
          <p>Fairfield Iowa</p>
        </div>
        <div className="flex mt-3 gap-x-14">
          <div className="flex-align-center gap-x-3">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{number_of_beds} 10 Beds</p>
          </div>
          <div className="flex-align-center gap-x-3">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{number_of_bathrooms}3 Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-3">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{dimensions} 57988 sq. ft.</p>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className="l:font-bold md:text-blue-500">Description</h2>
        {/* <p className="mt-2">{description}</p> */}
        <p className="mt-2">Must See! Move in ready Victorian era home with lots of beautiful woodwork, newly refinished solid hardwood floors, built in bookshelves, tall ceilings, lots of natural lighting, fireplace and antique chandeliers. There are three spacious bedrooms upstairs with walk in closets and a remodeled bathroom. There is a second story balcony that overlooks beautiful trees, flower gardens and a small pond. Living room, dining room, kitchen and half bath are downstairs. The kitchen has nice</p>
      </div>
    </div>



  );
};

export default ProductDetails;
