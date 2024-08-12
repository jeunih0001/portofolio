"use client"

import { useState } from "react"
import SubmitBtn from "./SubmitBtn"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import ImageUploader from "./ImageUploader"
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
  const [image,setImage] = useState<string>(tool.image ?? '')
  const [state,action] = useFormState(updateTool,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={tool.id} />
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" defaultValue={tool.name}/>
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Image</Label>
          <Input name="image" id="image" className="hidden" value={image} readOnly />
          <ImageUploader existingImage={tool.image ?? ''} setField={setImage}/> 
          <FormFieldError error={state.errors?.image}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save changes</SubmitBtn>
      </div>
    </form>
  )
}
