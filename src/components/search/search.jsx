import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Search extends Component {
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    search = () => {
        //得到輸入的關鍵字
        const searchName = this.input.value.trim()
        // 搜索
        if (searchName) {
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search github users</h3>
                <div>
                    <input type="text" placeholder="name" ref={input => this.input = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

// export default App;  //跟上面的export default 挑一個寫
