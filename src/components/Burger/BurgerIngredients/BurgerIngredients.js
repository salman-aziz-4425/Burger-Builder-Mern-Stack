import React,{Component} from "react"
import PropsTypes from 'prop-types'
import './9.1 BurgerIngredient.css.css'

class BurgerIngredients extends Component{
    render(){
        let ingredient=null;
        switch(this.props.type){
            case('bread-bottom'):
               ingredient=<div className="BreadBottom"></div>
               break;
            case('bread-top'):
             ingredient=(
                 <div className="BreadTop">
                     <div className="Seeds1"></div>
                 <div className="Seeds2"></div>
                 </div>
             )
             break;
            case('meat'):
             ingredient=<div className="Meat"></div>
             break;
             case('cheese'):
             ingredient=<div className="Cheese"></div>
             break;
             case('bacon'):
             ingredient=<div className="Bacon"></div>
             break;
             case('salad'):
             ingredient=<div className="Salad"></div>
             break;
            default:
                ingredient=null;
             break;
        }
        return ingredient
    }
}
BurgerIngredients.propTypes={
    type:PropsTypes.string.isRequired
}
export default BurgerIngredients