import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackgroundContainer, TotalParentContainer } from './index.styled'
import Navbar from '../Navbar'
import { apiKey } from '../utlis'

const MovieDetailedView = () => {
  const params = useParams()
  const [movieDetails,setMovieDetails] = useState({})
  const [castDetails,setCastDetails] = useState({})
  const getMovieData = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params?.id}?api_key=${apiKey}&language=en-US`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        setMovieDetails(responseData)
        
      } catch (error) {
        console.log(error)
        // setError(error);
        // setLoading(false);
      }
}
  const getCastDetails = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params?.id}/credits?api_key=${apiKey}&language=en-US`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        // console.log(responseData,"castDetails")
        setCastDetails(responseData)
        
      } catch (error) {
        console.log(error)
        // setError(error);
        // setLoading(false);
      }
  }
  useEffect(() => {
    getMovieData()
    getCastDetails()
  },[])
  return (
    <>
    <Navbar/>
    <TotalParentContainer>
     {Object.keys(movieDetails).length > 0 && (
        <BackgroundContainer url={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}>
         
        </BackgroundContainer>
     )}
     
    </TotalParentContainer>
    </>
  )
}

export default MovieDetailedView
