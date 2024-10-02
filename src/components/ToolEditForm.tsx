"use client"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { buttonVariants } from "./ui/button"
import FormFieldError from "./FormFieldError"
import { useFormState } from "react-dom"
import { Tool } from "@prisma/client"
import { useToast } from "@/hooks/useToast"
import { updateTool } from "@/actions/tool"
import SubmitButton from "./SubmitButton"
import ImageUploader from "./ImageUploader"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

interface Props{
  tool: Tool
}

export default function ToolEditForm({tool}: Props) {

  const [icon,setIcon] = useState<string>(tool.icon ?? '')
  const [state,action] = useFormState(updateTool,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={tool.id} />
      <div className="grid sm:grid-cols-2 gap-6 items-start">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" defaultValue={tool.name}/>
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="icon">Icon</Label>
          <ImageUploader existingImage={tool.icon ?? ''} setField={setIcon}/>
          <Input type="hidden" name="icon" id="icon" value={icon} readOnly/>
          <FormFieldError error={state.errors?.icon}/>
        </div>
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="icon">Description</Label>
          <Textarea name="description" id="description" defaultValue={tool.description ?? ''}/>
          <FormFieldError error={state.errors?.description}/>
        </div>
      </div>
      <div>
        <SubmitButton className={buttonVariants({})}>Save changes</SubmitButton>
      </div>
    </form>
  )
}
