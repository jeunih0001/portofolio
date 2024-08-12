import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FormState } from "./store"

interface Props {
  state: FormState
}

export function useToast({state}: Props) {
  useEffect(()=>{
    if (state.status == 'success') toast.success('Updated Successfully')
    if (state.status == 'error') toast.error(state.message ?? '')
  },[state])
}
