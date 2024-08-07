export default function FormFieldError({error}: {error: string | null | undefined}) {
  return (
    !!error && <p className="text-sm font-medium text-red-800">{error}</p>
  )
}
