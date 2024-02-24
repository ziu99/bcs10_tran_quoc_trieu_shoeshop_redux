import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE, VIEW_DETAIL } from "./redux/constant";
import { addShoeAction, viewDetailAction } from "./redux/action";

class Item extends Component {
  render() {
    let { image, name } = this.props.data;
    return (
      <div className="col-3">
        <img src={image} className="w-100" alt="" />
        <h6>{name}</h6>
        <button
          onClick={() => {
            this.props.handleClickAdd(this.props.data);
          }}
          className="btn-success"
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(this.props.data);
          }}
          className="btn-dark"
        >
          View
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      // dispatch 1 function , function return về action
      dispatch(viewDetailAction(shoe));
    },
    handleClickAdd: (shoe) => {
      dispatch(addShoeAction(shoe));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
// reducer , case "VIEW_DETAIL"
// mapDispatchToProps
