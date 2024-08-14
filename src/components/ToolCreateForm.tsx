"use client"

import SubmitBtn from "./SubmitBtn"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { buttonVariants } from "./ui/button"
import FormFieldError from "./FormFieldError"
import { useFormState } from "react-dom"
import { createTool } from "@/lib/store"
import { useToast } from "@/lib/useToast"

export default function ToolCreateForm() {
  const [state,action] = useFormState(createTool,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <div className="grid sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input autoFocus name="name" id="name" />
          <FormFieldError error={state.errors?.name}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save</SubmitBtn>
      </div>
    </form>
  )
}
