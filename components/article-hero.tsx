import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2 } from "lucide-react"
import type { BlogPost } from "@/data/mock-blogs"

interface ArticleHeroProps {
  post: BlogPost
}

export function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-end">
      <Image src={post.heroImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="absolute top-20 left-4 z-10 md:pl-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Blog
        </Link>
      </div>

      <div className="relative z-10 w-full px-4 pb-8 md:pb-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase text-white mb-4 leading-tight text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 overflow-hidden">
                <Image
                  src={`${post.avatar || '/placeholder-avatar.png'}`}
                  alt={post.author}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-white">{post.author}</span>
            </div>
            <span>—</span>
            <span>{post.date}</span>
            <span>—</span>
            <div className="flex items-center gap-1">
              <Share2 className="w-3 h-3" />
              <span>{post.shares >= 1000 ? "<1K" : post.shares} shares</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
