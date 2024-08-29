import UserContext from "../utils/userContext";
import { useContext } from "react";

const Contact = ()=>{
   const user = useContext(UserContext);
    return (
        <h1>I am contact page, my name is {user.name}</h1>
    )
};

export default Contact;