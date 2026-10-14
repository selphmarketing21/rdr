import Link from "next/link";

const included = ["Monthly marketing report", "Social media highlight schedule", "Marketing and events calendar", "Guides and branding resources", "Member-only upsell store", "Cancel anytime"];
const faqs = [
  ["How does billing work?", "You pay $200 today and on the same date each month. Update your card or cancel from your Billing page."],
  ["Do I need a password?", "No. We email you a secure login link each time you sign in."],
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold md:text-4xl">One simple membership</h1>
      <div className="card mt-8 border-2 border-brand">
        <p className="text-5xl font-extrabold">$200<span className="text-lg font-medium text-ink/60">/month</span></p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {included.map((i) => <li key={i} className="flex gap-2 text-sm"><span className="font-bold text-brand-dark">✓</span>{i}</li>)}
        </ul>
        <Link href="/signup" className="btn btn-primary mt-6 w-full sm:w-auto">Join now</Link>
      </div>
      <h2 className="mt-12 text-xl font-bold">Questions</h2>
      <div className="mt-3 space-y-3">
        {faqs.map(([q, a]) => <div key={q} className="card"><h3 className="font-semibold">{q}</h3><p className="mt-1 text-sm text-ink/70">{a}</p></div>)}
      </div>
    </section>
  );
}
