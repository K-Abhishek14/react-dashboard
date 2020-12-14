import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	)
}
export default Routers;
