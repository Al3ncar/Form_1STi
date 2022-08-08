import React,{useState} from "react"
import * as S from "./styled"

import Logo_1sti from "../img/1sti_logo.jpeg"
import Mod from "../mod/index"
import MenuImg from "../img/menu.jpg"

export default function F_index(){

    const [mod, setMod] = useState(false)
    const openMod = () => {setMod(true)}

    return(
        <>
            <S.Cont>
                <S.Box1sti>
                    <S.Log1sti src={Logo_1sti} alt="logo_FirstTi"/>
                </S.Box1sti>
                <S.CardMod onClick={()=>{openMod()}}>
                    <S.bordMod>
                        <S.Menu src={MenuImg} alt=""/>
                    </S.bordMod>
                    <S.MenuPerf>MENU</S.MenuPerf>
                </S.CardMod>
                {mod ? ( <Mod onClose={() => {setMod(false)}}/>):null}
                <S.SigNav>
                    <S.BoxList>
                        <S.LiSign> <S.LinkRout to="/">Sign Up </S.LinkRout></S.LiSign>
                       <S.LiSign><S.LinkRout to="/sing"> Sign In</S.LinkRout></S.LiSign> 
                    </S.BoxList>
                </S.SigNav>
            </S.Cont>
        </>
    )
}