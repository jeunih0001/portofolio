import { RiEdit2Line } from "react-icons/ri";
import { buttonVariants } from '@/components/ui/button'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { FaPencil } from 'react-icons/fa6'
import DeleteRecordModal from '@/components/DeleteRecordModal'
import { BiTrash } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'



export default async function Projects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className='grid gap-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <Link className={buttonVariants()} href={'/admin/projects/create'}>New Project</Link>
      </div>
      <div className='bg-card p-6 shadow-sm border rounded-xl'>
        <Table>
          <TableHeader className='text-base'>
            <TableRow>
              <TableHead className='w-20'>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map(project =>
              <TableRow key={project.id}>
                <TableCell>
                  <Image
                    alt='Project Image'
                    src={project.image}
                    width={0}
                    height={0}
                    className='size-12 rounded-full object-cover'
                  />
                </TableCell>
                <TableCell className='font-medium'>{project.name}</TableCell>
                <TableCell>
                  <div className='flex items-center gap-1 flex-wrap'>
                    {project.tags.map((tag, index) => <span key={index} className='bg-d-primary text-d-primary-foreground font-medium capitalize text-xs border px-2 py-1 rounded-full border-d-primary-foreground'>{tag}</span>)}
                  </div>
                </TableCell>
                <TableCell>{project.order}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link href={`projects/${project.id}/edit`} className={buttonVariants({variant: 'outline', size: 'sm'})}>
                      <RiEdit2Line className='size-5' />
                      <span>Edit</span>
                    </Link>
                    <DeleteRecordModal model="Project" record={project.id}>
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
