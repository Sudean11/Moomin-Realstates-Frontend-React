import React from 'react'

const tempo = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
    <div className="flex-col gap-2 ">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden h-full">
          <img
            src={activeImage}
            alt={name}
          />
          <div className='flex flex-row justify-between h-24'>
            {pictures.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => setActiveImage(image)} />
            ))}
          </div>
          <CardHoverIcons />
        </div>
        {/* <CardLabels purpose={purpose} distance={distance} /> */}
      </div>
      <div className="flex flex-col">
        <div className="p-3">
          {/* <Link to="/" className="group-hover:text-primary transition-a"> */}
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          {/* </Link> */}

          <div className="mt-2 flex-align-center gap-x-2">
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
      </div>
    </div>
    <div className='mt-8'>
      <h2 className="sm:font-bold md:text-blue-500">Description</h2>
      {/* <p className="mt-2">{description}</p> */}
      <p className="mt-2">Must See! Move in ready Victorian era home with lots of beautiful woodwork, newly refinished solid hardwood floors, built in bookshelves, tall ceilings, lots of natural lighting, fireplace and antique chandeliers. There are three spacious bedrooms upstairs with walk in closets and a remodeled bathroom. There is a second story balcony that overlooks beautiful trees, flower gardens and a small pond. Living room, dining room, kitchen and half bath are downstairs. The kitchen has nice</p>
    </div>
  </div>



  )
}

export default tempo