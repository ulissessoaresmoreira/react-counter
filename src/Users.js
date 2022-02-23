import React, {useState} from 'react'

const Users = () => {
    const [status, setStatus] = useState('off')
    
    
    const handleOnClick = (positionButton) => {
        const novoStatus = positionButton === 'on'? 'on': 'off'    
        setStatus(novoStatus)
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


export default Users