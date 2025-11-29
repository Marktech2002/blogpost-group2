import Image from "next/image"
import Link from "next/link"
import { TagBadge } from "./tag-badge"
import { Share2 } from "lucide-react"
import type { BlogPost } from "@/data/mock-blogs"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  compact?: boolean
}

export function BlogCard({ post, featured = false, compact = false }: BlogCardProps) {
  if (compact) {
    // Compact horizontal layout for posts 6-7
    return (
      <article className="group flex gap-4">
        <Link href={`/blog/${post.id}`} className="flex-shrink-0 w-2/5">
          <div className="relative overflow-hidden h-auto">
            <Image
              src={post.heroImage || "/placeholder.svg"}
              alt={post.title}
              width={300}
              height={317}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* <div className="absolute top-3 right-3 flex gap-2">
              {post.categories.map((cat) => (
                <TagBadge key={cat} tag={cat} />
              ))}
            </div> */}
          </div>
        </Link>

        <div className="flex-1 flex flex-col">
          <h3 className="font-mono text-lg font-semibold mb-2 leading-7">
            <Link
              href={`/blog/${post.id}`}
              className="hover:text-muted-foreground transition-colors"
            >
              {post.title}
            </Link>
          </h3>
          <div className="flex pb-4 pt-2">
           <p className="font-normal rounded-[68px] bg-[#F4F4F4] text-[#7C7C7C] text-[10px] px-3 py-1">Women</p>
            <p className="font-normal rounded-[68px] bg-[#F4F4F4] text-[#7C7C7C] text-[10px] px-3 py-1">Culture</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-muted overflow-hidden">
                <Image
                  src={`/diverse-group-avatars.png?height=20&width=20&query=avatar ${post.author}`}
                  alt={post.author}
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-normal font-mono text-[#121416]">
                {post.author}
              </span>
            </div>
            <span className="hidden sm:inline">.</span>
            <span>{post.date}</span>
            <span className="hidden sm:inline">.</span>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed mb-2 flex-1">
            {post.excerpt}
            <span>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block ml-2 text-xs text-black font-semibold underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                View Post
              </Link>
            </span>
          </p>

        </div>
      </article>
    )
  }

  // Default vertical layout
  return (
    <article className={`group ${featured ? "col-span-full md:col-span-1" : ""}`}>
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative overflow-hidden mb-4">
          <Image
            src={post.heroImage || "/placeholder.svg"}
            alt={post.title}
            width={featured ? 800 : 400}
            height={featured ? 300 : 150}
            className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {post.categories.map((cat) => (
              <TagBadge key={cat} tag={cat} />
            ))}
          </div>
        </div>
      </Link>

      <h3 className="font-mono text-lg font-semibold mb-3 leading-tight">
        <Link
          href={`/blog/${post.id}`}
          className="hover:text-muted-foreground transition-colors"
        >
          {post.title}
        </Link>
      </h3>

      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-muted overflow-hidden">
            <Image
              src={`/diverse-group-avatars.png?height=24&width=24&query=avatar ${post.author}`}
              alt={post.author}
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-normal font-mono text-[#121416]">
            {post.author}
          </span>
        </div>
        <span className="hidden sm:inline">—-</span>
        <span>{post.date}</span>
        <span className="hidden sm:inline">—-</span>
        <div className="flex items-center gap-1">
          <Share2 className="w-3 h-3" />
          <span>{post.shares >= 1000 ? "<1K" : post.shares} shares</span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {post.excerpt}
        <span>
          <Link
            href={`/blog/${post.id}`}
            className="inline text-sm ml-2 text-black font-semibold underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            View Post
          </Link>
        </span>
      </p>
    </article>
  )
}