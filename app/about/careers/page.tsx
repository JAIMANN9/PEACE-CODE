import { Metadata } from "next"
import Image from "next/image"
import { ChevronRight, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers | Peace Code",
  description: "Join our mission-driven team and help democratise mental-health care for students.",
}

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <Navigation />
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <Image
          src="/diverse-group-students-supporting-each-other-commu.jpg"
          alt="Team celebrating at Peace Code"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-sky-900 drop-shadow-lg mb-4">
            Build the Future of Student Mental Health
          </h1>
          <p className="text-lg sm:text-2xl text-sky-800/90">
            At Peace Code, you’ll create tools that empower millions of learners to thrive. Ready to
            make an impact?
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">We’re Set Apart By Our Values</h2>
          <p className="text-lg text-sky-800 max-w-3xl mx-auto">
            Our values form the foundation of everything we do. Here’s what we stand for.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Compassion", icon: "🤝", desc: "We meet every user and teammate with empathy." },
            { title: "Integrity", icon: "🧭", desc: "We do the right thing, even when no one’s watching." },
            { title: "Respect", icon: "🎧", desc: "We listen deeply to diverse voices and experiences." },
            { title: "Transparency", icon: "🔍", desc: "Openness builds trust inside and outside our product." },
            { title: "Velocity", icon: "⚡", desc: "We ship, learn and iterate quickly for maximum impact." },
            { title: "Learning Culture", icon: "📚", desc: "Curiosity powers our growth mindset." },
            { title: "Ownership", icon: "🛠️", desc: "We take initiative and see challenges through." },
            { title: "Excellence", icon: "🏆", desc: "Quality and craft matter in everything we build." },
            { title: "Inclusivity", icon: "🌍", desc: "We embrace every background, language and identity." },
            { title: "Joy", icon: "🎈", desc: "We celebrate wins and foster a fun workplace." },
          ].map((v) => (
            <div key={v.title} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 grid place-items-center rounded-xl bg-sky-100 text-3xl">
                {v.icon}
              </div>
              <h3 className="font-semibold text-sky-900 mb-2">{v.title}</h3>
              <p className="text-sky-700 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">Current Job Openings</h2>
          <p className="text-lg text-sky-800">
            Join our team and help us make mental health care more accessible.
          </p>
        </div>

        <div className="space-y-14 max-w-5xl mx-auto">
          {[
            {
              category: "Engineering",
              roles: [
                {
                  title: "Full-Stack Developer",
                  desc: "Build performant, accessible web experiences using React, Next.js and supabase.",
                  link: "mailto:careers@peacecode.com?subject=Full-Stack%20Developer",
                },
                {
                  title: "ML Engineer",
                  desc: "Train and fine-tune LLMs that power our AI companion and language features.",
                  link: "mailto:careers@peacecode.com?subject=ML%20Engineer",
                },
              ],
            },
            {
              category: "Care Team",
              roles: [
                {
                  title: "Licensed Psychologist (Part-Time)",
                  desc: "Provide online therapy sessions and help shape our clinical protocols.",
                  link: "mailto:careers@peacecode.com?subject=Psychologist",
                },
                {
                  title: "Community Moderator",
                  desc: "Foster safe, supportive discussions in our peer forums.",
                  link: "mailto:careers@peacecode.com?subject=Community%20Moderator",
                },
              ],
            },
            {
              category: "Design & Content",
              roles: [
                {
                  title: "Product Designer",
                  desc: "Craft intuitive, inclusive interfaces across mobile and web.",
                  link: "mailto:careers@peacecode.com?subject=Product%20Designer",
                },
                {
                  title: "Mental-Health Writer",
                  desc: "Create engaging educational resources and in-app copy.",
                  link: "mailto:careers@peacecode.com?subject=Mental%20Health%20Writer",
                },
              ],
            },
          ].map((sec) => (
            <div key={sec.category}>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6 text-center">{sec.category}</h3>
              <div className="space-y-6">
                {sec.roles.map((role) => (
                  <div
                    key={role.title}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-sky-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="md:max-w-lg">
                      <h4 className="font-semibold text-sky-900 text-lg mb-1">{role.title}</h4>
                      <p className="text-sky-700 text-sm leading-relaxed">{role.desc}</p>
                    </div>
                    <Button asChild className="mt-4 md:mt-0">
                      <a href={role.link} target="_blank" rel="noopener noreferrer">
                        Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-6">Why Work at Peace Code?</h2>
            <p className="text-lg text-sky-800 leading-relaxed">
              With Peace Code, you’ll get the chance to contribute to a fast-growing social-impact
              startup that brings mental-healthcare to millions of people.
            </p>
            <p className="text-lg text-sky-800 leading-relaxed mt-6">
              You’re the right fit for us if you agree with these statements. Apply today!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "You want to build new skills",
                body: "We take professional and personal growth seriously.",
              },
              {
                title: "You believe in collaboration",
                body: "We learn from each other and our diverse perspectives.",
              },
              {
                title: "You want to feel supported at work",
                body: "Free therapy & wellness allowance for you and your family.",
              },
              {
                title: "You thrive in a fast-paced culture",
                body: "We create then iterate—every day.",
              },
              {
                title: "You’re brimming with creativity",
                body: "We love brainstorming new ideas together.",
              },
              {
                title: "You care about mental health",
                body: "Your passion aligns with our mission to make care accessible.",
              },
            ].map((c) => (
              <div key={c.title} className="p-6 bg-white rounded-2xl border border-sky-100 shadow-sm">
                <h4 className="font-semibold text-sky-900 mb-2 text-md">{c.title}</h4>
                <p className="text-sky-700 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-6">Didn’t see the perfect role?</h2>
        <p className="text-lg text-sky-800 mb-8 max-w-2xl mx-auto">
          We’re always excited to meet passionate people. Send us your résumé and tell us why you’d
          be a great addition to the team.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <a href="mailto:careers@peacecode.com?subject=Open%20Application" className="flex items-center">
            Email Us <Send className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </section>

      {/* Application form inline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        {/* Application form inline */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* left intro reused */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900">Send Your Application</h2>
            <p className="text-lg text-sky-800">
              Fill out the form and our People team will get back to you within a week.
            </p>
          </div>

          {/* form */}
          <form
            className="space-y-4 bg-sky-50 p-8 rounded-2xl shadow-sm border border-sky-100"
            action="https://formspree.io/f/xknlqydw"
            method="POST"
            encType="multipart/form-data"
          >
            <Input required name="fullName" placeholder="Full Name*" />
            <Input type="email" required name="email" placeholder="Email Address*" />
            <Input name="phone" placeholder="Phone Number" />
            <Input name="role" placeholder="What role are you looking for?*" required />
            <Input type="file" name="resume" accept="application/pdf" />
            <Textarea name="about" rows={4} placeholder="Tell us about yourself..." />
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
