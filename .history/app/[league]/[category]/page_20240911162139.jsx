import BasicTable from "./ui/standings/standingTable";
import { standings } from "@/app/lib/data";
import Fixture from "./ui/fixtures/fixtures";
import { fixturesAndStats } from "@/app/lib/data";
import Stats from "./ui/stats/stats";
export default async function Page(params,searchParams){
  const league = params.params.league
  const category = params.params.category;
  const season = params.searchParams.season;
  const Data = await standings(league,season);
  const seasonStanding = Data.standings
  let tableData = seasonStanding[0].table

  let data = await fixturesAndStats(league,season,category);
  console.log(data.scorers);
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