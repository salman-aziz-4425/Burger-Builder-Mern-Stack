
import React from "react";
import '../Navigation/Navigation.css'
const navigationItem=(props)=>(
        <li className="NavigationItem"><a href={props.links} className={props.active?"active":null}>{props.children}</a></li>
)
export default navigationItem;
 