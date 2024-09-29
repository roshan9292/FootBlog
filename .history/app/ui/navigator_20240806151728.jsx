import Link from "next/link";

export default function Navigator({category,league,year}){
  return(
    <div className="flex gap-16 justify-center bg-amber-300 mt-[2vh] pt-[2vh] pb-[1vh]">
      <Link href={"/"}><span>Home</span></Link>
      <Link href={`/${league}/standings/?season=${year}`}><span>Standings</span></Link>
      <Link href={`/${league}/matches?season=${year}`}><span>Fixtures</span></Link>
      <Link href={`/${league}/scorers?season=${year}`}><span>Stats</span></Link>
    </div>
  )
}