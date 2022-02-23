import React, {useState, useEffect} from 'react'
import './counter.css'

const Counter = () =>{
    const [contador, setContador] = useState(0)
    
    useEffect(() => {
        console.log('Alterou')
    }, [contador]) 
    
    const handleOnClick = operador => {
        const novoValor = operador === "+"? contador + 1: contador - 1
        setContador(novoValor)

    }

    return (
        <div className="counter">
            <span>{contador}</span>
            <h1> Counter </h1>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
            
        </div>
    )
}

export default Counter