"use client"

import { Seo } from "@prisma/client"
import SubmitBtn from "./SubmitBtn"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { buttonVariants } from "./ui/button"
import { useFormState } from "react-dom"
import { updateSeo } from "@/lib/update"
import { useEffect, useState } from "react"
import FormFieldError from "./FormFieldError"
import toast from "react-hot-toast"
import ImageUploader from "./ImageUploader"

interface Props {
  seo: Seo
}

export default function SeoCreateForm({seo}: Props) {

  const [state,action] = useFormState(updateSeo,{})

  const [image,setImage] = useState<string>('')
  const [favicon,setFavicon] = useState<string>('')

  useEffect(()=>{
    if (state.status == 'success') toast.success('Updated Successfully')
    if (state.status == 'error') toast.error(state.message ?? '')
  },[state])

  return (
    <form action={action} className="space-y-8">
       <input type="hidden" name="id" value={seo.id} />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input name="title" id="title" defaultValue={seo.title}/>
          <FormFieldError error={state.errors?.title}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input name="twitter" id="twitter" defaultValue={seo.twitter}/>
          <FormFieldError error={state.errors?.twitter}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="linkedin">Linkedin</Label>
          <Input name="linkedin" id="linkedin" defaultValue={seo.linkedin}/>
          <FormFieldError error={state.errors?.linkedin}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="github">github</Label>
          <Input name="github" id="github" defaultValue={seo.github}/>
          <FormFieldError error={state.errors?.github}/>
        </div>
        <div className="grid gap-2 col-span-full">
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" id="description" defaultValue={seo.description}/>
          <FormFieldError error={state.errors?.description}/>
        </div>
        <div className="grid gap-2 col-span-full">
          <Label htmlFor="Image">Image</Label>
          <Input className="hidden" name="image" value={image} readOnly />
          <ImageUploader setField={setImage} existingImage={seo.image}/>
          <FormFieldError error={state.errors?.image}/>
        </div>
        <div className="grid gap-2 col-span-full">
          <Label htmlFor="favicon">favicon</Label>
          <Input className="hidden" name="favicon" value={favicon} readOnly />
          <ImageUploader setField={setFavicon} existingImage={seo.favicon}/>
          <FormFieldError error={state.errors?.favicon}/>
        </div>
        <div className="grid gap-2 col-span-full">
          <Label htmlFor="tags">tags</Label>
          <Input name="tags" id="tags" defaultValue={seo.tags}/>
          <FormFieldError error={state.errors?.tags}/>
        </div>
      </div>
      <div>
        <SubmitBtn className={buttonVariants({})}>Save</SubmitBtn>
      </div>
    </form>
  )
}
