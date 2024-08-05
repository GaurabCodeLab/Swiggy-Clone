import { Component } from "react";

class UserClass extends Component{
    constructor(props){
      super(props);
      console.log("child constructor");
    //   console.log(props);      {name: 'Gaurab', age: 26}
      // this.state = {
      //   count: 0,
      //   age: 25
      // }
      this.state = {
        data: []
      }
    }
async componentDidMount(){
  // this.timer = setInterval(() => {
  //   console.log("setInterval class");
  // }, 1000);
console.log("child componentDidMount");
const response = await fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/users");
const result = await response.json();
this.setState({
  data: result
});
}

componentDidUpdate(){
  console.log("child componentDidUpdate");
}

componentWillUnmount(){
  console.log("child componentWillUnmount");
  clearInterval(this.timer);
}

    render(){
        // console.log(this.props);     {name: 'Gaurab', age: 26}
        console.log("child render")
        const { name, age } = this.props;
        return (
            <div className="component">
                <h2>Class Component</h2>
                <h2>Name : {name}</h2>
                {
                  this.state.data.map((user)=>(
                    <h1 key={user.id}>{user.name}</h1>
                  ))
                }
                {/* <h2>Age : {this.state.age}</h2>
                <h2>Count : {this.state.count}</h2> */}
                {/* <button className="btn" onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        age: this.state.age + 5
                    })
                }}>Increase Age</button> */}
            </div>
        )
    }
};

export default UserClass;