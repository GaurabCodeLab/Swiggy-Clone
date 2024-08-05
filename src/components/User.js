import { useEffect } from "react";

const User = (props)=>{
  useEffect(()=>{
  const timer = setInterval(()=>{
      console.log("setInterval function");
    }, 1000);
 return ()=>{
  console.log("clean up called");
  clearInterval(timer);
 }
  }, []);

  console.log("render called");
  const { name, age } = props;
    return (
        <div className="component">
        <h2>Functional Component</h2>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        </div>
    )
};

export default User;