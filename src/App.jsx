import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import Product from './pages/Product'
import Note from './pages/Note'
import Nestedroute from './pages/Nestedroute'
import Men from './pages/Men'
import Women from './pages/Women'


function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men />}/>
            <Route path='women' element={<Women />}/>
          </Route>
          <Route path='*' element={<Note />}></Route>
          <Route path='/product/nested' element={<Nestedroute />}></Route>
          {/* <Route path='/product/men' element={<Men />}></Route>
           <Route path='/product/women' element={<Women />}></Route> 
            this was not a good way to perform nested routing so to do that use 
            it inside product*/}
        </Routes>
      <Footer/>
      
    </div>
  )
}

export default App