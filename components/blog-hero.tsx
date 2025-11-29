import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaHref?: string
}

export function BlogHero({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Read Latest Stories",
  ctaHref = "#posts",
}: BlogHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase mb-4 leading-tight text-balance">
          {title}
        </h1>
        <p className="text-white mb-8 text-lg">{subtitle}</p>
        <Link
          href={ctaHref}
          className="inline-flex font-mono items-center gap-2 bg-background text-foreground px-6 py-3 rounded-[8.2px] font-medium hover:bg-background/90 transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
