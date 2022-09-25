import React from 'react'
import{Routes,Route}from "react-router-dom"
import Main from "../main/mains/F_index"
import Sing from "../../Pages/SingIn/index"
import Cong from "../../Pages/Conclud/index"

export default function index() {
  return (
    <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/sing" element={<Sing/>}/>
        <Route path="/cong" element={<Cong/>}/>
    </Routes>
  )
}
