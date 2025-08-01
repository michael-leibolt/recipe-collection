 import React, { useEffect, useState } from 'react'
 import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <>

      <h1>Yo!</h1>
      <Routes>
        <Route path='/*' element={<> <h1>Try Again</h1> <Link to='/'><button>Go home Chef</button></Link> </>} />
        <Route path='/' element={<Default/>} />
      </Routes>
    </>
  )

}

function Default() {
  return (
    <>
      <h1>What's up dog?</h1>
      <Link to='/recipes'><button>Go To Recipes</button></Link>
    </>

  )

}


export default App