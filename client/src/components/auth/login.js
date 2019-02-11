import React, {Component} from "react";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
        this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
        
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
        e.preventDefault();

        const loginUser = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(loginUser)
    }
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
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

export default Login;
