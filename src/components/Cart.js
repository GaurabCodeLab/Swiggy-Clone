import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const cartDetails = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white mt-3 rounded-lg p-4 min-h-[100vh] w-6/12 mx-auto">
      <div className="flex justify-center gap-6">
        <img
          src={CDN_URL + cartDetails?.resDetails?.cloudinaryImageId}
          className="h-12 rounded-sm"
        />
        <div>
          <div className="text-lg font-bold">
            {cartDetails?.resDetails?.name}
          </div>
          <div className="text-sm">{cartDetails?.resDetails?.areaName}</div>
        </div>
      </div>
      {cartDetails.quantity === 0 && (
        <div className="mt-10 text-center text-xl font-bold text-red-400">
          Your cart is empty
        </div>
      )}
      {cartDetails.cartItems && cartDetails.quantity !== 0
        ? cartDetails.cartItems.map((item) => <CartItems item={item} />)
        : null}
      {cartDetails.quantity !== 0 && (
        <div>
          <button
            className="bg-red-600 py-2 px-3 my-7 text-white rounded-md"
            onClick={handleClick}
          >
            Clear Cart
          </button>
          <div className="flex gap-3 text-lg font-bold">
            <div>Total Amount : </div>
            <div>₹ {cartDetails.totalAmount}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
