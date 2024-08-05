import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, sla, cuisines, avgRating, cloudinaryImageId} = props.resData.info;
     return (
       <div className="border w-[18rem] min-h-[30rem] pb-4 mb-6 rounded-lg hover:scale-105 transition-all duration-500 bg-[#ecebeb]">
         <img
           className="rounded-lg"
           src={CDN_URL+cloudinaryImageId}
         />
         <h2 className="ps-4 pt-3 text-lg font-bold text-lime-700">{name}</h2>
         <h3 className="ps-4">
           <span>{avgRating} stars</span> . <span>{sla.deliveryTime} mins</span>
         </h3>
         <p className="ps-4">{cuisines.join(", ")}</p>
       </div>
     );
   };

export default RestaurantCard;
