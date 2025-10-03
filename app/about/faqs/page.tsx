import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQs | Peace Code",
  description: "Answers to the most common questions about Peace Code’s platform, therapy services, payments, privacy and more.",
}

// --- FAQ DATA -------------------------------------------------------------
type QA = { category: string; q: string; a: string }

const faqList: QA[] = [
  // Generic (10)
  {
    category: "General",
    q: "What is Peace Code?",
    a: "Peace Code is an all-in-one digital mental-wellness platform that combines AI-powered support, professional counselling, peer community and self-help tools in 10+ Indian languages.",
  },
  {
    category: "General",
    q: "Do I have to sign up to use the website?",
    a: "You can browse resources without an account. To access personalised tools, community forums, or book therapy sessions, you’ll need to create a free profile.",
  },
  {
    category: "General",
    q: "How do I create an account?",
    a: "Click the Sign-Up button on the top-right, choose your role (student or counsellor), enter your email, and verify it with the link we send. The whole process takes under two minutes.",
  },
  {
    category: "General",
    q: "How old must I be to use Peace Code?",
    a: "Our services are designed for users aged 16 and above. If you are under 18, we require parental consent before booking therapy sessions.",
  },
  {
    category: "General",
    q: "I would like to work with Peace Code. Who should I contact?",
    a: "Check our Careers page for live openings or email your résumé to careers@peacecode.com. We review every application within a week.",
  },
  // Therapy (15)
  {
    category: "Therapy",
    q: "What modes of therapy do you offer?",
    a: "We provide one-on-one video, audio, and secure text-based sessions. You can mix and match formats depending on comfort and need.",
  },
  {
    category: "Therapy",
    q: "What is online therapy?",
    a: "Online therapy allows you to meet a licensed professional over encrypted video or chat, so you receive evidence-based care from anywhere.",
  },
  {
    category: "Therapy",
    q: "How is a Peace Code session different from a video call with friends?",
    a: "Our therapists are clinically trained, follow structured treatment plans, and operate on a HIPAA-compliant platform that ensures confidentiality.",
  },
  {
    category: "Therapy",
    q: "Is online therapy safe?",
    a: "Yes. All sessions use end-to-end encryption, and we never record or store video/audio.",
  },
  {
    category: "Therapy",
    q: "How effective is online therapy?",
    a: "Multiple peer-reviewed studies show outcomes comparable to in-person care for most concerns when delivered by qualified professionals.",
  },
  {
    category: "Therapy",
    q: "What concerns are handled at Peace Code?",
    a: "Anxiety, depression, ADHD, academic stress, relationship issues, grief and more. Severe psychiatric crises are referred to specialised care.",
  },
  {
    category: "Therapy",
    q: "Are there concerns you don’t handle?",
    a: "We currently do not treat active psychosis, severe substance dependence, or medical emergencies on the platform.",
  },
  {
    category: "Therapy",
    q: "How long does a session last?",
    a: "Standard therapy sessions are 50 minutes. Brief check-ins and group sessions vary between 20-45 minutes.",
  },
  {
    category: "Therapy",
    q: "Can my issues be solved in one session?",
    a: "While a single session can offer clarity, sustainable change usually requires an evidence-based treatment plan over multiple sessions.",
  },
  {
    category: "Therapy",
    q: "How long will therapy last overall?",
    a: "On average, users attend 6-12 sessions across three months, but duration is personalised and regularly reviewed with your therapist.",
  },
  {
    category: "Therapy",
    q: "How frequently should I book sessions?",
    a: "Weekly appointments are recommended initially. Frequency can decrease as you progress and learn self-management strategies.",
  },
  {
    category: "Therapy",
    q: "How do I choose my therapist?",
    a: "Our matching quiz considers language, specialisation, availability and your goals. You can also manually browse our expert directory.",
  },
  {
    category: "Therapy",
    q: "Can I switch therapists mid-way?",
    a: "Absolutely. Your comfort is paramount. Use the Change Therapist option in your dashboard and we’ll rematch you within 48 hours.",
  },
  {
    category: "Therapy",
    q: "Can I contact my therapist between sessions?",
    a: "For brief clarifications, you may message via the client portal. For crises, please call emergency services as therapists may not be immediately available.",
  },
  {
    category: "Therapy",
    q: "How do I end therapy?",
    a: "Discuss termination goals with your therapist. A planned conclusion includes relapse-prevention and future check-in options.",
  },
  // Assessments (5)
  {
    category: "Assessments",
    q: "What are assessments?",
    a: "They are standardised questionnaires validated by clinical research to measure symptoms such as anxiety, depression or attention difficulties.",
  },
  {
    category: "Assessments",
    q: "Do I have to pay for assessments?",
    a: "Quick screenings are free. In-depth psychometrics may incur a nominal fee, which will be displayed before you proceed.",
  },
  {
    category: "Assessments",
    q: "Is taking these assessments mandatory?",
    a: "No, they’re optional but highly recommended to track progress and personalise your care plan.",
  },
  {
    category: "Assessments",
    q: "Are my results shared?",
    a: "Only with your assigned therapist and you. Aggregated, anonymised data may be used for product improvement with strict privacy controls.",
  },
  {
    category: "Assessments",
    q: "Can I retake a test?",
    a: "Yes—most tools have a recommended retest interval (e.g., two weeks) to accurately capture change over time.",
  },
  // Technical (8)
  {
    category: "Technical",
    q: "What system specs are recommended?",
    a: "A stable 5 Mbps internet connection, a webcam, microphone, and the latest version of Chrome, Firefox, or Safari.",
  },
  {
    category: "Technical",
    q: "Can I access Peace Code from mobile?",
    a: "Yes, our progressive web app works on Android and iOS browsers, and a native app is coming soon.",
  },
  {
    category: "Technical",
    q: "How do I start an online session?",
    a: "Log in, navigate to ‘My Appointments’, and click ‘Join Session’ five minutes before the scheduled time.",
  },
  {
    category: "Technical",
    q: "Are sessions timed?",
    a: "Yes, a timer is visible throughout. If extra time is needed and the therapist is available, you can extend the slot for a prorated fee.",
  },
  {
    category: "Technical",
    q: "What if my connection drops?",
    a: "Rejoin using the same link. If issues persist, you may reschedule free of charge or switch to a phone call.",
  },
  {
    category: "Technical",
    q: "Is there parking at partner clinics?",
    a: "Most locations have on-site parking. Details are emailed with your booking confirmation.",
  },
  {
    category: "Technical",
    q: "Can I use Bluetooth headphones?",
    a: "Certainly, as long as latency is low and the microphone quality is clear.",
  },
  {
    category: "Technical",
    q: "Do sessions work behind corporate firewalls?",
    a: "Usually yes, but if video is blocked, switching to mobile data or our alternative WebRTC ports solves the issue.",
  },
  // Payment (10)
  {
    category: "Payments & Refunds",
    q: "What is the fee for therapy?",
    a: "Single sessions start at ₹799. Package discounts and student subsidies are available.",
  },
  {
    category: "Payments & Refunds",
    q: "Which payment methods do you accept?",
    a: "UPI, credit/debit cards, net banking and international cards via Stripe.",
  },
  {
    category: "Payments & Refunds",
    q: "Is the payment gateway secure?",
    a: "Yes—our transactions are processed through PCI-DSS compliant providers with 256-bit encryption.",
  },
  {
    category: "Payments & Refunds",
    q: "Can I pay for multiple sessions upfront?",
    a: "Absolutely. Bundle packs offer up to 20 % savings and increase commitment to therapy.",
  },
  {
    category: "Payments & Refunds",
    q: "Can I reschedule a session?",
    a: "Rescheduling is free up to 12 hours before your appointment via your dashboard.",
  },
  {
    category: "Payments & Refunds",
    q: "Am I eligible for a refund if I cancel?",
    a: "Cancellations with 24-hour notice receive a full refund. Later cancellations incur a 30 % fee to compensate therapist time.",
  },
  {
    category: "Payments & Refunds",
    q: "Can the therapist cancel?",
    a: "In rare emergencies, sessions may be moved. You will receive an immediate full refund or priority reschedule slot.",
  },
  {
    category: "Payments & Refunds",
    q: "What if my session is interrupted?",
    a: "Network disruptions under 10 minutes are compensated with extra time; longer outages qualify for a free make-up session.",
  },
  {
    category: "Payments & Refunds",
    q: "Do you offer EMI options?",
    a: "Yes, for packages above ₹5,000 we partner with Razorpay EMI at 0 % interest for 3 months.",
  },
  {
    category: "Payments & Refunds",
    q: "Can I get an invoice for insurance?",
    a: "Yes—download GST-compliant invoices from your billing history to file claims with insurers that cover tele-therapy.",
  },
  // Privacy (7)
  {
    category: "Privacy",
    q: "What information do you collect?",
    a: "Name, email, self-reported concerns, usage analytics, and therapy notes (accessible only to your therapist). We never sell data.",
  },
  {
    category: "Privacy",
    q: "How is my data used?",
    a: "To deliver personalised care, improve services, and comply with legal obligations. Aggregated analytics inform product roadmap.",
  },
  {
    category: "Privacy",
    q: "Can I use Peace Code anonymously?",
    a: "You may browse resources without logging in, but therapy and community features require verified identities for safety.",
  },
  {
    category: "Privacy",
    q: "Are sessions recorded?",
    a: "No. We store only encrypted text summaries written by therapists for continuity of care.",
  },
  {
    category: "Privacy",
    q: "Who can see my community posts?",
    a: "Only logged-in members. You can post under a pseudonym; moderators enforce strict confidentiality rules.",
  },
  {
    category: "Privacy",
    q: "Can I request erasure of my data?",
    a: "Yes—email privacy@peacecode.com and we will delete your records within 30 days, unless retention is required by law.",
  },
  {
    category: "Privacy",
    q: "Do you comply with HIPAA?",
    a: "Although HIPAA is US-specific, our infrastructure meets or exceeds HIPAA and Indian PDPB guidelines for health data.",
  },
]

// Group by category
const categories = Array.from(new Set(faqList.map((f) => f.category)))

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        <Image
          src="/serene-meditation-breathing-exercise-calm-blue-atm.jpg"
          alt="FAQs banner"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <h1 className="relative z-10 text-4xl sm:text-6xl font-extrabold text-sky-900 text-center drop-shadow-lg">
          Your Mental-Health Queries Answered
        </h1>
      </section>

      {/* FAQ ACCORDIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="text-2xl font-bold text-sky-900 mb-6">{cat}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqList
                  .filter((f) => f.category === cat)
                  .map((f, idx) => (
                    <AccordionItem key={idx} value={`${cat}-${idx}`} className="border border-sky-100 rounded-xl">
                      <AccordionTrigger className="text-sky-700 hover:text-sky-900 px-4 py-3 text-left font-medium">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 text-sky-600 bg-sky-50 rounded-b-xl">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
