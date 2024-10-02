import ProjectEditForm from "@/components/project/ProjectEditForm"
import prisma from "@/lib/prisma"

interface Props {
  params: {
    project: string
  }
}
export default async function page({params}: Props) {
  const project = await prisma.project.findUnique({
    where: {
      id: params.project
    }
  })

  if (!project) return ('not found')

  return (
    <div className="py-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Edit {project.name}</h2>
      </div>
      <div className="d-card">
        <ProjectEditForm project={project}/>
      </div>
    </div>
  )
}
