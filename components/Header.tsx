import Link from "next/link";
export function Header(){
 return <header className="header"><div className="container nav">
  <Link className="brand" href="/">velvet<span>.</span></Link>
  <nav className="navlinks">
   <Link href="/browse">Browse</Link><Link href="/zimbabwe">Cities</Link><Link href="/safety">Safety</Link><Link href="/about">About</Link>
  </nav>
  <Link className="btn" href="/browse">Explore</Link>
 </div></header>
}
