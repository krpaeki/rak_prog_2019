import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userUpdate, tokenUpdate } from "../store/actions";
import { toast } from "react-toastify";
import * as services from "../services.js";


class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        services.login(this.state)
        .then(this.handleSuccess)
        .catch ( err => {
            console.log("Error", err);
            toast.error("Logimine ebaõnnestus!");
        });
    };

    handleSuccess = ({token, user}) => {
        this.props.dispatch(userUpdate(user));
        this.props.dispatch(tokenUpdate(token));
        this.props.history.push(`/users/${user._id}`);
    };

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };

    render(){
        return (
            <>
                <div><h1 style={{textAlign: "center"}}>Logi sisse</h1></div>
                <div className="form">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="email" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder="parool" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button>Logi sisse</button>
                        <p className="message">Pole registreerunud? <Link to={"/signup"}>Loo konto</Link></p>
                    </form>
                </div>
            </>
        );
    }
    }
export default connect()(LoginPage);