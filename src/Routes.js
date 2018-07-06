import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PhoneBook from "./containers/PhoneBook/PhoneBook";


const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={PhoneBook}/>

            <Route
                render={() => <h1 style={{textAlign: "center"}}>Page not found</h1>}
            />
        </Switch>
    );
};

const mapStateToProps = state => {
    return {};
};

export default withRouter(connect(mapStateToProps)(Routes));
