import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<nav className="navigation">
				<NavLink exact activeClassName="activeLink" to="/">
					Home
				</NavLink>
				<NavLink exact activeClassName="activeLink" to="/dojo">
					Dojo
				</NavLink>
				<NavLink exact activeClassName="activeLink" to="/contact">
					Contact
				</NavLink>
			</nav>
		);
	}
}

export default Navigation;
