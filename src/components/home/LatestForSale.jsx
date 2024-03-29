import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CardHoverIcons from "../common/page-componets/CardHoverIcons";
import { useState,useEffect } from "react";
import { fetchService } from "../../services/client-api/fetchService";


const LatestForSale = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const navigate = useNavigate();

  const detailsButtonHandler = (id) => {
    console.log("details button handler");
    console.log(id,"ID");
    navigate(`/propertyDetail/${id}`);
    //  {
    //   id,
    //   name,
    //   location,
    //   price,
    //   distance,
    //   description,
    //   bedroom,
    //   bathroom,
    //   area,
    //   banner,
    // });
  }
  
  
  useEffect(()=>{
    fetchFeaturedProperties();
  },[])
  debugger;

  const fetchFeaturedProperties=async()=>{
    let fetchedProperty = await fetchService.featuredProperties();
    setFeaturedProperties(fetchedProperty);
    console.log(fetchedProperty);
  }
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">latest for sale</h1>
        <h1 className="heading">featured property for sale</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProperties
          .slice(0, 6)
          ?.map(
            ({
              id,
              name,
              location,
              price,
              distance,
              description,
              bedroom,
              bathroom,
              area,
              banner,
            }) => (
              <div className="relative grid grid-cols-1 gap-3 mt-3 overflow-hidden border rounded-lg shadow-light sm:grid-cols-3 dark:border-card-dark group">
                <div className="sm:col-span-1">
                  <div className="group !opacity-100 overflow-hidden relative h-full">
                    <Link to="/" className="!opacity-100">
                      <img
                        src={banner}
                        alt={name}
                        className="object-cover w-full h-full group-hover:scale-125 transition-a"
                      />
                    </Link>
                    <CardHoverIcons />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-3 flex-align-center gap-x-2">
                    <span className="py-[3px] px-3 rounded-full capitalize  bg-primary/20 text-primary">
                      {distance} away
                    </span>
                    <span className="py-[3px] px-3 rounded-full capitalize  bg-secondary/20 text-secondary">
                      for {description}
                    </span>
                  </div>
                  <div className="p-3">
                    <Link
                      to="/"
                      className="group-hover:text-primary transition-a"
                    >
                      <h1 className="text-lg font-bold capitalize">{name}</h1>
                    </Link>

                    <div className="mt-2 flex-align-center gap-x-2">
                      <BiMap />
                      <p>{location.city}</p>
                    </div>

                    <div className="flex justify-between mt-3">
                      <div className="flex-align-center gap-x-2">
                        <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                          <BiBed />
                        </div>
                        <p className="text-sm">{bedroom} Beds</p>
                      </div>
                      <div className="flex-align-center gap-x-2">
                        <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                          <BiTab />
                        </div>
                        <p className="text-sm">
                          {bathroom} Bathrooms
                        </p>
                      </div>
                      <div className="flex-align-center gap-x-2">
                        <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                          <BiMapAlt />
                        </div>
                        <p className="text-sm">{area}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex-center-between">
                      <h1 className="text-lg font-semibold text-primary">
                        ${price}
                      </h1>
                      <button className="btn btn-secondary" value={id} onClick={()=>{detailsButtonHandler(id)}}>details</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <div className="mt-4 flex-center-center">
        <button className="btn btn-primary">view more</button>
      </div>
    </div>
  );
};

export default LatestForSale;
