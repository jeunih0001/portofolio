"use client"

import { updateAbout } from "@/lib/update"
import { About } from "@prisma/client"
import { useFormState } from "react-dom"
import SubmitBtn from "./SubmitBtn"
import { buttonVariants } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "@/lib/useToast"
import FormFieldError from "./FormFieldError"

interface Props{
  about: About
}

export default function AboutForm({about}: Props) {
  const [state,action] = useFormState(updateAbout,{})

  useToast({state})

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={about.id} />
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input name="title" id="title" defaultValue={about.title}/>
          <FormFieldError error={state.errors?.title}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea rows={4} name="description" id="description" defaultValue={about.description}/>
          <FormFieldError error={state.errors?.description}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save Changes</SubmitBtn>
      </div>
    </form>
  )
}
