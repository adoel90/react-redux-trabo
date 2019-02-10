/* eslint-disable no-undef */

//*****************8 */https://reacttraining.com/react-router/web/example/basic

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Modal from 'react-awesome-modal';

import { postUserLogin } from '../actions/login'
import { getBookingCalendarAvailable } from '../actions/booking_calender_available'
import { getSessionAccessTokenLocalStorage } from '../actions/system-local-storage'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.renderButtonLogout = this.renderButtonLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  
    this.state = {
      userLoginActivity: false,
      visible : false,
      userSelected: {}
    }
  };

  componentDidMount(){
    
    const { getListUserDispatch} = this.props;
    const { dataAccessTokenLocalStorage } = this.state

    // getSessionAccessTokenLocalStorageDispatch();
    /* NEXT, BUAT MANAGEMENT STATE LOCAL STORAGE ! (State ini termasuk type state UI)*/
    const sessionLocaStorage = localStorage.getItem("accessToken")

    if(sessionLocaStorage != null) {
      this.setState({
        ...this.state,
        userLoginActivity: true
      }, () => {
        console.log(this.state);
      })


    } else {
      console.log("Ga dapat data session Local Storage !!!");
    }
  };

  componentDidUpdate(prevProps){
    
    const { login, user, accessToken, getListUserDispatch, getBookingCalendarAvailableDispatch } = this.props;
    
    if(prevProps.login != login){   

      // console.log(login)

      this.setState({
        ...this.state,
        userLoginActivity: true
      }, () => {
        console.log(this.state);
        // getBookingCalendarAvailableDispatch();
      })    
    }

    if(prevProps.user != user){

      const statusUpdated =  user.status ? user.status : null
      if(statusUpdated == 200){
        console.log("Berhasil updated");
        getListUserDispatch(accessToken);
        this.closeModal();
      }
    }

    if(prevProps.accessToken != accessToken){
      console.log(this.props)
    }
  }
  
  handleInputChange = (e, data ) => {

    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({

      ...this.state,
        [data]: {
              ...this.state[data],
              [name]: value
        }
    });
  };

  handleClickRecipe = () => {
    console.log("Handle Click Recipes...")
  }

  handleUserLogin = (e) => {
    e.preventDefault();
    const { postUserLoginDispatch } = this.props;

    /*
        {
          "client_id":"8",
          "client_secret":"Ea0wMDF3k6LaK59ZrfCCQw5BYcqu89rQbX2RsB9c",
          "grant_type":"password",
          "password":"trabo2019",
          "username":"wisatamusi@gmail.com"
        }
    */
    const password = this.state.data.password;
    const username = this.state.data.username;

    let data = {
      client_id: "8",
      client_secret :"Ea0wMDF3k6LaK59ZrfCCQw5BYcqu89rQbX2RsB9c",
      grant_type:"password",
      password: password,
      username: username
    }

    console.log(data);

    postUserLoginDispatch(data);
  };

  handleUserLogout = (e) => {
    e.preventDefault()
    localStorage.clear(); 
    window.location.reload();
  }

  renderButtonLogout(){

    return(
      <button onClick={(e) => this.handleUserLogout(e)}>Log out </button>
    )
  }

  openModal(e, data) {

    e.preventDefault();
    this.setState({
        ...this.state,
        visible : true,
        userSelected: data
    }, () => {
      console.log(this.state)
    });   
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

  handleSaveEdit = (e) => {

    e.preventDefault();

    const { postUpdateUserDispatch } = this.props;
    const { userSelected } = this.state;
    const sessionLocaStorage = localStorage.getItem("accessToken")

    let data = {
      accessToken: sessionLocaStorage,
      user_id: userSelected.id,
      username: this.state.data.username,
      name: this.state.data.name,
      warehouse_id: userSelected.warehouse ? userSelected.warehouse.id : null,
      access_id:userSelected.access ? userSelected.access.id : null
    };

    postUpdateUserDispatch(data);
  };

  render() {  
    
    const { user } = this.props;
    const { userLoginActivity, userSelected } = this.state;

    return (
      <div>
        <div className="grid-container">
         
          <div className="grid-item">
            <h1>Trabo Login Page </h1>
            <form>
              <input type="text" name="username" placeholder="Type your name..." onChange={(e) => this.handleInputChange(e, 'data')} />
              <label> Type username</label>
              <br />
              <br />
              
              <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleInputChange(e, 'data')} />
              <label>Password</label>
              <br />
              <br />
          
              <button onClick={(e) => this.handleUserLogin(e) }>Save</button>
            </form>
            <p>Status Login : <b><i>{userLoginActivity == false ? "Not Login !" : "Hurray, you are in session !"}</i></b></p>
            <span className="opacity :">wisatamusi@gmail.com</span>
            <br />
            <span className="opacity :">trabo2019</span>
            {userLoginActivity == true ? this.renderButtonLogout(): null}
          </div>

          <div className="grid-item">
          
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state,
  user: state.user.user,
  accessToken: state.accessToken.data
});

const mapDispatchToProps = (dispatch) => {

  return {
    getBookingCalendarAvailableDispatch : (data) => dispatch(getBookingCalendarAvailable(data)),
    postUserLoginDispatch : (data) => dispatch(postUserLogin(data)),
    getSessionAccessTokenLocalStorageDispatch: () => dispatch(getSessionAccessTokenLocalStorage())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
