import DeleteAction from "@/components/DeleteAction";
import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/connect";
import Link from "next/link";

export default async function page() {
  const tools = await prisma.tool.findMany()
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Tools</h2>
        <Link href={'tools/create'} className={buttonVariants({})}>New Tool</Link>
      </div>
      <div className="divide-y-2">
        {tools.map(tool => 
          <div key={tool.id} className="p-3 flex justify-between items-center">
            <div>
            {tool.name}
            </div>
            <div className="flex items-center gap-4">
              <Link className={buttonVariants({variant: 'outline'})} href={`tools/${tool.id}/edit`}>Edit</Link>
              <DeleteAction config={{schema: 'Tool',record: tool.id}}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
