import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

interface Props extends PropsWithChildren{
  className?: string
  disabled?: boolean
}

export default function SubmitBtn({children,className,disabled}:Props) {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending || disabled} type="submit" className={className}>
      {children}
    </button>
  )
}
