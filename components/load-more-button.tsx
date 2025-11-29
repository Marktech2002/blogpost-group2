"use client"

import { Button } from "@/components/ui/button"

export function LoadMoreButton() {
  return (
    <div className="flex justify-center mt-12">
      <Button
        variant="outline"
        className="px-8 py-2 border md:font-normal md:text-[18px] font-mono border-[#EBEEF2] hover:bg-white transition-colors bg-[#f4f4f4] cursor"
      >
        Load More
      </Button>
    </div>
  )
}
