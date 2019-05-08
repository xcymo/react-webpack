import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'
class NavBar extends React.Component {
    render() {
        // activeClassName 当前NavLink被匹配到时，添加的class
        return (
            <div>
                |<NavLink activeClassName="red" className="blue" exact to="/">第一个</NavLink>
                |<NavLink activeClassName="red" className="blue" to="/xcy2">第二个</NavLink>
                |<NavLink activeClassName="red" className="blue" to="/xcy3/参数a/参数b">第三个</NavLink>
                |<NavLink activeClassName="red" className="blue" to="/qwe">不存在</NavLink>
                |<NavLink activeClassName="red" className="blue" to="/*">Redirect</NavLink>
            </div>
        )
    }
}
export default NavBar;