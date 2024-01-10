import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../componets/HeroBanner'
import SearchExercise from '../componets/SearchExercise'
import Exercise from '../componets/Exercise'



const Home = () => {       
     const[bodyPart,setBodyPart]=useState('all')
     const[exercise,setExercise]=useState([])

   

  return (
       <Box>
        <HeroBanner/>
        <SearchExercise
          setExercise={setExercise}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercise 
         setExercise={setExercise}
         bodyPart={bodyPart}
         exercise={exercise}/>
       </Box>
  )
}

export default Home