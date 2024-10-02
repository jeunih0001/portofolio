"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Label } from "./ui/label"
import Image from "next/image"
import { Button, buttonVariants } from "./ui/button"
import { FaXmark } from "react-icons/fa6"
import { CldUploadButton, CloudinaryUploadWidgetInfo } from 'next-cloudinary';

interface Props {
  setField: Dispatch<SetStateAction<string>>
  existingImage?: string
}

export default function ImageUploader({ setField, existingImage }: Props) {
  const [image, setImage] = useState<string>(existingImage ?? '')

  useEffect(() => {
    setField(image)
  }, [image, setField])



  return (
    <div>
      <Label htmlFor="uploader" hidden>Uploader</Label>
      {image !== '' ?
        <div className="grid">
          <div className="col-start-1 row-start-1 bg-secondary rounded-lg">
            <Image
              width={0}
              height={0}
              alt="upload"
              className="w-auto h-auto max-h-64 mx-auto"
              src={image}
            />
          </div>
          <div className="col-start-1 row-start-1 justify-self-end m-4">
            <Button onClick={() => setImage('')} type="button" variant={'destructive'} className="rounded-full">
              <FaXmark />
            </Button>
          </div>
        </div>
        :
        <div className="h-24 grid place-content-center bg-secondary rounded-lg shadow">
          <CldUploadButton className={buttonVariants({})} onSuccess={(result) => setImage(() => {
            const info = result.info as CloudinaryUploadWidgetInfo
            return info.secure_url
          })} uploadPreset="portofolio" />
        </div>
      }

    </div>
  )
}
