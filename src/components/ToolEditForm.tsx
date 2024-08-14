"use client"

import SubmitBtn from "./SubmitBtn"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { buttonVariants } from "./ui/button"
import FormFieldError from "./FormFieldError"
import { useFormState } from "react-dom"
import { useToast } from "@/lib/useToast"
import { Tool } from "@prisma/client"
import { updateTool } from "@/lib/update"

interface Props{
  tool: Tool
}

export default function ToolEditForm({tool}: Props) {
  const [state,action] = useFormState(updateTool,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={tool.id} />
      <div className="grid sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" defaultValue={tool.name}/>
          <FormFieldError error={state.errors?.name}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save changes</SubmitBtn>
      </div>
    </form>
  )
}
