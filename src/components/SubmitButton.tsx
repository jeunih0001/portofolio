import { Button, ButtonProps } from '@/components/ui/button'
import React, { PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'
import { BiLoader } from 'react-icons/bi'

interface Props extends PropsWithChildren {
  
}

export default function SubmitButton({children, disabled, ...props}: Props & ButtonProps) {
  
  const { pending } = useFormStatus()

  const loading = pending || disabled

  return (
    <Button disabled={loading} {...props}>
      {loading && <BiLoader className='animate-spin size-5'/>}
      {children}
    </Button>
  )
}
