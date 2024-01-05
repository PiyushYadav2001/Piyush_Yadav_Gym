import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';


const SimilarExercises = ({targetMuscleExercise,equipmentExercise}) => {
   console.log(targetMuscleExercise)
  console.log(equipmentExercise)
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
        <Typography variant='h3' mb={5}>
          Exercise that target the same muscle group
          </Typography>
          <Stack direction='row' sx={{p:2,postion:'relative'}}>
            {
              targetMuscleExercise.length?
              <HorizontalScrollbar data={targetMuscleExercise}/>
            :<Loader/>}
            </Stack>   

            <Typography variant='h3' mb={5}>
          Exercise that use the same equipment
          </Typography>
          <Stack direction='row' sx={{p:2,postion:'relative'}}>
            {
              equipmentExercise.length?
              <HorizontalScrollbar data={equipmentExercise}/>
            :<Loader/>}
            </Stack>   
    </Box>
  )
}

export default SimilarExercises