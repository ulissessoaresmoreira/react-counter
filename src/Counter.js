import React, {useState} from 'react'
import './counter.css'

const Counter = () =>{
    const [contador, setContador] = useState(0)
    
    const handleOnClick = (operador) => {
        alert(operador)
    }

    return (
        <div className="counter">
            <span>5</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
        </div>
    )
}

export default Counter