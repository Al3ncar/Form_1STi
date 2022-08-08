import styled from "styled-components";
import { Link } from "react-router-dom"

export const Cont = styled.header`
    width:100%;
    height:8vh;
    padding:0 2% 0.3% 0;
    background-color:${(props) => props.theme.collors.cor2};
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Box1sti = styled.div`
    width:3%;
    margin-left:4%;
    @media(max-width:800px){width:4%;}
    @media(max-width:500px){display:none;}
`
export const Log1sti = styled.img`
    width:100%;
    border-radius:50%;
`
export const ContSign = styled.div`
    width:15%;
    display:flex;
    justify-content:space-between;
    `
export const SigNav = styled.nav`
    width:30%;
    padding:1% 5%;
    color:white;
    border:none;
    border-radius:0.5vw;
    display:flex;
    @media(max-width:800px){width:35%;}
    @media(max-width:500px){display:none;}
`
export const BoxList = styled.ul`
    width:100%;
    display:flex;
    justify-content:space-between;
`
export const LiSign = styled.li`
    width:100%;
    font-size:1.2vw;
    padding:0 2%;
    list-style:none;
    text-decoration:undeline black 0.1vw;
    @media(max-width:800px){font-size:2vw}
`
export const LinkRout = styled(Link)`
    width:100%;
    padding: 3% 15%;
    outline:solid 0.2vw ${(props) => props.theme.collors.cor1};
    color:${(props) => props.theme.collors.cor1};
    border-radius:2vw;
    text-decoration:none;
    background-color:${(props) => props.theme.collors.cor2};

`
export const CardMod = styled.div`
    width:5%;
    height:100%;
    display: none;
    @media(max-width:500px){
        width:20%;
        display:flex;
        align-items:center;
        background-color:${(props) => props.theme.collors.cor1};
    }
`
export const bordMod = styled.button`
    width:30%;
    background-color:transparent;
    border: none;
`
export const Menu  = styled.img`
    width:100%;
`
export const MenuPerf = styled.p`
    padding-left:6%;
    color:${(props) => props.theme.collors.cor2};
`
