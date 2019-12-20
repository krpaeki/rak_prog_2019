import React from "react";
import "./form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as services from "../services.js";

class SignupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",            
        };
    }
    
        handleSubmit = (e) =>{
            e.preventDefault();
            services.signup(this.state)
                .then( () =>{
                    this.props.history.push("/login");
                    toast.success("Konto loomine onnestus");
                })
                .catch( err =>{
                    console.log("Error", err);
                    toast.error("Konto loomine ebaonnestus");
                });
           };
    
        handleChange = (e) =>{
            this.setState({
                [e.target.name]: e.target.value,
            });
        };

    render(){
        return (
            <>
                <div><h1 style={{textAlign: "center"}}>Registreeri kasutajaks</h1></div>
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="email" 
                        name={"email"} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="parool" 
                        name={"password"} 
                        onChange={this.handleChange}
                    />                        
                    <button>Loo kasutaja</button>
                    <p className="message">Kasutaja juba olemas? <Link to={"/login"}>Logi sisse</Link></p>
                    </form>
                </div>
            </>
        );
    }
}

export default SignupPage;