import React from 'react';
import * as S from "./styled"

export default function ModHeader({id=`modal`, onClose=()=>{}}){
    const Hand = (event) => {if (event.target.id === id) onClose();};
    return(
        <S.ContModal id={id} onClick={Hand}>
            <S.CardModal>
                <S.NavMod >
                    <S.BtnMod onClick={onClose}>x</S.BtnMod>
                    <ul>
                        <S.AncMod>
                            <S.LinkMod to="/">Sing Up</S.LinkMod>
                        </S.AncMod>
                        <S.AncMod>
                            <S.LinkMod to="/sing">Sing In</S.LinkMod>
                        </S.AncMod>
                    </ul>
                </S.NavMod>
            </S.CardModal>
        </S.ContModal>
    )
}