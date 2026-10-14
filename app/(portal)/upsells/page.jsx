const items = [
  ["Google Ads management", "$250", "We set up and manage your monthly Google Ads campaign."],
  ["Custom video promo", "$500", "A short video about your business, filmed and promoted by our team."],
  ["Extra social media spotlight", "$150", "One additional featured post beyond your membership highlights."],
];

export default function Upsells() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold md:text-3xl">Marketing boosts</h1>
      <p className="mt-1 text-ink/70">Charged to the card on file. Sample pricing for design review.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map(([t, p, d]) => (
          <div key={t} className="card flex flex-col border-t-4 border-t-brand">
            <h2 className="font-semibold">{t}</h2>
            <p className="mt-1 flex-1 text-sm text-ink/70">{d}</p>
            <p className="mt-4 text-2xl font-bold">{p}</p>
            <button className="btn btn-primary mt-3">Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
