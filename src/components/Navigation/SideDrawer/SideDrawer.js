import React from "react"
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation/Navigationitems/Navigationitems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/Auc'
const sideDrawer=(props)=>{
// let attachClasses='Close'
// // if(props.open)
// // {
// // attachClasses='SideDrawer'
// // }
return(
    <Aux>
 <Backdrop show={props.open} clicked={props.closed}/>
    <div className="SideDrawer">
    <Logo height="11%"/>
    <nav>
        <NavigationItems/>
    </nav>
    </div>
    </Aux>
)
}
export default sideDrawer