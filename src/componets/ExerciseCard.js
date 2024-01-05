import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'


const ExerciseCard = ({exercises}) => {
    console.log(exercises+"Card")
  return (
    <Link className='exercise-card' to={`/exercise/${exercises.id}`}>
         <img src={exercises.gifUrl} alt={exercises.name} loading='lazy'/>
         <Stack>
            <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9', fontSize:'24px',borderRadius:'20px',textTransform:'capitalize'}} >
               {exercises.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'#fff',background:'#fcc757', fontSize:'20px',borderRadius:'20px',textTransform:'capitalize'}} >
               {exercises.target}
            </Button>
         </Stack>
         <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
            {exercises.name}
         </Typography>
    </Link>
  )
}

export default ExerciseCard