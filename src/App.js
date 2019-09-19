import React from 'react';
import LandingPage from "./components/LandingPage";

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </React.Fragment>
    );
}

export default App;