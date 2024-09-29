"use client"
import Image from "next/image"
import Link from "next/link"
export default function Competitions({emblem,name,code}){

  return (
  <>
  <div className="hidden md:block">
    <Link href={`/${code}/standings/?season=2024`}>
     <Image className="my-5  px-3 py-1 shadow-sm hover:shadow-lg rounded"
    src={emblem}
    width={0}
    height={0}
     alt={name}
     sizes="100vw"
     style={{width:"80px",height:"auto",float:'left'}}
     />
     </Link>
  </div>
  <div className="block md:hidden w-full">
    <Link href={`${code}/standings/?season=2024`}>
     <Image className="my-5  px-3 py-1 shadow-sm hover:shadow-lg rounded float-left"
    src={emblem}
    width={0}
    height={0}
     alt={name}
     sizes="100vw"
     style={{width:"50%",height:"auto"}}
     />
     </Link>
  </div>
  </>
  )
}