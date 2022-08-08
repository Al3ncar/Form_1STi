import styled from "styled-components"
import {Link} from "react-router-dom"

export const ContModal = styled.section`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, .5);
    position:absolute;
    top:0;
    left:0;
    z-index:3;
`
export const CardModal = styled.div`
    width:40%;
    padding:2%;
    background:${(props)=>props.theme.collors.cor2};
    border-radius: 0 0 2vw;
`
export const BtnMod = styled.button`
    padding:  0.5% 5%;
    border-radius: 50%;
    font-size: 5vw;
    color:${(props)=>props.theme.collors.cor1};
    border: none;
    background-color: transparent;
    cursor: pointer;
    position:relative;
    left:85%;
`

export const NavMod = styled.nav`
    width: 100%;
`
export const AncMod = styled.li`
    width:100%;
    font-size: 3vw;
    margin:7% 0 ;
    list-style: none;
    text-align:center;

`
export const LinkMod = styled(Link)`
    width:100%;
    padding: 2% 32%;
    height: 100%;
    text-align:center;
    margin:3%;
    color: ${(props)=>props.theme.collors.cor2};
    background-color: ${(props)=>props.theme.collors.cor1};
    text-decoration: none;
    font-weight:bolder;
    &:hover{
        
    }
`
