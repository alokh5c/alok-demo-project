import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import LandingPageComp  from './component/landingpage.jsx'





class RoutesComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Route exact path="/" component={LandingPageComp} />
                    </div>
                </div>
            </Router>
        );
    }
}
export default RoutesComp;
