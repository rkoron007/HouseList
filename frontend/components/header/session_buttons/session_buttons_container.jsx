import React from "react";
import { logout, login } from "../../../actions/session_actions";
import { connect } from "react-redux";
import SessionButtons from "./session_buttons";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  const demo = { username: "USERNAME", password: "PASSWORD" };
  return {
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(login(demo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
