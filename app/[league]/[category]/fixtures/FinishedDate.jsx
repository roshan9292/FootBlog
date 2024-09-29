import Image from "next/image"

export  function FinishedDate({date}){
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let m=month[date.getMonth()]
  let dat = date.getDate()
  return(
    <div className="flex-col text-xs pl-2">
      <div>FT</div>
      <div className="flex">
        <span>{m}</span>
        <span>{dat}</span>
      </div>
    </div>
  )
}

export function Score({score}){
    return(
    <div className="flex-row">
      <div>{score.fullTime.home}</div>
      <div>{score.fullTime.away}</div>
    </div>
  )
}