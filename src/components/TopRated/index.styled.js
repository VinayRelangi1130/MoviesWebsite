import styled from "styled-components";


export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`
export const GridAlignCont = styled.div`
display:flex;
width:100%;
// height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding:20px;
`
export const ButtonAlignCont = styled.div`
width:100%;
display:flex;
height:50px;
background:#2b2929;
justify-content: center;
align-items:center;
gap:20px;
`