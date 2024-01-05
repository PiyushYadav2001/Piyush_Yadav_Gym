import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './componets/Navbar.js'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import './App.css'
import Footer from './componets/Footer.js'

const App = () => {
  return (
   <Box width='400px' sx={{width:{xl:'1488px'}}} m="auto">
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>
    <Footer/>
   </Box>
  )
}

export default App