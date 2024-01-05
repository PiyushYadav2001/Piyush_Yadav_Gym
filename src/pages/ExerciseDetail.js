import { Box } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions,fetchData, youtubeOptions} from'../utils/fetchData'
import SimilarExercises from '../componets/SimilarExercises'
import ExerciseVideos from '../componets/ExerciseVideos'
import Details  from '../componets/Details'

const ExerciseDetail = () => {
  const[exerciseDetail,setExerciseDetails]=useState({});
  const[exerciseVideo,setExerciseVideo]=useState([]);
  const[targetMuscleExercises,setTargetMuscleExercise]=useState([]);
  const[equipmentExercises,setEquipmentExercise]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    (async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com/exercises';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
 
      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercise/${id}`,exerciseOptions);
      setExerciseDetails(exerciseDetailData);

      const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}exercise`,youtubeOptions)
      console.log(exerciseVideosData.contents);
      setExerciseVideo(exerciseVideosData.contents);

      const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}?limit=10`,exerciseOptions);
        console.log(exerciseDetailData.target);
        setTargetMuscleExercise(targetMuscleExercisesData);


      const equimentExerciseData=await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}?limit=10`,exerciseOptions);
      setEquipmentExercise(equimentExerciseData);


    })();
  }, [id])
  return (
    <Box>
        <Details exerciseDetail={exerciseDetail}/>
        <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideo}  />
        <SimilarExercises targetMuscleExercise={targetMuscleExercises} equipmentExercise={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail