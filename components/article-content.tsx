import Image from "next/image"
import type { BlogPost } from "@/data/mock-blogs"

interface ArticleContentProps {
  post: BlogPost
}

export function ArticleContent({ post }: ArticleContentProps) {
  const firstParagraphs = post.contents.split("\n\n")
  const secondParagraphs = post.content ? post.content.split("\n\n") : []

  // Parse quote for keynotes
  const quoteLines = post.quote.split("\n").filter((line) => line.trim() !== "")
  const isKeynotes = quoteLines[0]?.toLowerCase().includes("keynotes")
  const quoteTitle = isKeynotes ? quoteLines[0] : null
  const quotePoints = isKeynotes ? quoteLines.slice(1) : quoteLines

  return (
    <div className="prose prose-lg max-w-none">
      {firstParagraphs.map((paragraph, index) => (
        <p key={`first-${index}`} className="text-[#121416] leading-relaxed mb-6">
          {paragraph}
        </p>
      ))}

      {/* Quote Block / Keynotes */}
      <blockquote className="my-8 pl-6 border-l-4 border-accent-tan">
        <div className="font-mono font-normal text-sm md:text-base tracking-wider uppercase leading-relaxed text-[#121416]">
          {quoteTitle && (
            <p className="mb-4 font-bold">
              <span className="text-2xl text-accent-tan mr-1">&ldquo;</span>
              {quoteTitle}
            </p>
          )}
          <ul className="list-disc pl-5 space-y-2">
            {quotePoints.map((point, index) => (
              <li key={index}>{point.replace(/^[•-]\s*/, "")}</li>
            ))}
          </ul>
          {!quoteTitle && quotePoints.length === 0 && (
            <p>
              <span className="text-2xl text-accent-tan mr-1">&ldquo;</span>
              {post.quote}
            </p>
          )}
        </div>
      </blockquote>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="relative aspect-3/4 rounded-sm overflow-hidden">
          <Image src={post.image1 || "/placeholder.svg"} alt="Article image 1" fill className="object-cover" />
        </div>
        <div className="relative aspect-3/4 rounded-sm overflow-hidden">
          <Image src={post.image2 || "/placeholder.svg"} alt="Article image 2" fill className="object-cover" />
        </div>
      </div>

      {/* Second part of content */}
      {secondParagraphs.map((paragraph, index) => (
        <p key={`second-${index}`} className="text-[#121416] leading-relaxed mb-6">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
