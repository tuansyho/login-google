
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import firebaseConfig from '../Firebase';
import firebases from 'firebase';

firebase.initializeApp(firebaseConfig);

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          login: false,
          email: "",
          password: ""
        }
        this.click = this.click.bind(this);
        this.login =this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      login = () =>{
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (u) {
                console.log(u);
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
      click = () => {
        
        var provider = new firebase.auth.GoogleAuthProvider();
        firebases.auth().signInWithPopup(provider).then((result) => {
          console.log(result);
          console.log("Success login");
            this.setState({login: true});
        }).catch(function(err){
          console.log(err);
          console.log("failed to do");
        })
        
      }
    render(){
        if(this.state.login){
            return <Redirect to="/" />
          }
        return(
            <div className="Home">
                <form>
                    <label>email</label>
                    <input placeholder="email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    ></input>
                    <label>email</label>
                    <input placeholder="password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    ></input>
                    <button onClick={this.login}>Log in</button>
                </form>
                <button onClick={this.click}>sign in with google</button>
            </div>
        )
    }
}
export default Home;