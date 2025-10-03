import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Peace Code in Media",
}

export default function MediaPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Peace Code in the Media</h1>
      <Separator className="mb-6" />
      <p>Press highlights and media coverage about Peace Code will appear here soon.</p>
    </section>
  )
}
