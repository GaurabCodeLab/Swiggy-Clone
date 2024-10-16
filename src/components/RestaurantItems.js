import ItemDetails from "./ItemDetails";

const RestaurantItems = ({ itemCards }) => {
  return (
    itemCards &&
    itemCards?.map((itemCard) => (
      <ItemDetails itemCard={itemCard} key={itemCard?.card?.info?.id} />
    ))
  );
};

export default RestaurantItems;
