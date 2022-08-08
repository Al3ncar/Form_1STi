import styled from "styled-components";
import { Link } from "react-router-dom"

export const Cont = styled.section`
    width:100%;
    height:92vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:${(props) => props.theme.collors.cor2};
`
export const ContForm = styled.div`
    width:36%;
    border-radius:0.5vw;
    padding: 0.8% 1%;
    margin-top:8%;
    box-shadow:0px 0px 5px 1px ${(props) => props.theme.collors.cor1};
    @media(max-width:1100px){width:45%;}
    @media(max-width:850px){width:60%;}
    @media(max-width:550px){width:70%;}
    @media(max-width:320px){width:80%;}
    background-color:${(props) => props.theme.collors.cor2};
`
export const Box1sti = styled.div`
    width:3%;
    display:none;
    @media(max-width:550px){width:30%; display:grid; padding-top:5% ;}
    @media(max-width:320px){width:40%; display:grid; padding-top:9% ;}

`
export const Log1sti = styled.img`
    width:100%;
    border-radius:50%;
`
export const ContTitl = styled.div`
    width:100%;
    padding:0 0 0.9% 0;
    margin-bottom:2.5%;
    font-size:1vw;
    border-bottom:solid 0.1vw ${(props) => props.theme.collors.cor1};
    color:${(props) => props.theme.collors.cor1};
    @media(max-width:1100px){font-size:2vw;}
    @media(max-width:800px){font-size:2vw; padding-left:2%;}
    @media(max-width:550px){font-size:3vw;}
    @media(max-width:320px){font-size:4vw;}

`
export const BoxForm = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media(max-width:800px){ padding:2%;}

`
export const BoxFild = styled.div`
   width:100%;
   padding:1% 1.5% 1.5% 1.5%;
   margin:3% 0 ;
   font-size:0.9vw;
   font-weight:400;
   display:flex;
   align-items:center;
   justify-content:center;
   position:relative; 
   @media(max-width:1100px){margin:3.5% 0;}
   @media(max-width:800px){margin:3% 0; padding:4% 2%;}
   @media(max-width:550px){width:96%; padding: 4% 2% ;}
    @media(max-width:320px){margin:5% 0;}
`
export const Lab = styled.label`
    background-color:${(props) => props.theme.collors.cor2};
    color:${(props) => props.theme.collors.cor1};
    border-radius:1vw;
    padding:0 1%;
    position:absolute;
    bottom:97%;  left:3%;
    z-index:1;
    @media(max-width:1100px){font-size:1.2vw;}
    @media(max-width:800px){font-size:1.5vw; bottom:70%;}
    @media(max-width:550px){font-size:2.6vw; bottom:70%;}
    @media(max-width:320px){font-size:3.6vw; bottom:75%;}

`
export const Inp = styled.input`
    width:100%;
    padding:2% 0 1% 3%;
    font-size:1vw;
    border:solid gray 0.15vw;
    border-radius:0.3vw;
    outline: none;
    background-color:${(props) => props.theme.collors.cor2};
    color:${(props) => props.theme.collors.cor3};
    position:absolute;
    left:0;  bottom:0; 
    
    &::placeholder{position:relative; left:73%;}
    &:focus{border: ${(props) => props.theme.collors.cor1} solid 0.15vw}
    &:hover {cursor: pointer;}
    @media(max-width:800px){padding:3%; font-size:1.8vw;}
    @media(max-width:550px){font-size:2.4vw;}
    @media(max-width:320px){
        font-size:3.6vw;
        &::placeholder{left:62%;}
    }
`

export const BoxPerfLock = styled.button`
    width:2.8%;
    border:none;
    border-radius:50%;
    display:flex;
    align-items:center;
    position:relative;
    left:47%;
    z-index:1;

    @media(max-width:1100px){width:3%;}
    @media(max-width:550px){width:4%;}
    @media(max-width:320px){width:5%;}
`
export const Perf = styled.img`width:100%; z-index:1;border-radius:50%;`
export const Lock = styled.img`width:100%; z-index:1;border-radius:50%;`
export const BoxBtn = styled.div`
    width:100%; 
    padding:2% 0;
    z-index:1;
`
export const Btn = styled.button`
    width: 100%;
    padding:2%;
    margin-top:1%;
    font-weight:500;
    background-color:${(props) => props.theme.collors.cor1};
    color:${(props) => props.theme.collors.cor2};
    border:none;
    border-radius:0.4vw;
    &:disabled{opacity:50%;}
    &:enabled:hover{
        opacity:100%;
        cursor:pointer;
    }
    @media(max-width:550px){width:96%; margin:2% 2%}
`
export const ContCancel = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const ConfirmLink = styled(Link)`
    width:49%;
    text-align:center;
    padding:2% 0%;
    background-color:${(props) => props.theme.collors.cor1};
    font-weight:500;
    color:${(props) => props.theme.collors.cor2};
    border:none;
    border-radius:0.4vw;
    text-decoration:none;
    &:hover{
        cursor:pointer;
        transform:scale(1.05);
    }
`
export const Cancel = styled.button`
    width:48%;
    text-align:center;
    font-weight:500;
    padding:2% 0%;
    border:none;
    border-radius:0.4vw;
    background-color:${(props) => props.theme.collors.cor1};
    color:${(props) => props.theme.collors.cor2};
    &:hover{
        background-color:gray;
    }
`