"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"



export default function BreadCrumbs() {
  const path = usePathname()
  const bcs = path.replace('/admin','').split('/').filter(bc => bc !== '')
  return (
    <div className="flex items-center gap-1">
      {bcs.map((bc,index) => 
        <Link href={`/${bc}`} key={index} className="font-medium capitalize text-d-accent tracking-wide hover:underline">{bc}</Link>
      )}
    </div>
  )
}
