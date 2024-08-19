import { IoMdStar } from "react-icons/io";
import { CDN_URL } from "../utils/constants";

const RestaurantItems = ({itemCards})=>{
    return (
       itemCards? itemCards?.map((itemCard)=>(
                <div className="flex border-b-slate-200 border-b" key={itemCard?.card?.info?.id}>
                <div className="bg-white p-4 w-4/6">
                    <div>{itemCard?.card?.info?.name}</div>
                    <div>₹{itemCard?.card?.info?.price ? itemCard?.card?.info?.price / 100 : itemCard?.card?.info?.defaultPrice / 100}</div>
                    {itemCard?.card?.info?.ratings?.aggregatedRating?.rating ? 
                        <div className="flex">
                            <span className="flex items-center text-green-700"><IoMdStar /></span>
                            <span className="text-green-700">{itemCard?.card?.info?.ratings?.aggregatedRating?.rating}</span>({itemCard?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                        </div> : null
                    }
                    <div className="mt-4 w-4/6">{itemCard?.card?.info?.description}</div>
                </div>
                <div className="w-2/6 bg-white relative py-4">
                {itemCard?.card?.info?.imageId ?  <img src={CDN_URL + itemCard?.card?.info?.imageId} className="w-6/6 h-full rounded-lg block" /> : null }
                    <button className="text-green-800 font-bold shadow-md py-2 px-7 absolute bottom-2 z-50 bg-white rounded-lg left-1/2 -translate-x-1/2">ADD</button>
                </div>
            </div>
             )) : null
    )
};

export default RestaurantItems;