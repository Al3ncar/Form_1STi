import styled from "styled-components";

export const Cont = styled.section`
    width:100%;
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;

`
export const Card = styled.div`
    width:30%;
    height:40%;
    display:grid;
    place-items:center;
    align-content:center;
    box-shadow: 0px 0px 3px 0.7px rgba(0, 0,0, 0.555);

    @media(max-width:1100px){height:50%;}
    @media(max-width:800px){width:50%;}
    @media(max-width:500px){height:40%;}
    @media(max-width:320px){width:70%;}
`
export const BoxCong = styled.div`
    width:8%;
    display:grid;
    place-items:center;
    padding-bottom:3%;
    @media(max-width:800px){
        width:50%;
    }
    @media(max-width:1100px){width:20%;}

`
export const Cong = styled.img`width:100%;`
export const ContParf = styled.div`
    text-align:center; color:green;
    font-weight:bolder;
    font-size:1.2vw;
    @media(max-width:800px){font-size:2vw;}
    @media(max-width:500px){font-size:2.5w;}
    @media(max-width:320px){font-size:3vw;}
`