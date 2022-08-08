import React,{ useState , useRef } from "react"
import * as S from "./styled"

import Perf from "../img/perf.png"
import Lock from "../img/lock.png"
import Logo_1sti from "../img/1sti_logo.jpeg"


export default function F_index(){

    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [erro, setErro] = useState(false);
    const [btn, setBtn] = useState(true);
    const [loading, setLoading] = useState(false)
    
    const InputEmail = useRef();
    const InputUsername = useRef();
    const InputPassword = useRef();

    const HandInp2 = () => {

        if(email.length > 0 && email.slice(-10) === "@gmail.com"){ 
            InputEmail.current.style="outline:solid 0.2vw green; color: green;" }
        else{ InputEmail.current.style="outline:solid 0.2vw red; color: red;" } 

        if(username.length >= 4 ){ InputUsername.current.style="outline:solid 0.2vw green; color: green;" ;  }
        else{ InputUsername.current.style="outline:solid 0.2vw red; color: red;" }

        if(password.length >= 8){ InputPassword.current.style="outline:solid 0.2vw green; color: green;" ;  }
        else{ InputPassword.current.style="outline:solid 0.2vw red; color: red;"}

        if(email.length > 0 & email.slice(-10) === "@gmail.com" & username.length >= 4 & password.length >= 8)
        {setLoading(true)}else{setLoading(false); setEmail(""); setUsername("") ; setPassword("");}
    }

    const Cancl = () => {setLoading(false); setEmail(""); setUsername("") ; setPassword("")
        InputEmail.current.style="outline:solid 0.2vw gray; color:black;" ;
        InputUsername.current.style="outline:solid 0.2vw gray; color:black;";
        InputPassword.current.style="outline:solid 0.2vw gray; color:black;" ;
    }

    const SeeEmail = (e) => {setEmail(e.target.value); setErro(false); }
    const SeeUser = (e) => {setUsername(e.target.value); username.length <= 4 && password.length <= 8 ?  setBtn(true) : setBtn(false)}
    const SeePass = (e) => {setPassword(e.target.value); username.length <= 4 && password.length <= 8 ?  setBtn(true) : setBtn(false)}

    const [seeKey,setSeeKey] = useState(false)
    const Look = ()=>{setSeeKey(prev => !prev)}

    return(
        <S.Cont>
            <S.Box1sti>
                <S.Log1sti src={Logo_1sti} alt="logo_FirstTi"/>
            </S.Box1sti>
            <S.ContForm>
                <S.ContTitl> <h1>Signup</h1> </S.ContTitl>
                <S.BoxForm>
                    <S.BoxFild  >
                        <S.Lab for="email">E-mail</S.Lab>
                        <S.Inp ref={InputEmail}
                            type="email" name="email" value={email}
                            onChange={SeeEmail} id="email" placeholder="@gmail.com"
                        />
                        <S.BoxPerfLock>
                            <S.Perf src={Perf} alt="perfil"/>
                        </S.BoxPerfLock>
                    </S.BoxFild>
                    <S.BoxFild >
                        <S.Lab >Usuário</S.Lab>
                        <S.Inp ref={InputUsername}
                            type="text" name="text" 
                            value={username} onChange={SeeUser}
                        />
                        <S.BoxPerfLock>
                            <S.Perf src={Perf} alt="perfil"/>
                        </S.BoxPerfLock>                    
                    </S.BoxFild>
                    <S.BoxFild >
                        <S.Lab>Senha</S.Lab>
                        <S.Inp ref={InputPassword}
                            type={seeKey? "text":"password"} name="password" 
                            value={password} onChange={SeePass} 
                        />
                        <S.BoxPerfLock onClick={()=>{Look()}}>
                            <S.Lock src={Lock} alt="tranca"/>
                        </S.BoxPerfLock>
                    </S.BoxFild>
                    <p>{erro}</p>
                    <S.BoxBtn>
                        {loading === true ?  
                        <S.ContCancel> 
                            <S.ConfirmLink to="/cong">Confirmar</S.ConfirmLink> 
                            <S.Cancel onClick={Cancl}>Cancelar</S.Cancel> 
                        </S.ContCancel> : <S.Btn onClick={HandInp2} disabled={btn}>Cadastro</S.Btn>}
                    </S.BoxBtn>
                </S.BoxForm>
            </S.ContForm>
        </S.Cont>
    )
}