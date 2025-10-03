import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Peace Code",
  description: "Got questions or feedback? Reach out to the Peace Code team – we’d love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        <Image
          src="/peaceful-ocean-waves-gentle-meditation-calming-bl.jpg"
          alt="Supportive handshake"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-sky-900 mb-4">We’d love to hear from you!</h1>
            <p className="text-lg sm:text-xl text-sky-800/90 max-w-md">
              Have a question or something to share? Fill out the form and we’ll get back to you
              soon.
            </p>
          </div>
          <div className="hidden md:block relative h-64 w-full">
            <Image
              src="/peaceful-young-woman-student-smiling-hope-recovery.jpg"
              alt="Smiling person"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="-mt-24 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              title: "Email Us At",
              detail: "hello@peacecode.com",
              href: "mailto:hello@peacecode.com",
            },
            {
              icon: MapPin,
              title: "Visit Us At",
              detail: "5th Floor, WeWork, Bengaluru, India",
              href: "https://maps.google.com",
            },
            {
              icon: Phone,
              title: "Call Us At",
              detail: "+91 98765 43210",
              href: "tel:+919876543210",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-sky-100"
            >
              <div className="w-14 h-14 grid place-items-center rounded-xl bg-sky-100 mb-4 text-sky-700">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sky-900 mb-1">{c.title}</h3>
              <p className="text-sky-700 text-sm group-hover:underline">{c.detail}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-sky-50 p-10 rounded-3xl shadow-sm border border-sky-100">
          <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">Send Us a Message</h2>

          <form
            className="grid sm:grid-cols-2 gap-6"
            action="https://formspree.io/f/xknlqydw"
            method="POST"
          >
            <div className="sm:col-span-2">
              <Input required name="name" placeholder="Your Name*" />
            </div>
            <Input required type="email" name="email" placeholder="Email Address*" />
            <Input name="phone" placeholder="Phone Number" />
            <div className="sm:col-span-2">
              <select
                name="queryType"
                required
                className="w-full h-10 rounded-md border border-sky-200 bg-white px-3 text-sm text-sky-900"
              >
                <option value="" disabled selected>
                  Choose the type of query*
                </option>
                <option value="general">General Enquiry</option>
                <option value="support">Product Support</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media/PR</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Textarea required name="message" rows={5} placeholder="Your Query*" />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <Button type="submit" size="lg" className="px-10">
                Submit <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ / footer area intentionally left to global footer */}
    </div>
  )
}
