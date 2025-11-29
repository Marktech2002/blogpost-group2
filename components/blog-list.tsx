import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/data/mock-blogs"

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  // Split posts into different sections
  const firstFourPosts = posts.slice(0, 4)
  const fifthPost = posts[4]
  const lastTwoPosts = posts.slice(5, 7)
  const remainingPosts = posts.slice(7)

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* First 4 posts in 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {firstFourPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} featured={index === 0} />
        ))}
      </div>

      {/* 5th post on left, last 2 posts stacked on right */}
      {fifthPost && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* 5th post */}
          <BlogCard post={fifthPost} />
          
          {/* Last 2 posts in flex column with compact layout */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {lastTwoPosts.map((post) => (
              <BlogCard key={post.id} post={post} compact />
            ))}
          </div>
        </div>
      )}

      {/* Remaining posts in 2-column grid */}
      {remainingPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {remainingPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}