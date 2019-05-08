import React from 'react';

export default class MyComponent extends React.Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <div>第三个页面</div>
                <div>参数A：{this.props.match.params.a}</div>
                <div>参数A：{this.props.match.params.b}</div>
            </div>
        )
    }
}