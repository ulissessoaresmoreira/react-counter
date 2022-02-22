import React, {useState, useEffect} from 'react'

const Albuns = () => {
    const [status, setStatus] = useState('on')

    useEffect(() => {
        const status = 'on'? status('off'): status('on')
    }, [status]) 

const handleOnClick = position => {    
    setStatus('off')
}


    return (
        <div>
            <span>{status}</span> 
            <h1> Página Inicial</h1>
            <button onClick = {() => handleOnClick('on') }>on</button> 
            <button onClick = {() => handleOnClick('off')}>off</button>
        </div>
    )
}


export default Albuns


const novoValor = operador === "+"? contador + 1: contador - 1
setContador(novoValor)