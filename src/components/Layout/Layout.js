import React from "react"
import Aux from '../../hoc/Auc'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import { Component } from 'react'
class Layout extends Component{
    state={
        showSideDrawer:true
    }
SideDrawerClosedHandler=()=>{
this.setState({showSideDrawer:false})
}
render(){
return(
<Aux>
<Toolbar/>
<SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
<main className='Content'>{this.props.children}</main>
</Aux>
)}
}
export default Layout