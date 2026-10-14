const field = (id, label, type = "text", ph = "") => (
  <div key={id}><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} placeholder={ph} className="input" /></div>
);

export default function Signup() {
  return (
    <section className="mx-auto max-w-xl px-4 py-12">
      <ol className="mb-6 flex gap-2 text-sm font-medium">
        {["Business info", "Payment", "Finish"].map((s, i) => (
          <li key={s} className={`flex-1 rounded-lg px-3 py-2 text-center ${i === 0 ? "bg-brand" : "bg-brand-tint text-ink/60"}`}>{s}</li>
        ))}
      </ol>
      <div className="card space-y-4">
        <h1 className="text-2xl font-bold">Tell us about your business</h1>
        {field("biz", "Business name")}
        {field("owner", "Owner name")}
        {field("email", "Login email", "email", "you@business.com")}
        {field("addr", "Business address")}
        {field("web", "Website (optional)", "url")}
        <div><label className="label" htmlFor="cat">Category</label>
          <select id="cat" className="input"><option>Restaurant</option><option>Retail</option><option>Services</option></select></div>
        <div><label className="label" htmlFor="logo">Logo (optional)</label><input id="logo" type="file" className="input" /></div>
        <button className="btn btn-primary w-full">Continue to payment</button>
        <p className="text-center text-xs text-ink/60">You'll pay $200 securely through Stripe on the next step.</p>
      </div>
    </section>
  );
}
