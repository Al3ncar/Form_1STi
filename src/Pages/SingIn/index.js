import React from 'react'
import * as S from "./styled"
export default function App() {
  return (
    <S.Cont>

          <S.ContForm>
                <S.ContTitl> <h1>SignIn</h1> </S.ContTitl>
                <S.BoxForm>
                    <S.BoxFild >
                        <S.Lab >Usuário</S.Lab>
                        <S.Inp type="text" name="text"/>
                    </S.BoxFild>
                    <S.BoxFild >
                        <S.Lab>Senha</S.Lab>
                        <S.Inp type="password"/>
                    </S.BoxFild>
                    <S.BoxBtn>
                        <S.Btn>Entrar</S.Btn>
                    </S.BoxBtn>
                </S.BoxForm>
            </S.ContForm>
    </S.Cont>
  )
}
