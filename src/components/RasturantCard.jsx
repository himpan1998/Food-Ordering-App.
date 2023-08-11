import { IMG_CDN_URL } from "../constant";
const RasturantCard = ({
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating}*</h4>
      <h5>{lastMileTravelString}*</h5>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

export default RasturantCard;
