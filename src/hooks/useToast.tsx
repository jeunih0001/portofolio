import { ActionState } from "@/actions/global"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface Props {
  state: ActionState
}

export function useToast({state}: Props) {
  useEffect(()=>{
    if (!state?.message) return
    if (state.ok) toast.success(state.message) 
    else toast.error(state.message)
  },[state])
}
