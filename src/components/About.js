import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>I am about page</h1>
        {/* <User name={"Dolly"} age={22} /> */}
        <UserClass name={"Gaurab"} age={26} />
        <UserClass2 name={"Dolly"} age={23} />
      </>
    );
  }
}

// const About = ()=>{
//     return (
//         <>
//         <h1>I am about page</h1>
//         {/* <User name={"Dolly"} age={22} /> */}
//         <UserClass name={"Gaurab"} age={26} />
//         </>
//     )
// };

export default About;
