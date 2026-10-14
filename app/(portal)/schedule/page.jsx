const highlights = [["Jun 15", "Facebook feature"], ["Jul 5", "Instagram story highlight"]];
const events = [["Jun 20", "Local Shopping Weekend", "Downtown Roanoke · RSVP"], ["Jun 26", "Social media workshop", "Webinar · 3 PM · RSVP"]];

const Row = ({ date, title, sub, action }) => (
  <li className="card flex items-center gap-4">
    <div className="w-16 rounded-lg bg-brand-tint py-2 text-center text-sm font-bold">{date}</div>
    <div className="flex-1"><p className="font-semibold">{title}</p>{sub && <p className="text-sm text-ink/60">{sub}</p>}</div>
    {action && <button className="btn btn-primary">{action}</button>}
  </li>
);

export default function Schedule() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Schedule</h1>
      <section><h2 className="mb-3 font-semibold">Your social media highlights</h2>
        <ul className="space-y-3">{highlights.map(([d, t]) => <Row key={t} date={d} title={t} />)}</ul></section>
      <section><h2 className="mb-3 font-semibold">Community events</h2>
        <ul className="space-y-3">{events.map(([d, t, s]) => <Row key={t} date={d} title={t} sub={s} action="RSVP" />)}</ul></section>
    </div>
  );
}
