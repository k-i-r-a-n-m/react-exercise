import React,{useState} from 'react'

const Use_state_hook = ()=>{
    // useState()
    const [value,setValue] = useState(0)

    function incrementHandler(event){
        setValue(prev=>prev+1)
    }
    
    function decrementHandler(event){
        setValue(prev=>prev-1)
    }

    return (
        <div>
            <button onClick={decrementHandler}>-</button>
            <span>{value}</span>
            <button onClick={incrementHandler}>+</button>
        </div>
       
    )
}



export default Use_state_hook