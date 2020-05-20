import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from './store/actions/Application';
import Popup from "reactjs-popup";

class  App extends Component {
  state = {
    openLoginModel: false
  }

  toggleLoginPopup = async() => {
    this.setState({openLoginModel: !this.state.openLoginModel})
  };

  render() {
    return (
      <div className="App">
        <Layout 
          {...this.props} 
          onLoginClick = {this.toggleLoginPopup}
          logOutClick = {this.props.logoutUser}/>        
        <Popup 
            open={this.state.openLoginModel && !this.props.loggedInUser}
            closeOnDocumentClick
            closeOnEscape
            onClose={this.toggleLoginPopup}
            contentStyle={{ width: "360px" , height: "240", padding: "0px" }}
            modal>
          <Login loginUser = {this.props.loginUser}></Login>
        </Popup>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.application }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);

