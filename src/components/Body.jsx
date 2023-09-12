import {useState,useEffect} from "react"
// import {restranutlist} from "../constant";
import RasturantCard from "./RasturantCard";
import Shimmer from "./Shimmer";

const filterData=(searchText,reastaurtants)=>{
const filterData=reastaurtants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
      return filterData;  
      
 }
 if(filterData===null){
  return swiggyData
 }

const Body = () => {
  const [allReastaurtants,setAllReastaurtants]=useState([])
  const [filteredReastaurtants,setFilteredReastaurtants]=useState([])
  const [searchText,setSearchText]=useState("");

 useEffect(()=>{
    // API CALL
    getReasurants()
 }, [])

 async function getReasurants(){
  const data= await fetch( 
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
  const json= await data.json()
  let swiggyData=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
 setAllReastaurtants(swiggyData)
 setFilteredReastaurtants(swiggyData)

}
if(!allReastaurtants) return null;
if(filteredReastaurtants?.length===0) return <h1>No Resturant match your Filter!</h1>

  return (allReastaurtants?.length===0)?<Shimmer/>:(
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
       const data=filterData(searchText,allReastaurtants)
       setFilteredReastaurtants(data)
     }}

     >search</button> 
    </div>
    <div className="reastaurtant-list">
      {filteredReastaurtants.map((restaurant) => {
        console.log(restaurant.info.id,'iddsssss');
        return <RasturantCard {...restaurant.info} key={restaurant.info.id} />;
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
