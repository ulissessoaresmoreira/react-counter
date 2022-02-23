import React, {useState} from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'Users'

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Counter',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  }
}

function App(){
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {   
    setPage(page)
  }
  
  const Page = pages[page]

  const pageNames = Object.keys(pages)
  
  return(
    <>
      {
        pageNames.map(page => <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>)
      }      

      {Page && <Page />}

    </>
  )
}

export default App



