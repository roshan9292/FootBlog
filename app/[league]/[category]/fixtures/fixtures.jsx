import { fixtureObject } from "@/app/lib/data"
import Schedule from "./schedule";
import { FinishedDate} from "./FinishedDate";
import Image from "next/image";
import clsx from "clsx";


export default function Fixture({data}){
let fixtures =  data.matches;
let matchdays =  fixtureObject(fixtures);
  return(
    <div>
      <div className="flex-row mt-[10%] border border-gray-500 text-center md:w-[80%] w-[100%] md:ml-[15vh]">
        {matchdays.map(match=>(<div ><div key={match.matchday}>
          Gameweek {match.matchday}
          <hr className="border-gray-500"/>
          </div>
          <div className="mt-5 mb-10 grid grid-cols-2 gap-6 pl-[5%] pr-[%]">
            {match.games.map((games)=><div className="flex items-center text-sm ">
            {games.status === "TIMED" &&
            <div className="flex">
             <div className="flex-col  h-[5vh] md:gap-x-10 border-r-2 pr-3 w-[30vh] md:w-[30vh] md:text-[0.9rem]">
              <div className="flex gap-4 items-center md:w-[100vh]"><Image src={games.homeTeam.crest} height={20} width={20} alt={games.homeTeam.shortName} ></Image>
                <span className="w-auto">{games.homeTeam.shortName}</span>
              </div>
             <div className="flex gap-4 items-center"><Image src={games.awayTeam.crest} height={20} width={20} alt={games.awayTeam.shortName} ></Image>
                <span className="w-auto">{games.awayTeam.shortName}</span>
             </div>
             </div>
             <div>
              <Schedule date={new Date(games.utcDate) } status={games.status} />
             </div>
             </div>}

            {games.status === "SCHEDULED" &&
            <div className="flex">
            <div className="flex-col  h-[5vh] md:gap-x-10 border-r-2 pr-3 w-[30vh] md:w-[30vh] md:text-[0.9rem]">
             <div className="flex gap-4 items-center md:w-[100vh]"><Image src={games.homeTeam.crest} height={20} width={20} alt={games.homeTeam.shortName} ></Image>
               <span className="w-auto">{games.homeTeam.shortName}</span>
             </div>
            <div className="flex gap-4 items-center"><Image src={games.awayTeam.crest} height={20} width={20} alt={games.awayTeam.shortName} ></Image>
               <span className="w-auto">{games.awayTeam.shortName}</span>
            </div>
            </div>
            <div>
             <Schedule date={new Date(games.utcDate) } status={games.status} />
            </div>
            </div>}

            {games.status == "FINISHED" && 
            <div className="flex">
              <div className="flex-col  h-[5vh] md:gap-x-10 border-r-2 pr-3 w-[30vh] md:w-[30vh] md:text-[0.9rem]">
                <div className={clsx("flex gap-4 items-center md:w-[100vh]",{"text-gray-500":games.score.winner==="AWAY_TEAM"})}><Image src={games.homeTeam.crest} height={20} width={20} alt={games.homeTeam.shortName} ></Image>
                  <span className="w-auto">{games.homeTeam.shortName}</span>
                  <span >{games.score.fullTime.home}</span>
               </div>
               <div className={clsx("flex gap-4 items-center md:w-[100vh]",{"text-gray-500":games.score.winner==="HOME_TEAM"})}><Image src={games.awayTeam.crest} height={20} width={20} alt={games.awayTeam.shortName} ></Image>
                  <span className="w-auto">{games.awayTeam.shortName}</span>
                  <span>{games.score.fullTime.away}</span>
                </div>
              </div>
              <div>
                <FinishedDate date={new Date(games.utcDate) } />
              </div>
            </div>}
            </div>)}
          </div>
          <hr/>
          </div>))}
      </div>
    </div>
  )
}