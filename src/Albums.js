import React, {useState} from 'react'

const Albums = () => {
    const [status, setStatus] = useState('off')
    
    
    const handleOnClick = (positionButton) => {
        const novoStatus = positionButton === 'on'? 'on': 'off'    
        setStatus(novoStatus)
    }
    
    

    return (
        <div>
            <span>{status}</span> 
            <h1> Albuns</h1>
            <button onClick = {() => handleOnClick('on') }>on</button> 
            <button onClick = {() => handleOnClick('off')}>off</button>
        </div>
    )
}


export default Albums




