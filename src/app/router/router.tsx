import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from '../views/login-page';
import WeatherPage from '../views/weather-page/weather-page';

const AppRouter = () => {

    return (
        <Router>
            <Route path='/login' component={LoginPage} />
            <Route exact path='/' component={WeatherPage} />
        </Router>
    )
}

export default AppRouter;
