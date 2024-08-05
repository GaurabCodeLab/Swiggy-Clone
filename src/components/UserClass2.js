import { Component } from "react";

class UserClass2 extends Component{
    constructor(props){
      super(props);
      console.log("child2 constructor");
    }
componentDidMount(){
console.log("child2 componentDidMount");
}

componentDidUpdate(){
  console.log("child2 componentDidUpdate");
}

// componentWillUnmount(){
//   console.log("child2 componentWillUnmount");
//   clearInterval(this.timer);
// }

    render(){
        console.log("child2 render")
        const { name } = this.props;
        return (
            <div className="component">
                <h2>Class Component2</h2>
                <h2>Name : {name}</h2>
            </div>
        )
    }
};

export default UserClass2;