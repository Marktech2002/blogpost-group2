import Link from "next/link"
import { Search } from "lucide-react"

const navItems = ["DESTINATIONS", "FOOD", "WELL BEING", "SPORT", "FAMILY", "LIFESTYLE"]

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-serif italic text-xl">
          <span className="font-light">Inspiration by</span> <span className="font-semibold">trazler</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/80 font-normal font-mono uppercase hover:text-white text-xs tracking-wider transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="#"
            className="hidden sm:block bg-foreground text-background px-5 py-2 text-xs font-bold rounded hover:bg-foreground/90 transition-colors"
          >
            GET YOUR 120$ CHRISTMAS GIFT
          </Link>
        </div>
      </div>
    </header>
  )
}
