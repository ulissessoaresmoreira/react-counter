import React, {useState} from 'react'

const Home = () => {
    const [status, setStatus] = useState('on')


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


export default Home