import Filter from "./filterLeague";
import Image from "next/image";
export default function LeagueNav({data,totalSeason,year,league,category}){
  
  
  return(
    <div className="">
     <div className="flex gap-[50%] mt-[5vh] ml-[25%] items-center ">
        <Image
        src={data.emblem}
        height={0}
        width={0}
        sizes="100vw"
        alt={data.name}
        style={{width:"75px",height:"auto"}}
        />
        <Filter  category={category} totalSeason={totalSeason} year={year} league={league}/>
        </div>
    </div>
    )
}