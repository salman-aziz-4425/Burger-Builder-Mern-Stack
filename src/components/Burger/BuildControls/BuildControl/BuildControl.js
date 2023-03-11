import React from 'react'
import './BuildControl.css'
const buildControl=(props)=>{
    return(
<div>
    <div className='BuildControl'>
    {props.label}
    <button className='Less' onClick={props.removed}>Less</button>
    <button className='More' onClick={props.added}>More</button>
    </div>
</div>
    )
}

export default buildControl