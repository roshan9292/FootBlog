'use client';
import { useTypewriter } from "react-simple-typewriter";

export function DynamicText(){
  const[text]=useTypewriter({
    words:['Competitions','Fixtures','Standings'],
    loop:{},
  });
  
  return(<h1 className="md:text-4xl text-2xl ml-[10vh] md:mt-[25vh] mt-[20vh]">
    <span className="text-xl md:text-3xl">Browse for </span>
    <span className="text-orange-600">
       {text}
    </span>
  </h1>
  );
}