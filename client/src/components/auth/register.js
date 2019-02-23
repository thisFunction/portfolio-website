import React, {Component} from "react";
import classnames from 'classnames';
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
        .catch(error => this.setState({errors: error.response.data}))
    }
	render() {
        const { errors } = this.state;

		return (
			<div>
				<form noValidate onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        className={classnames('',{
                            'is-invalid': errors.name
                        })}
                        value={this.state.name}
                        onChange={this.onChange}
                        autoComplete="name"
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
					<br />
					<label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className={classnames('',{
                            'is-invalid': errors.email
                        })}
                        value={this.state.email}
                        onChange={this.onChange}
                        autoComplete="email"
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.email}</div>)}
					<br />
					<label>Password</label>
					<input
                        type="password"
                        name="password"
                        className={classnames('',{
                            'is-invalid': errors.password
                        })}
                        value={this.state.password}
                        onChange={this.onChange}
                        autoComplete="new-password"
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.password}</div>)}
                    <br/> 
                    <input type="submit"/>
				</form>
			</div>
		);
	}
}

export default Register;
