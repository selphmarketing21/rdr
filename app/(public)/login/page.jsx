import Link from "next/link";

export default function Login() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <div className="card space-y-4">
        <h1 className="text-2xl font-bold">Log in</h1>
        <p className="text-sm text-ink/70">Enter your email and we'll send you a login link.</p>
        <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" className="input" placeholder="you@business.com" /></div>
        <button className="btn btn-primary w-full">Email me a login link</button>
        <p className="text-center text-sm">New here? <Link href="/signup" className="font-semibold text-brand-dark underline">Join now</Link></p>
        <Link href="/dashboard" className="block text-center text-xs text-ink/50 underline">Preview member portal</Link>
      </div>
    </section>
  );
}
