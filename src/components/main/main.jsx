import React, { Component } from "react";
export default class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         initView: true,
    //         loading: false,
    //         users: [
    //             // {avataUrl:"",url:"",name:""}
    //         ],
    //         errorMsg: null
    //     }
    // }

    // 給組件對象(this)指定state屬性
    state = {
        initView: true,
        loading: false,
        users: [
            // {avataUrl:"",url:"",name:""}
        ],
        errorMsg: null
    }

    render() {
        const { initView, loading, users, errorMsg } = this.state
        console.log(users)
        if (initView) {
            return (
                <h2>請輸入關鍵字搜索</h2>
            )
        } else if (loading) {
            return (<h2>正在請求中...</h2>)
        } else if (errorMsg) {
            return (<h2>{errorMsg}</h2>)
        } else {
            return (
                <div className="row">
                    {users.map(() => (  // =>()  箭頭表示function  return
                        <div className="card">
                            <a href={users.url} target="_black">
                                <img src={users.avataUrl} style={{ width: 100 }} alt="0" />
                            </a>
                            <p className="card-text">{users.name}</p>
                        </div>
                    ))}

                </div>
            );
        }















    }
}

// export default App;  //跟上面的export default 挑一個寫
