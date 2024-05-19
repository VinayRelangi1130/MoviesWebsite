import React from 'react'
import { TotalMovieAlignCont } from './index.styled'
import { useNavigate } from 'react-router-dom'

const MovieComp = (props) => {
    const {movieDetails} = props
    const {id,poster_path,title,vote_average} = movieDetails
    const navigate = useNavigate()
  return (
    <TotalMovieAlignCont onClick={() => {
        navigate(`/${id}`)
    }}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} draggable={false}/>
      <div>{title}</div>
      <div>{vote_average}</div>
    </TotalMovieAlignCont>
  )
}

export default MovieComp
