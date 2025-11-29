"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function NewsletterSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, consent })
  }

  return (
    <section className="py-12 px-4 border-t border-border">
      <div className="container md:pl-80 max-w-7xl">
        <h2 className="font-mono text-sm md:text-[28px] font-normal tracking-wider uppercase mb-2">SIGN UP FOR OUR NEWSLETTERS</h2>
        <p className="text-muted-foreground md:text-[18px] text-sm mb-6">Get notified of the best deals on our WordPress themes.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-surface border-border rounded-sm"
              aria-label="Your name"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-surface border-border rounded-sm"
              aria-label="Your email"
            />
            <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 px-8 rounded-sm">
              SUBSCRIBE
            </Button>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
              By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the
              storage of the data submitted through this form.
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}
