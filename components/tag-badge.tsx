interface TagBadgeProps {
  tag: string
}

export function TagBadge({ tag }: TagBadgeProps) {
  return <span className="inline-block bg-[#00000066] text-white text-[16px] px-3 py-1">{tag}</span>
}
