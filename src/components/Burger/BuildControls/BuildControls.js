import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]
const buildControls=(props)=>{
    return(
    <div className='BuildControls'>
    <p>TotalPrice:${props.Price.toFixed(2)}</p>
    {controls.map(ctrl=>{
        return<BuildControl key={ctrl.label} label={ctrl.label}  added={()=>props.ingredientsAdded(ctrl.type)} removed={()=>{props.ingredientsRemoved(ctrl.type)}}></BuildControl>
    })}
    <button className='OrderButton' disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
    </div>
    )
}

export default buildControls