'use client';
import { useState } from "react"
import { useRouter } from "next/navigation";
import { usePathname ,useSearchParams} from "next/navigation";
export default function Filter({totalSeason,league,category}){
    const allSeason = [];
    const dates = totalSeason;
    const[categ,setCateg]=useState(category)
    if(dates && dates.length>0){
    dates.map((date)=>{
    allSeason.push(new Date (date.startDate))}).filter(Array.isArray);
    
  }
    const filteredSeason = allSeason.slice(0,5)
    const [season,setSeason] =useState(allSeason[0]);
    const route = useRouter();
    function handleFilter(value){
      setCateg(category)
      route.push(`/${league}/${categ}?season=${value}`);
      setSeason(value)
    }
  return(<div>
    <select value={season} onChange={e=> handleFilter(e.target.value)} className="h-7 border-gray-950 border rounded"  type="select">
    {filteredSeason.map(date=>(<option value={date.getFullYear()}>{date.getFullYear()}</option>))}
    </select>
    </div>
  )
}