import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/data/mock-blogs"
import { TagBadge } from "./tag-badge"

interface YouMayAlsoLikeProps {
  posts: BlogPost[]
  currentPostId: string
}

export function YouMayAlsoLike({ posts, currentPostId }: YouMayAlsoLikeProps) {
  const filteredPosts = posts.filter((p) => p.id !== currentPostId).slice(0, 3)

  return (
    <aside className="mt-16">
      <h3 className="font-mono text-sm tracking-wider uppercase mb-6">YOU MAY ALSO LIKE</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-sm overflow-hidden">
                <Image
                  src={post.heroImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  {post.categories.slice(0, 1).map((cat) => (
                    <TagBadge key={cat} tag={cat} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg leading-tight mb-2 group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <div className="w-5 h-5 rounded-full bg-muted overflow-hidden">
                    <Image
                      src={`/diverse-group-avatars.png?height=20&width=20&query=avatar ${post.author}`}
                      alt={post.author}
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <span className="text-xs font-semibold underline underline-offset-2 mt-3 inline-block">
                  View Post
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  )
}
