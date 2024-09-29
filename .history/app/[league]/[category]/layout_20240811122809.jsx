import Navigator from "@/app/ui/navigator";
import LeagueNav from "@/app/ui/leagueNav";
import { leagueData } from "@/app/lib/data";
export default async function Layout({children,params,searchParams}){
  const league = params.league;
  const data = await leagueData(league);
  let seasons=data.seasons;
  let year="2024";
  const category = params.category;
  console.log(searchParams)
  return(
    <div>
    <LeagueNav data={data} totalSeason={seasons} year={year} league={league} category={category}/>
    
    <Navigator league={league} year={year}/>
    <div>
      <div>{children}</div>
    </div>
    </div>
  )
}