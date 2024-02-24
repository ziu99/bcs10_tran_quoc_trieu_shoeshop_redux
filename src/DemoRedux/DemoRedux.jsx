import React, { Component } from "react";
import { connect } from "react-redux";
import { GIAM, TANG } from "./redux/constant";

class DemoRedux extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleGiam} className="btn-dark">
          -
        </button>
        <strong>{this.props.number}</strong>
        <button onClick={this.props.handleTang} className="btn-success">
          +
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    number: state.value,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      let action = {
        type: TANG,
      };
      dispatch(action);
    },
    handleGiam: () => {
      let action = {
        type: GIAM,
        payload: 50,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
