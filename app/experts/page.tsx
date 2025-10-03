import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Experts | Peace Code",
}

export default function ExpertsPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Experts</h1>
      <Separator className="mb-6" />
      <p>Coming soon: Meet the professionals behind Peace Code.</p>
    </section>
  )
}
