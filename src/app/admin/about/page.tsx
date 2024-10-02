import AboutForm from "@/components/AboutForm"
import prisma from "@/lib/prisma"

export default async function page() {
  const about = await prisma.about.findFirst()
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-semibold">About</h2>
      </div>
      <div className="d-card">
        <AboutForm about={about}/>
      </div>
    </div>
  )
}
