"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface Props {
  label: string,
  icon?: React.ReactNode,
  href: string,
}

export default function SidebarLink({href,icon,label}: Props) {
  const path = usePathname()
  const active = path === '/admin' || href === '/admin' ? path === href : path.startsWith(href)
  return (
    <Link className={`inline-flex items-center gap-2 py-3 px-4 transition-colors capitalize text-sm tracking-wide ${active ? 'bg-d-primary-foreground/20' : 'hover:bg-d-primary-foreground/20'}`} href={href}>
      {icon}
      {label}
    </Link>
  )
}
