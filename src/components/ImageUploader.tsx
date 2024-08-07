"use client"

import { ChangeEvent, Dispatch, SetStateAction, useState, useTransition } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import Image from "next/image"
import { uploadImage } from "@/lib/store"
import { Button } from "./ui/button"
import { FaXmark } from "react-icons/fa6"

interface Props {
  setField: Dispatch<SetStateAction<string>>
  existingImage?: string
}

export default function ImageUploader({ setField, existingImage }: Props) {
  const [preview, setPreview] = useState<string>(existingImage ?? '')
  const [uploading, startUpload] = useTransition()

  async function uploadLocalImage(file: File) {
    try {
      const formData = new FormData
      formData.set('file', file)
      const image = await uploadImage(formData)
      setPreview(image)
      setField(image)
    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      startUpload(() => {
        uploadLocalImage(file)
      })
    }

  }


  return (
    <div>
      <div>
        <Label htmlFor="uploader" hidden>Uploader</Label>
        {preview !== '' ?
          <div className="grid">
            <div className="col-start-1 row-start-1 bg-secondary rounded-lg">
              <Image
                width={0}
                height={0}
                alt="upload"
                className="w-auto h-auto max-h-64 mx-auto"
                src={preview}
              />
            </div>
            <div className="col-start-1 row-start-1 justify-self-end m-4">
              <Button onClick={()=>setPreview('')} type="button" variant={'destructive'} className="rounded-full">
                <FaXmark />
              </Button>
            </div>
          </div>
          :
          <Input disabled={uploading} type="file" accept="image/*" form="" name="uploader" id="uploader" onChange={handleChange} />
        }

      </div>
    </div>
  )
}
