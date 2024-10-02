import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FaPencil } from "react-icons/fa6";
import Image from "next/image";
import DeleteRecordModal from "@/components/DeleteRecordModal";
import { BiTrash } from "react-icons/bi";

export default async function page() {
  const tools = await prisma.tool.findMany()
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Tools</h2>
        <Link href={'tools/create'} className={buttonVariants({})}>New Tool</Link>
      </div>
      <div className="d-card">
        <Table>
          <TableHeader className='text-base'>
            <TableRow>
              <TableHead>Icon</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tools.map(tool =>
              <TableRow key={tool.id}>
                <TableCell className='font-medium'>{tool.icon && <Image src={tool.icon} width={0} height={0} alt='image' className='size-16 object-contain'/>}</TableCell>
                <TableCell className='font-medium'>{tool.name}</TableCell>
                <TableCell>{tool.order}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link href={`tools/${tool.id}/edit`} className={buttonVariants({variant: 'outline', size: 'sm'})}>
                      <FaPencil className='size-5' />
                      <span>Edit</span>
                    </Link>
                    <DeleteRecordModal model="Tool" record={tool.id}>
                      <span className={buttonVariants({variant: 'destructive', size: 'sm'})}>
                      <BiTrash className='size-5'/>
                      <span>Delete</span>
                      </span>
                    </DeleteRecordModal>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
