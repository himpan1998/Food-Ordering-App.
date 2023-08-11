import {useState,useEffect} from "react"
import { restranutlist } from "../constant";
import RasturantCard from "./RasturantCard";

const filterData=(searchText,reastaurtants)=>{
    const filterData=reastaurtants.filter((restaurant)=>restaurant.data.name.includes(searchText))
      return filterData;  
      
 }
   useEffect=(()=>{
    setReastaurtants()
   },[])

const Body = () => {
  const  [reastaurtants,setReastaurtants]=useState(restranutlist)
  const [searchText,setSearchText]=useState("");

  return (
    <>
    <div className="search-container">
    <input
     type="search" 
     className="search-input"
     placeholder="search restaurant"
     value={searchText}
     onChange={(e)=>{
      setSearchText(e.target.value)
      
     }}
     
     />
     
     <button className="search-btn"  onClick={()=>{
       const data=filterData(searchText,reastaurtants)
        setReastaurtants(data)
     }}
     >search</button>
    </div>
    <div className="reastaurtant-list">
      {reastaurtants.map((restaurant) => {
        return <RasturantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
    </>
  );
};

export default Body;

/**
             * Header
               -Logo (Title)
               -Nav items 
               -cart
             * Body
             -search bar
             -Restraunt list
             -RestrauntCard (Lists of Restraunt)
               -cart
                  -image
                  -Name
                  -rating
                  -cusines
            *Footer
              -links
              -copy right
             */
