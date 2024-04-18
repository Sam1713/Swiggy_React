import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log('child 1 constructor called')
        this.state={
            count:0
        };
    }
     componentDidMount(){
        console.log('child 1 component mounted')
     }   
    render(){
       console.log('child 1 render called')
        return(
            <div className="fun">
            <h1>Yes,I am the User in Class Component</h1>
            <p>Sam Saju</p>
            <p>{this.props.age}</p>
            <h2>{this.state.count}</h2>
            <button onClick={()=>{this.setState({
                count:this.state.count+1
            })}}>+</button>
            <hr />
        </div>
        )
    }
}
export default UserClass