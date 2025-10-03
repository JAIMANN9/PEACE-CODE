import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About Peace Code",
}

export default function AboutPeaceCodePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/peaceful-nature-landscape-mountains-meditation-su.jpg"
          alt="Serene mountains at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            About <span className="text-primary">Peace&nbsp;Code</span>
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto text-white/90">
            Your digital sanctuary for mental wellness, resilience and community.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">The Problem</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            70% of students worldwide report feeling overwhelmed by academic pressure, social media
            comparison, and uncertainty about the future. Yet stigma, lack of time, and limited
            access to affordable care stop many from getting help when they need it most. The
            resulting mental-health crisis fuels dropout rates, loneliness, and lost potential.
          </p>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Peace Code Solution</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Peace Code brings together the latest science in clinical psychology with intuitive
              technology, empowering young people to take charge of their well-being wherever they
              are.
            </p>
            <ul className="mt-6 space-y-4 list-disc list-inside">
              <li>
                <span className="font-semibold text-foreground">AI-powered Support 24/7:</span>
                Confidential conversations with our GPT-trained chatbot any time you need to talk.
              </li>
              <li>
                <span className="font-semibold text-foreground">Licensed Professionals:</span>
                Book video sessions with vetted therapists at student-friendly prices.
              </li>
              <li>
                <span className="font-semibold text-foreground">Community & Peer Groups:</span>
                Safe, moderated spaces to share experiences and feel understood.
              </li>
              <li>
                <span className="font-semibold text-foreground">Evidence-based Tools:</span>
                Focus timer, breathing exercises, gratitude wall and more––all in one place.
              </li>
            </ul>
          </div>
          <img
            src="/happy-young-woman-student-cultural-diversity-menta.jpg"
            alt="Happy diverse students"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* APPROACH CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We build holistic care pathways that follow you from first check-in to lasting growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-xl mb-3">Led by Experts</h3>
            <p className="text-muted-foreground">
              Our clinical board of psychologists and psychiatrists ensure every feature meets
              international evidence-based standards.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-xl mb-3">Personalised Care</h3>
            <p className="text-muted-foreground">
              Smart assessments tailor recommendations to your goals, schedule and cultural
              context.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-xl mb-3">Community First</h3>
            <p className="text-muted-foreground">
              We believe healing happens together. Moderated groups foster empathy, accountability
              and hope.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To democratise mental-health support for every student and young professional, so
              they can thrive academically, socially and personally.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A world where emotional resilience is taught as fundamentally as literacy, and help
              is as close as your nearest device.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
        </div>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Compassion",
              body: "Every interaction is grounded in empathy and respect for lived experience.",
            },
            {
              title: "Science-backed",
              body: "We iterate based on research, data and clinical best practices.",
            },
            {
              title: "Inclusivity",
              body: "Mental health is universal. Our platform embraces all identities and languages.",
            },
            {
              title: "Privacy",
              body: "User trust is sacred. We employ end-to-end encryption and strict data ethics.",
            },
          ].map((v) => (
            <div key={v.title} className="p-6 bg-card rounded-xl shadow-sm border border-border">
              <h3 className="font-semibold text-xl mb-2">{v.title}</h3>
              <p className="text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of learners already building healthier habits with Peace Code.
        </p>
        <a
          href="/auth/signup"
          className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Create Your Free Account
        </a>
      </section>
    </div>
  )
}
