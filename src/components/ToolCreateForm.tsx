"use client"

import { useState } from "react"
import SubmitBtn from "./SubmitBtn"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import ImageUploader from "./ImageUploader"
import { buttonVariants } from "./ui/button"
import FormFieldError from "./FormFieldError"
import { useFormState } from "react-dom"
import { createTool } from "@/lib/store"
import { useToast } from "@/lib/useToast"

export default function ToolCreateForm() {
  const [image,setImage] = useState<string>('')
  const [state,action] = useFormState(createTool,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" />
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Image</Label>
          <Input name="image" id="image" className="hidden" value={image} readOnly />
          <ImageUploader setField={setImage}/> 
          <FormFieldError error={state.errors?.image}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save</SubmitBtn>
      </div>
    </form>
  )
}
