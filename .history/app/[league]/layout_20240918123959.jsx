import LeagueNav from "../ui/leagueNav";
import Navigator from "../ui/navigator";
import { leagueData } from "../lib/data";
export default async function(params,children,searchParams){
  const league = params.params.league;
  const data = await leagueData(league);
  let seasons=data.seasons;
  let year="2024";
  return(
    <div>
      <LeagueNav data={data} totalSeason={seasons} year={year} league={league} />
    
      <Navigator league={league} year={year} />
      <div>
        <div>{children}</div>
      </div>
    </div>
  )}