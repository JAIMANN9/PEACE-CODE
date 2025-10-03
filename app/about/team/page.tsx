import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Our Team | Peace Code",
}

export default function TeamPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <Separator className="mb-6" />
      <p>Peace Code is built by a multidisciplinary crew of psychologists, software engineers, and educators united by one goal: making mental healthcare universally accessible.</p>
    </section>
  )
}
