import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercise = ({ setExercise,bodyPart,exercise }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  

  useEffect(() => {
    // In this i use imediate invoked function
    (async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
         exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1324",
          exerciseOptions
        );
        
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1324`,
          exerciseOptions
        );
      }
    
      setExercise(exerciseData);
    })();
    
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.from(exercise).slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  
  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercises, index) => (
          <ExerciseCard key={index} exercises={exercises} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
