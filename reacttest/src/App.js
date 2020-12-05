


import React, { Component } from "react";
// import logo <newList/>from "./logo.svg";
import "./App.css";
import Multiples from "./components/multiples";
import Even from "./components/oddnEven";
import Sum from "./components/sum";
// import Common from "./components/common";
// import Duplicates from "./components/duplicates";
// import Sort from "./components/sort";


// import loops from "./components/loops";
// import Strings from "./components/string";
// import Number from "./components/number";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <loops/> */}
        {/* <Strings/> */}
        {/* <Number/> */}
        {/* <Duplicates/> */}
        {/* <Multiples/> */}
        {/* <Sort/> */}
        {/* <Common/> */}
        {/* <Even/> */}
        <Sum/>
      </div>
    )
  }
}

export default App


