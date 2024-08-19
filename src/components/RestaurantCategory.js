import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({itemCardGroup, showItem, setShowIndex})=>{
    const itemCards = itemCardGroup.card.card.itemCards;
    const handleClick = ()=>{
        setShowIndex();
    }
    return (
                <div>
                <div
                    className="flex justify-between px-4 bg-white cursor-pointer text-lg font-bold mt-5 py-3"
                    onClick={handleClick}
                >
                    <div>{itemCardGroup?.card?.card?.title}({itemCardGroup?.card?.card?.itemCards?.length})</div>
                    <div>{ showItem ? <FaAngleUp /> : <FaAngleDown />}</div>
                </div>
                { showItem ? <RestaurantItems itemCards={itemCards} /> : null}
            </div>
    )
};

export default RestaurantCategory;





// import { useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import RestaurantItems from "./RestaurantItems";

// const RestaurantCategory = ({itemCardGroup})=>{
//     const [show, setShow] = useState(false);
//     const itemCards = itemCardGroup.card.card.itemCards;
//     return (
//                 <div>
//                 <div
//                     className="flex justify-between px-4 bg-white cursor-pointer text-lg font-bold mt-5 py-3"
//                     onClick={() => setShow(!show)}
//                 >
//                     <div>{itemCardGroup?.card?.card?.title}({itemCardGroup?.card?.card?.itemCards?.length})</div>
//                     <div>{ show ? <FaAngleUp /> : <FaAngleDown />}</div>
//                 </div>
//                 { show && <RestaurantItems itemCards={itemCards} />}
//             </div>
//     )
// };

// export default RestaurantCategory;