import Spinner from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

type ActionType = 'create' | 'read' | 'update' | 'delete'

export default function SubmitButton({message , action = 'create'}: {message: string , action?: ActionType}) {
  const { pending } = useFormStatus()

  
  return (
    <Button 
      variant={action === 'delete' ? 'destructive' :
        action === 'update' ? 'outline': 
        'default'
    } disabled={pending} type='submit' size={'sm'}>
      {pending &&
        <Spinner className='size-3 mr-1' />
      }
      <span className='capitalize'>
        {message}
      </span>
      
    </Button>
  )
}
