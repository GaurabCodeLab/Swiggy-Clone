import RestaurantCard from "./RestaurantCard";

const HOC = (RestaurantCard)=>{
  return (props)=>(
    <div>
        <span className="border bg-slate-800 text-white p-1 rounded-md absolute z-10">Promoted</span>
        <RestaurantCard resData={props.resData} />
    </div>
  )
};

export default HOC(RestaurantCard);