import React, { useState } from 'react'
import { NavBtn, TotalNavbarCont,Heading, NavAlign } from './index.styled'
import { useNavigate } from 'react-router-dom'
import { apiKey } from '../utlis'

const Navbar = (props) => {
    const {value,setValue,setData,page} = props
    const navigate = useNavigate()
    const searchResults = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api\_key=${apiKey}&language=en-US&query=${value}&page=${page}
            `);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            const responseData = await response.json();
            console.log(responseData)
            
            setData(responseData?.results)
            // setData(responseData);
            // setLoading(false);
          } catch (error) {
            console.log(error)
            // setError(error);
            // setLoading(false);
          }
    }
   
  return (
    <TotalNavbarCont>
        <Heading>MovieDb</Heading>
        <NavAlign>
        <NavBtn onClick={() => {
        navigate("/")
       }}>Popular</NavBtn>
       <NavBtn onClick={() => {
        navigate("/toprated")
       }}>Top Rated</NavBtn>
       <NavBtn onClick={() => {
        navigate("/upcoming")
       }}>Upcoming</NavBtn>
       <input type="text" onChange={(e) => {
          setValue(e.target.value)
       }}/>
       <NavBtn onClick={searchResults}>Search</NavBtn>
        </NavAlign>
       
    </TotalNavbarCont>
  )
}

export default Navbar
