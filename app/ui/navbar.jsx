'use client';

import { useState } from "react";
import Competitions from "./competitions";
export default   function Nav({allCompetitions}){
const [navigateComp,setNavigateComp]=useState(false);
function handleComp(){
  setNavigateComp(!navigateComp)
  }
  return (
    <nav className="">
      <div className="h-20 w-full bg-yellow-400 flex items-center justify-end uppercase ">
       <div className="mt-10" onClick={handleComp}>
        <span className=" font-mono md:text-lg text-sm cursor-pointer mr-5 md:mr-36">All Competition</span>
       </div>
      </div>
    <div className=" hidden md:block">
      <div className=
      { navigateComp ?
        "fixed left-0 px-3 top-0 w-[20%] h-[100%] bg-amber-300  ease-in duration-500"
        :"fixed left-[-100%] top-0 h-[100%] p-3 ease-in duration-700"}>
          {allCompetitions.map((competition)=>(
            
          <Competitions key={competition.id} emblem={competition.emblem} name={competition.name} code={competition.code}/>))}
      </div>
    </div>
    <div className="block md:hidden">
      <div className={
        navigateComp ?
        "fixed left-0 top-0 w-[20%] h-[100%] bg-amber-300  ease-in duration-500"
        :"fixed left-[-100%] top-0 w-[20%] h-[100%] ease-in duration-700"}>
          {allCompetitions.map((competition)=>(<Competitions key={competition.id} emblem={competition.emblem} name={competition.name} code={competition.code}/>))}
      </div>
    </div>
  
    </nav>
 )
}