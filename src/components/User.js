// const User=(props)=>{
//     return(
//         <div className="fun">
//             <h1>Yes,I am the User in functitonal Component</h1>
//             <p>{props.name}</p>
//             <p>Age:22</p>
//             <hr />
//         </div>
//     )
// }
// export default User
import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log('child 2 constructor called');
        this.state = {
            userData: {
                name: 'Hihi',
                company: 'vandiperiyar',
                avatar_url:'http://dummy.com'
            }
        };
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/SAM');
        const json = await data.json();
        console.log(json);     
        this.setState({
            userData: json
        });
    }

    render() {
        console.log('child 2 render called');
        return (
            <div>
                <h1>{this.state.userData.name}</h1>
                {/* <h1>{this.props.age}</h1> */}
                <h1>{this.state.userData.company}</h1>
                <img src={this.state.userData.avatar_url} alt="" />
            </div>
        );
    }
}

export default User;
