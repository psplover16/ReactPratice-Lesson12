// import "./app.css";
// import React from "react";
import React, { Component } from "react";
import Search from "../search/search";
import Main from "../main/main";
// class App extends React.Component {
export default class App extends Component {
  state = {
    searchName: ""
  }
  // 給組件對象
  setSearchName = (searchName) => {
    this.searchName = searchName
  }
  render() {
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={this.state.searchName}/>
      </div>
    );
  }
}
// https://www.bilibili.com/video/BV184411x7F9?p=27&spm_id_from=pageDriver
// export default App;  //跟上面的export default 挑一個寫
