import styled from "styled-components";


export const TotalParentContainer = styled.div`

width:100%;
padding:20px;
display:flex;
`

export const BackgroundContainer = styled.div`
width:100%;
height:500px;
background:url(${(props) => (`${props.url}`)});
background-size:100% 100%;

`