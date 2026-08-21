import Link from "next/link";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ListingGrid} from "@/components/ListingGrid";
export default function Home(){
 return <><Header/><main>
  <section className="hero"><div className="container heroGrid">
   <div><div className="kicker">Premium adults-only directory</div><h1>Discover with discretion.</h1>
   <p className="lead">A polished 18+ directory starter with verified-style profiles, city discovery, privacy-first presentation and a mandatory first-visit age confirmation.</p>
   <div className="heroActions"><Link className="btn" href="/browse">Browse profiles</Link><Link className="btn secondary" href="/safety">Safety first</Link></div></div>
   <div className="heroVisual"><div className="heroBadge"><strong>Private by design</strong><div className="meta">Elegant · discreet · adults only</div></div></div>
  </div></section>
  <section className="section"><div className="container"><div className="sectionHead"><div><h2>Featured profiles</h2><p>Fictional demo listings for the starter.</p></div><Link href="/browse">View all →</Link></div><ListingGrid limit={4}/></div></section>
  <section className="section"><div className="container"><div className="sectionHead"><div><h2>Explore by city</h2><p>Location-first browsing.</p></div></div><div className="cities">{["Harare","Bulawayo","Victoria Falls","Mutare","Gweru"].map(c=><Link className="city" href={`/zimbabwe/${c.toLowerCase().replaceAll(" ","-")}`} key={c}>{c}<div className="meta">Browse profiles →</div></Link>)}</div></div></section>
 </main><Footer/></>
}
