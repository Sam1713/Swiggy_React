import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"
// const About=()=>{
//     return(
//         <div>
//             <h1>This is my About page</h1>
//             <h2><User name={'Sam'}/></h2>
//             <h2><UserClass age={'22'}/></h2>
//         </div>
       
//     )
// }
// export default About

class About extends React.Component{
    constructor(props){
        super(props)
            console.log('constructor called')
        
    }
   async componentDidMount(){
     
    }
    render(){
        console.log('render called')
        return(
                    <div>
            <h5>This is my About page</h5>
            {/* <h2><User name={'Sam'}/></h2> */}
            {/* <h2><UserClass age={'22'}/></h2> */}
            <div>
                LoggedIn User
                <UserContext.Consumer>
                   {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2><User/></h2>
        </div>
        )
    }
}

export default About