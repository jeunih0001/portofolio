import ToolCreateForm from "@/components/ToolCreateForm";

export default function page() {
  return (
    <div className="space-y-6"> 
      <div>
        <h2 className="text-2xl font-semibold">New Tool</h2>
      </div>
      <div>
        <ToolCreateForm />
      </div>
    </div>
  )
}
