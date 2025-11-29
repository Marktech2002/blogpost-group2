import { Facebook, Twitter } from "lucide-react"

interface SocialShareProps {
  shares: number
}

export function SocialShare({ shares }: SocialShareProps) {
  const displayShares = shares >= 1000 ? "694" : shares

  return (
    <div className="flex flex-wrap items-center justify-center py-6 border-0 border-b border-border my-8 gap-4">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-24">

        {/* Share Count */}
        <div className="text-sm text-muted-foreground whitespace-nowrap">
          {displayShares} Shares
        </div>

        {/* Facebook */}
        <button className="flex items-center gap-2 text-sm text-[#3B5998] hover:text-foreground transition-colors group">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M25.9259 12.963C25.9259 5.80741 20.1185 0 12.963 0C5.80741 0 0 5.80741 0 12.963C0 19.237 4.45926 24.4611 10.3704 25.6667V16.8519H7.77778V12.963H10.3704V9.72222C10.3704 7.22037 12.4056 5.18518 14.9074 5.18518H18.1481V9.07407H15.5556C14.8426 9.07407 14.2593 9.65741 14.2593 10.3704V12.963H18.1481V16.8519H14.2593V25.8611C20.8056 25.213 25.9259 19.6907 25.9259 12.963Z" fill="#3B5998" />
          </svg>
          <span className="font-medium">SHARE {displayShares}</span>
        </button>

        {/* Twitter / X */}
        <button className="flex items-center gap-2 text-sm text-[#00ACED] hover:text-[#1DA1F2]/80 transition-colors">
          <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M27.1185 2.59259C26.1204 3.0463 25.0444 3.34444 23.9296 3.48704C25.0704 2.8 25.9519 1.71111 26.3667 0.401852C25.2907 1.05 24.0981 1.5037 22.8407 1.76296C21.8167 0.648148 20.3778 0 18.7444 0C15.6981 0 13.2093 2.48889 13.2093 5.56111C13.2093 6.00185 13.2611 6.42963 13.3519 6.83148C8.73704 6.59815 4.62778 4.38148 1.89259 1.02407C1.41296 1.84074 1.14074 2.8 1.14074 3.81111C1.14074 5.74259 2.11296 7.4537 3.61667 8.42592C2.6963 8.42592 1.84074 8.16667 1.08889 7.77778V7.81667C1.08889 10.513 3.00741 12.7685 5.54815 13.2741C4.73242 13.4973 3.87605 13.5284 3.0463 13.3648C3.39838 14.4699 4.08792 15.4368 5.01798 16.1297C5.94805 16.8226 7.07188 17.2066 8.23148 17.2278C6.26582 18.7839 3.82925 19.625 1.32222 19.613C0.881481 19.613 0.440741 19.587 0 19.5352C2.46296 21.1167 5.39259 22.037 8.52963 22.037C18.7444 22.037 24.3574 13.5593 24.3574 6.20926C24.3574 5.96296 24.3574 5.72963 24.3444 5.48333C25.4333 4.70555 26.3667 3.72037 27.1185 2.59259Z" fill="#00ACED" />
          </svg>
          <span className="font-medium">TWEET</span>
        </button>

        {/* Pinterest */}
        <button className="flex items-center gap-2 text-sm text-[#E60023] hover:text-[#E60023]/80 transition-colors">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
          <span className="font-medium">{displayShares}</span>
        </button>
      </div>
    </div>
  )
}
