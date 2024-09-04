import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { RES_DETAILS } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const resDetails = useFetch(RES_DETAILS + id);

  console.log("res details hai", resDetails);

  const itemCardsGroupLength =
    resDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.length;
  const itemCardsGroup =
    resDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(
      2,
      itemCardsGroupLength - 2
    );

  return (
    <div className="w-2/4 bg-slate-200 m-auto rounded-md mt-5">
      <h1 className="text-xl text-center font-bold">
        {resDetails?.data?.cards?.[0]?.card?.card?.text}
      </h1>
      {itemCardsGroup &&
        itemCardsGroup.map((itemCardGroup, index) => (
          <RestaurantCategory
            itemCardGroup={itemCardGroup}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            key={itemCardGroup?.card?.card?.title}
          />
        ))}
    </div>
  );
};

export default Restaurant;

// import { useParams } from "react-router-dom";
// import useFetch from "../utils/useFetch";
// import { RES_DETAILS } from "../utils/constants";
// import RestaurantCategory from "./RestaurantCategory";

// const Restaurant = () => {
//     const { id } = useParams();
//     const resDetails = useFetch(RES_DETAILS + id);
//     const itemCardsGroupLength = resDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length;
//     const itemCardsGroup = resDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(2, itemCardsGroupLength-2);

//     return (
//         <div className="w-2/4 bg-slate-200 m-auto rounded-md mt-5">
//             <h1 className="text-xl text-center font-bold">{resDetails?.data?.cards?.[0]?.card?.card?.text}</h1>
//             {
//                 itemCardsGroup && itemCardsGroup.map((itemCardGroup)=><RestaurantCategory itemCardGroup={itemCardGroup} />)
//             }
//                     </div>
//     )
//     };

// export default Restaurant;
