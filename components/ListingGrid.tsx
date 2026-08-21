import Link from "next/link";
import { listings } from "@/data/listings";
export function ListingGrid({limit}:{limit?:number}){
 const data=limit?listings.slice(0,limit):listings;
 return <div className="grid">{data.map(x=><Link href={`/listing/${x.slug}`} className="card" key={x.slug}>
   <div className="cardImg" style={{backgroundImage:`linear-gradient(180deg,transparent 65%,rgba(0,0,0,.35)),url("${x.img}")`}}>
    <span className="verified">✓ {x.tag}</span>
   </div>
   <div className="cardBody"><div className="cardTitle"><span>{x.name}</span><span>18+</span></div><div className="meta">{x.city} · Profile preview</div></div>
 </Link>)}</div>
}
