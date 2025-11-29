import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="font-mono text-6xl font-bold mb-4">404</h1>
        <h2 className="font-mono text-2xl tracking-wider uppercase mb-4">Post Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    </div>
  )
}
