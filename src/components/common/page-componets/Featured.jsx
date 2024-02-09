import { useEffect, useState } from "react";
import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";
import { fetchService } from "../../../services/client-api/fetchService";

const Featured = () => {

  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(()=>{
    fetchFeaturedProperties();
  },[])

  const fetchFeaturedProperties=async()=>{
    let fetchedProperty = await fetchService.allProperties();
    setFeaturedProperties(fetchedProperty);
    console.log({featured:fetchedProperty});
    debugger
  }
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured latest properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {featuredProperties.slice(0, 8).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
