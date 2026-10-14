import Link from "next/link";

const benefits = [
  ["Monthly marketing reports", "See your reach, clicks and results in one PDF every month."],
  ["Social media highlights", "Get featured on Rediscover Roanoke's Facebook and Instagram."],
  ["Training and events", "Workshops and local promotions you can join with one click."],
  ["Marketing boosts", "Add Google Ads, video and extra spotlights when you're ready."],
];
const steps = [
  ["Sign up", "Tell us about your business and pick a login email. No password needed."],
  ["Get featured", "We schedule your highlight dates and send you the calendar."],
  ["Grow sales", "Track results every month in your member portal."],
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand to-brand-light">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Support Roanoke. Grow your business.</h1>
            <p className="mt-4 max-w-md text-lg">Join the local marketing program that puts your business in front of Roanoke shoppers, and shows you what's working.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/signup" className="btn bg-ink text-white hover:bg-ink/90">Join for $200/month</Link>
              <Link href="/pricing" className="btn border border-ink/40 hover:bg-white/30">See what's included</Link>
            </div>
          </div>
          <div className="card space-y-3 shadow-xl">
            <p className="text-sm font-semibold text-brand-dark">Your June snapshot</p>
            {[["Facebook reach", "5,200"], ["Website clicks", "312"], ["Next highlight", "June 20"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-brand/15 pb-2 last:border-0">
                <span className="text-sm text-ink/70">{k}</span><span className="text-2xl font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="card">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand font-bold">{i + 1}</span>
              <h3 className="mt-3 font-semibold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-tint py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">What members get</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([t, d]) => (
              <div key={t} className="card border-t-4 border-t-brand"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
