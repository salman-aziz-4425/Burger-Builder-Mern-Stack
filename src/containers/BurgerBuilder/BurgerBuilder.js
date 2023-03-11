import React,{ Component } from "react";
import Aux from '../../hoc/Auc'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.5,
    bacon:1.7
}
class BurgerBuilder extends Component{
state={
ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
},
totalPrice:4,
purchaseable:false,
purchasing:false
}
updatePurchaseable(ingredients){
const sum=Object.keys(ingredients).map((igKey=>{
    return ingredients[igKey]
})).reduce((sum,el)=>{
    return sum+el
},0)
this.setState({purchaseable:sum>0})
}
addIngredientHandler=(type)=>{
    const oldCount=this.state.ingredients[type]
    const updatedCount=oldCount+1
    const updatedIngredients={
        ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount
    const priceAddition=INGREDIENT_PRICES[type]
    const oldPrice=this.state.totalPrice
    const newPrice=oldPrice+priceAddition
    this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredients
    })
    this.updatePurchaseable(updatedIngredients)
}
removeIngredientHandler=(type)=>{
    const oldCount=this.state.ingredients[type]
    let updatedCount=0;
    if(oldCount>0)
    {
         updatedCount=oldCount-1
    }
    else
    {

        updatedCount=0
    }
    const updatedIngredients={
        ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount
    const priceAddition=INGREDIENT_PRICES[type]
    const oldPrice=this.state.totalPrice
    let newPrice;
    if(oldCount>0)
    {
       newPrice=oldPrice-priceAddition
    this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredients
    })
    this.updatePurchaseable(updatedIngredients)
}
}
purchaseHandler=()=>{
    this.setState({purchasing:true})
}
purchaseCancelHandler=()=>{
    this.setState({purchasing:false})
}
purchaseContinueHandler=()=>{
    alert("You continue")
}
render(){
    return(
       <Aux>
       <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
           <OrderSummary ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
           />
       </Modal>
          <Burger ingredients={this.state.ingredients}/>
           <BuildControls 
            ingredientsAdded={this.addIngredientHandler}
            ingredientsRemoved={this.removeIngredientHandler}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
            Price={this.state.totalPrice}
           />
       </Aux>
    )
}
}

export default BurgerBuilder