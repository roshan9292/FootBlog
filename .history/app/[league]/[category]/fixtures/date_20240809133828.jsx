
export default function Schedule(date){
  const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let day = weekday[date.date.getDay()]
  let m=month[date.date.getMonth()]
  let dat = date.date.getDate();
  let hours = date.date.getHours();
  let min=date.date.getMinutes();
  return(
    <div className="text-xs md:text-[0.76rem]">
    <div className="flex items-center text-center">
      <div>{day}</div>,
      <div>{m}</div>
      <div className="ml-1">{dat}</div>
    </div>
    <div>{hours}:{min}</div>
    </div>
  )
}