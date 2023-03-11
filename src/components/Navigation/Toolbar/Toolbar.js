import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation/Navigationitems/Navigationitems'
const toolbar=(props)=>{
return(

    <header className='Toolbar'>
        <div>MENU</div>
        <Logo height="80%"/>
        <nav className='DesktopOnly'>
          <NavigationItems/>
        </nav>
    </header>
)
}
export default toolbar