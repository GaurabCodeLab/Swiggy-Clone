import ItemDetails from "./ItemDetails";

const RestaurantItems = ({ itemCards }) => {
  return (
    itemCards &&
    itemCards?.map((itemCard) => <ItemDetails itemCard={itemCard} />)
  );
};

export default RestaurantItems;
