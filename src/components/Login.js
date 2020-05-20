import React, {Component} from 'react';


class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: null
    }

    onChangeEvent = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }

    onLoginClick = async(e) => {
        e.preventDefault();
       const isValid = await this.validate();
       if(isValid) {
            const isLoginSucceeded = await this.props.loginUser({
                userName: this.state.username, 
                password: this.state.password
            });
            if(!isLoginSucceeded){
                this.setState({errorMessage: "Invalid username or password"});
                return;
            }
            else{
                this.setState({errorMessage: null});
            }
        }
    }

    validate = async() => {
        let isValid = true;
        if(this.state.username.trim().length === 0 ){
            this.setState({errorMessage: 'User name is required.'});
            isValid = false;
        }
        else if(this.state.password.trim().length === 0 ){
            this.setState({errorMessage: 'Password is required.'});
            isValid = false;
        }

        return isValid;
    }


    render() {
        return (
        <div className="login-modal-content">
                <div className ="login-heading">Login</div>
                {this.state.errorMessage? <div className="alert alert-danger mt-2" role="alert">{this.state.errorMessage}</div> : null}
                <form>
                    <div className="row form-group">
                        <div className="col-12 pt-3">
                            <input 
                                type="text" 
                                className ="user-input-box ml-2" 
                                placeholder="Username"  
                                name="username" 
                                value={this.state.username}
                                onChange ={this.onChangeEvent}/>
                        </div>
                        <div className="col-12 mt-3">
                            <input 
                                type="password" 
                                className ="user-input-box ml-2" 
                                placeholder="Password" 
                                name="password" 
                                value={this.state.password} 
                                onChange ={this.onChangeEvent}/>
                            <button type="submit" className="btn btn-success btn-sm mt-2 mb-2" onClick ={this.onLoginClick}>Login</button>
                        </div>
                    </div>
                </form>         
        </div>
        );
    }
}

export default Login;