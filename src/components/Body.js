import RestaurantCard from "./RestaurantCard";
import useFetch from "../utils/useFetch";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import PromotedRes from "./PromotedRes";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { getResDetails, clearCart } from "../redux/cartSlice";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [res, setRes] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const { context, setContext } = useContext(UserContext);
  const dispatch = useDispatch();
  const resData = useFetch(RES_URL);

  useEffect(() => {
    if (resData) {
      setResList(
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log("body useeffect inner called");
    }
    // console.log("body useeffect called");
  }, [resData]);

  const handleClick = () => {
    const filteredItem = resList.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(res.toLowerCase().trim());
    });
    setFilteredRes(filteredItem);
  };

  const handleResData = (resData) => {
    dispatch(
      getResDetails({
        name: resData?.info?.name,
        cloudinaryImageId: resData?.info?.cloudinaryImageId,
        areaName: resData?.info?.areaName,
      })
    );
    dispatch(clearCart());
  };

  return (
    <div className="p-8 bg-gray-200">
      <div className="top-container mb-10">
        <input
          type="text"
          placeholder="search..."
          value={res}
          onChange={(e) => setRes(e.target.value)}
          className="border-2 rounded-md p-1"
        />
        <button
          className="bg-slate-700 text-white ms-4 px-3 rounded-md py-1"
          onClick={handleClick}
        >
          Search
        </button>
        <button
          className="ms-8 bg-green-700 text-white px-3 rounded-md py-1"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className="border-2 rounded-md p-1 ms-5"
          placeholder="Enter Context Name"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
      </div>
      <div className="card-container flex flex-wrap justify-start gap-6">
        {filteredRes?.length === 0 ? (
          <div className="flex flex-wrap gap-4">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        ) : (
          filteredRes?.map((resData) => (
            <div onClick={() => handleResData(resData)}>
              ,
              <Link
                key={resData?.info?.id}
                to={"restaurant/" + resData?.info?.id}
              >
                {resData?.info?.avgRating > 4.5 ? (
                  <PromotedRes resData={resData} />
                ) : (
                  <RestaurantCard resData={resData} />
                )}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
