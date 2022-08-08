import styled, { keyframes } from "styled-components";

export const Cont = styled.section`
    width:100%;
    display:grid;
    place-items:center;
    padding-top:2%;
`
export const Load = styled.div`
    width:3%;
    padding:0.5% 0;
    border:solid 1vw darkblue;
    border-top-color:transparent;
    border-radius:50%;
    animation: Rotate 1s linear infinite;
    @keyframes Rotate {
        from{
            transform: rotate(0)
        }
        to{
            transform: rotate(360deg)
        }
    }
`
