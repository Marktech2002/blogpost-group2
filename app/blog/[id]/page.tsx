import { notFound } from "next/navigation"
import { ArticleHero } from "@/components/article-hero"
import { ArticleContent } from "@/components/article-content"
import { DatePill } from "@/components/date-pill"
import { SocialShare } from "@/components/social-share"
import { YouMayAlsoLike } from "@/components/you-may-also-like"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { mockBlogs } from "@/data/mock-blogs"
import Image from "next/image"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return mockBlogs.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = mockBlogs.find((p) => p.id === id)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Inspiration by Trazler`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = mockBlogs.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ArticleHero post={post} />

      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Main Content */}
          <div>
            {/* Author & ID Line */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-border gap-4">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="">
               <Image
                src={`${post.avatar || '/placeholder-avatar.png'}`}
                alt={post.author}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full object-cover"
              />
                </span>
                <span className="font-normal md:text-[32px]">{post.author}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground md:text-[32px]">{post.idNumber}</span>
              </div>
              <div className="ml-auto"><DatePill date="November 25, 2025" /></div>
            </div>

            <ArticleContent post={post} />
            <SocialShare shares={post.shares} />
          </div>
        </div>
      </article>

      <div className="container mx-auto max-w-6xl px-4 mb-12">
        <YouMayAlsoLike posts={mockBlogs} currentPostId={post.id} />
      </div>

      <NewsletterSignup />
    </>
  )
}
