import React from 'react'

export default function Spinner({className}: {className: string}) {
  return (
    <span className={`rounded-full inline-block border-4 border-l-transparent animate-spin ${className}`}></span>
  )
}
