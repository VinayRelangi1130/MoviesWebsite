import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { apiKey } from '../utlis'
import MovieComp from '../MovieComp'
import { ButtonAlignCont, GridAlignCont, GridContainer } from './index.styled'
import { NavBtn } from '../Navbar/index.styled'


const HomePage = (props) => {
    const {category,value,setValue} = props
    const [loader,setLoader] = useState(true)
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)

    const getAllMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            const responseData = await response.json();
            // console.log(responseData)
            setData(responseData?.results)
            // setData(responseData);
            // setLoading(false);
          } catch (error) {
            console.log(error)
            // setError(error);
            // setLoading(false);
          }
    }
    useEffect(() => {
     if(page >= 1 ){
        getAllMovies()
     }
     
    },[page])
    console.log(page)
    const OnClick = () => {
        setPage(page + 1)
    }
  return (
    <div>
      <Navbar value={value} setValue={setValue} setData={setData} page={page}/>
      <GridAlignCont>
      <GridContainer>
      {data?.length > 0 && (

        data?.map((eachObj) => 
            <MovieComp movieDetails={eachObj} key={eachObj?.id}/>
        )
      )}
      </GridContainer>
      </GridAlignCont>
      <ButtonAlignCont>
      <NavBtn onClick={() => {
        if(page >= 1){
         setPage(page - 1)
        }
        
      }}>Prev</NavBtn>
      <NavBtn onClick={OnClick}>Next</NavBtn>
      </ButtonAlignCont>
    </div>
  )
}

export default HomePage
