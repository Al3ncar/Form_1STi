import React, {useState, useEffect} from "react";
import * as S from "./styled"
import Loading from "./loading/index"
import Conc from "./img/concl.png"

export default function App(){

  const [msg,setMsg] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setMsg(true)
    },2000)
  },[msg])

  return (
    
    <S.Cont>
      { msg !== true ? <Loading/> :
        <S.Card>
            <S.BoxCong>
                <S.Cong src={Conc} alt="Concluido"/>
            </S.BoxCong>
            <S.ContParf>
                <p>Cadastro preenchido com sucesso!</p>
            </S.ContParf>
        </S.Card>
      }
    </S.Cont>

  )
}
