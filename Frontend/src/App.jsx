// import { useState } from 'react'
import { ProviderContext } from './context/providerContext'


import { RouterProvider } from 'react-router-dom';

import Router from './Router/Router'







function App(){
  return(
    <>  
<ProviderContext>
  <RouterProvider router={Router}/>
  </ProviderContext>

    
    </>

  )
}

export default App;
