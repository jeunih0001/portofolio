import DeleteAction from "@/components/DeleteAction"
import { buttonVariants } from "@/components/ui/button"
import { Project } from "@prisma/client"
import Link from "next/link"

export default function ProjectRowItem({ project }: { project: Project }) {
  return (
    <div className='flex items-center justify-between gap-4 flex-wrap'>
      <div>
        <h3 className='font-medium'>
          {project.name}
        </h3>
      </div>
      <ProjectActions projectId={project.id} />
    </div>
  )
}


function ProjectActions({projectId}: {projectId: string}) {
  return (
    <div className='flex items-center gap-2'>
      <Link href={`/admin/project/${projectId}/edit`} className={buttonVariants({variant: 'outline'})}>Edit</Link>
      <DeleteAction config={{schema: 'Project', record: projectId}}/>
    </div>
  )
}
