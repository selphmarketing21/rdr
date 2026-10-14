import Stat from "@/components/Stat";

const recent = [
  ["New member", "Joe's Coffeehouse", "Today"],
  ["Upsell order", "Main St. Boutique · Google Ads", "Yesterday"],
  ["Event", "Local Shopping Weekend", "Jun 20"],
];
const bars = [40, 55, 62, 70, 84, 96];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold md:text-3xl">Admin overview</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Active businesses" value="48" note="+6 this month" />
        <Stat label="Monthly recurring revenue" value="$9,600" />
        <Stat label="Upsells sold this month" value="9" note="$2,150" />
        <Stat label="Failed payments" value="2" note="Needs follow-up" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold">Members over time</h2>
          <div className="mt-4 flex h-32 items-end gap-2">
            {bars.map((h, i) => <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-brand" />)}
          </div>
        </div>
        <div className="card">
          <h2 className="font-semibold">Recent activity</h2>
          <ul className="mt-3 divide-y divide-brand/15 text-sm">
            {recent.map(([a, b, c]) => <li key={b} className="flex justify-between py-2"><span><b>{a}</b> · {b}</span><span className="text-ink/50">{c}</span></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
