'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-start gap-4">
      <div>
        <img src="/profile.jpg" className="h-15 rounded-lg" />
      </div>
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Mayank Singh
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Developer
        </TextEffect>
      </div>
    </header>
  )
}
