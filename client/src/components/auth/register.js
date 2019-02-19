import React, {Component} from "react";
import axios from 'axios'
class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			errors: {}
		};
        
	}
	onChange=(e) => {
		this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit=(e) =>{
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/api/user/register', newUser)
        .then(result => {
            console.log(result.data)
        })
        .catch(error => console.log(error))
    }
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        autoComplete="name"
                    />
					<br />
					<label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        autoComplete="email"
                    />
					<br />
					<label>Password</label>
					<input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        autoComplete="new-password"
                    /> <br/> 
                    <input type="submit"/>
				</form>
			</div>
		);
	}
}

export default Register;
