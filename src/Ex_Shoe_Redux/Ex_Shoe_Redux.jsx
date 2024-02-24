import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import Cart from "./Cart";

export default class Ex_Shoe_Redux extends Component {
  render() {
    return (
      <div className="row w-100">
        <Cart />
        <List />
        <Detail />
      </div>
    );
  }
}
