import React, {useState} from 'react'

import Home from './Home'
import Albuns from './Albuns'
import Counter from './Counter'

function App(){
  const [page, setPage] = useState()

  const handleChangePage = (page) =>{
    setPage(page)
  }

  const Page = page === 'albuns'? Albuns: Counter
  return(
    <>
      <button onClick={(setPage) => handleChangePage('albuns')}>Álbuns</button>
      <button onClick={(setPage) => handleChangePage('counter')}>Counter</button>

      <Page />

    </>
  )
}

export default App
