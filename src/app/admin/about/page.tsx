import AboutForm from "@/components/AboutForm"
import prisma from "@/lib/connect"

export default async function page() {
  const about = await prisma.about.findFirst()
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">About</h2>
      </div>
      <div>
        {about && <AboutForm about={about}/>}
      </div>
    </div>
  )
}
