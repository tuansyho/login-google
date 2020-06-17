import React, {Component} from 'react';
import firebase from 'firebase/app';
import FirebaseConfig from '../Firebase.jsx';




class SignUp extends Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    signUp = () =>{
        firebase.initializeApp(FirebaseConfig);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className ="signUp">
                <form>
                    <label>email</label>
                    <input placeholder="email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    ></input>
                    <label>password</label>
                    <input placeholder="password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    ></input>
                    <button onClick={this.signUp}>Sign up</button>
                </form>
            </div>
        )
    }
}
export default SignUp;