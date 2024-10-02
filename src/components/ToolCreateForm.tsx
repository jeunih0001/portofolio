"use client"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { buttonVariants } from "./ui/button"
import FormFieldError from "./FormFieldError"
import { useFormState } from "react-dom"
import { Textarea } from "./ui/textarea"
import { createTool } from "@/actions/tool"
import { useToast } from "@/hooks/useToast"
import SubmitButton from "./SubmitButton"
import ImageUploader from "./ImageUploader"
import { useState } from "react"

export default function ToolCreateForm() {
  const [state,action] = useFormState(createTool,{})
  const [icon,setIcon] = useState<string>('')


  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-6 items-start">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" />
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="icon">Icon</Label>
          <ImageUploader setField={setIcon}/>
          <Input type="hidden" name="icon" id="icon" value={icon} readOnly/>
          <FormFieldError error={state.errors?.icon}/>
        </div>
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="icon">Description</Label>
          <Textarea name="description" id="description" />
          <FormFieldError error={state.errors?.description}/>
        </div>
      </div>
      <div>
        <SubmitButton>Save</SubmitButton>
      </div>
    </form>
  )
}
