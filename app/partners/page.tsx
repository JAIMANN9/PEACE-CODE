import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Partners | Peace Code",
}

export default function PartnersPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Partners</h1>
      <Separator className="mb-6" />
      <p>We’re grateful to collaborate with universities, NGOs, and healthcare providers worldwide.</p>
    </section>
  )
}
