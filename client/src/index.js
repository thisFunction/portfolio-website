import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import Dojo from "./containers/Dojo/Dojo";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import store from "./store";
import "./index.scss";

render(
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/dojo" component={Dojo} />
					<Route exact path="/contact" component={Contact} />
					<Route component={Error} />
				</Switch>
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById("root")
);
