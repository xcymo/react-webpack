import React from 'react';
import { Prompt } from 'react-router-dom'
export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { power: false };
        this.changePower = this.changePower.bind(this);
    }
    changePower() {
        this.setState({ power: !this.state.power })
    }
    render() {
        return (
            <div>
                <p>第二个页面</p>
                <Prompt message="是否离开？" when={this.state.power}></Prompt>
                <div>{this.state.power ? "已启用" : "已关闭"}</div>
                <button onClick={this.changePower}>{this.state.power ? "关闭" : "启用"}</button>
            </div>
        )
    }
}