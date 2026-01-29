import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react'

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a className={active==="#"?"active":""} href="#" onClick={()=>{setActive("#")}}><IoHomeOutline /></a>
      <a className={active==="#about"?"active":""} href="#about" onClick={()=>{setActive("#about")}}><LuUserRound /></a>
      <a className={active==="#projects"?"active":""} href="#projects" onClick={()=>{setActive("#projects")}}><BiBook /></a>
      <a className={active==="#contact"?"active":""} href="#contact" onClick={()=>{setActive("#contact")}}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav