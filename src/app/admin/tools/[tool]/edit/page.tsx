import ToolEditForm from "@/components/ToolEditForm"
import prisma from "@/lib/connect"

interface Props {
  params: {
    tool: string
  }
}

export default async function page({params}: Props) {
  const tool = await prisma.tool.findUnique({
    where: {
      id: params.tool
    }
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Edit {tool?.name}</h2>
      </div>
      <div>
      {tool && <ToolEditForm tool={tool}/>}
      </div>
    </div>
  )
}
