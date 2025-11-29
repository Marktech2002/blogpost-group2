import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"
import { DatePill } from "@/components/date-pill"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { LoadMoreButton } from "@/components/load-more-button"
import { mockBlogs } from "@/data/mock-blogs"

export default function HomePage() {
  return (
    <>
      <BlogHero
        title="COMMUNITY STORIES & LIFESTYLE HIGHLIGHTS"
        subtitle="Original stories curated by our group members"
        backgroundImage="/lagos-city-skyline-modern-buildings.png"
        ctaText="Read Latest Stories"
        ctaHref="#posts"
      />

      <section id="posts" className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Date Pill */}
          <div className="flex justify-end mb-8">
            <DatePill date="November 25, 2025" />
          </div>

          {/* Blog Listing */}
          <BlogList posts={mockBlogs} />

          {/* Load More */}
          <LoadMoreButton />
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}
