import { useParams } from "react-router-dom";

const Restaurant = ()=>{
    const { id } = useParams();
    return (
        <>
        <h1>Hotel Empire : {id}</h1>
        <p>North Indian, Kebabs - 450 for two</p>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
        </>
    )
};

export default Restaurant;