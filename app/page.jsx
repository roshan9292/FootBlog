import Nav from "./ui/navbar";
import { getData } from "./lib/data";
import { DynamicText } from "./ui/textanimate";
export default async function Page() {
 const data = await getData();
 const allCompetitions = data.competitions;
  return (
    <div className="">
    <Nav allCompetitions={allCompetitions}/>
    <DynamicText/>
    </div>
  );
}


