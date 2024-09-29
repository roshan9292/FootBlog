import Image from "next/image"
export default function ImageCell ({value,name}){
  return(
    <div className="flex items-center gap-5">
    <Image
    src={value}
    width={0}
    height={0}
    sizes="100vw"
    style={{width:'3vh',height:'10%'}}
    alt={name}
    />
    <span className="text-m mr-5">{name}</span>
    </div>
  )
}