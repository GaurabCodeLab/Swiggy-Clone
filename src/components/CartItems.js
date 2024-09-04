import Veg from "../assets/veg.png";
import NonVeg from "../assets/nonVeg.png";

const CartItems = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between my-6">
        <div className="flex">
          <img
            src={item?.card?.info?.isVeg ? Veg : NonVeg}
            alt=""
            className="h-5 self-center me-4"
          />
          <div className="self-center">{item?.card?.info?.name}</div>
        </div>
        <div className="flex gap-2">
          <span>Price per Quantity :</span>
          <span className="self-center">
            ₹
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.defaultPrice / 100}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
