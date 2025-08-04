import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Blog/Home'
import Register from './Page/Auth/Register'
import Login from './Page/Auth/Login'
import AddBlog from './Page/Blog/AddBlog'
import EditBlog from './Page/Blog/EditBlog'
import SingleBlog from './Page/Blog/SingleBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog/add' element={<AddBlog />} />
          <Route path='/blog/edit/:id' element={<EditBlog />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
