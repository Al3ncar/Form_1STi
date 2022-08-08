import React,{useState} from "react"

import { BrowserRouter as Router} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobStyled from "./styled.js"
import Header from "./components/header/header"
import Rout from "./components/Router/index"
import Themes from "./img/btnMode.webp"
import{darkTheme, lightTheme} from "./components/theme/index"

import styled from "styled-components"
  const Cont = styled.div`
    width: 3%;
    position:absolute;
    right:3%;
    top:1%;
  `
  const BtnCont = styled.button`
    width:100%;
    position: relative;
    border-radius: 50%;
    background-color: ${(props)  => props.theme.collors.cor3};
    border: none;
    &:hover{transform: scale(1.1);}
  `
  const Log = styled.img`
    width:100%;
  `  

export default function App({children}){
  const [theme, setTheme] = useState(lightTheme)
  const trocar =()=>{setTheme(theme === lightTheme? darkTheme : lightTheme)}

  return(
    <Router>
      <ThemeProvider theme={theme}>
        <GlobStyled/>
        <Header/>
        <Cont>
          <BtnCont onClick={()=>{trocar()}}>
            <Log src={Themes} alt=""/>
          </BtnCont>
        </Cont>
        <Rout/>
      </ThemeProvider>
    </Router>
  )
}