import Image from "next/image"
export default function MatchTemplate({homeTeam,awayTeam,status}){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return(
   status === "SCHEDULED" || "TIMED" ? 
   <div className="flex-col  h-[5vh] md:gap-x-10 border-r-2 pr-3 w-[30vh] md:w-[30vh] md:text-[0.9rem]">
      <div className="flex gap-4 items-center md:w-[100vh]"><Image src={homeTeam.crest} height={20} width={20} alt={homeTeam.shortName} ></Image>
      <span className="w-auto">{homeTeam.shortName}</span>
      </div>
      <div className="flex gap-4 items-center"><Image src={awayTeam.crest} height={20} width={20} alt={awayTeam.shortName} ></Image>
      <span className="w-auto">{awayTeam.shortName}</span>
      </div>
   </div>:
   <div className="flex-col  h-[5vh] md:gap-x-10  pr-3 w-[30vh] md:w-[30vh] md:text-[0.9rem]">
    sd
  </div>
  )
}