import { BasicTable } from "./standings/standingTable";
import { standings } from "@/app/lib/data";
import Fixture from "./fixtures/fixtures";
import { fixturesAndStats } from "@/app/lib/data";
import Stats from "./stats/stats";
export default async function Page(params,searchParams){
  const league = params.params.league
  const category = params.params.category;
  const season = params.searchParams.season;
  const Data = await standings(league,season);
  const seasonStanding = Data.standings
  let tableData = seasonStanding[0].table

  let data = await fixturesAndStats(league,season,category);
  return(
    <div>
      {category == "standings"&& 
      <div >
      <BasicTable  tableData={tableData}/>
      </div>
      }
      {category == "scorers" && <Stats statData={data}/>}
      {category == "matches" && <Fixture data={data}/>}
    </div>
  )
}