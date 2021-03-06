import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userData.isAuth
    }
};

const withAuthRedirect = (Component) => {

    class ComponentContainer extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(ComponentContainer)
};
export default withAuthRedirect;