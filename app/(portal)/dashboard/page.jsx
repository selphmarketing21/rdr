import Link from "next/link";
import Stat from "@/components/Stat";

const checklist = [["Update your profile", true], ["Explore upcoming events", false], ["Review your highlight date", false]];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-2xl font-bold md:text-3xl">Welcome back, Joe's Coffeehouse</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Next social media highlight" value="June 20" note="Facebook feature" />
        <Stat label="Last month's total reach" value="5,200" note="+12% vs. May" />
        <Stat label="Events this month" value="3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold">Quick start</h2>
          <ul className="mt-3 space-y-2">
            {checklist.map(([t, done]) => (
              <li key={t} className="flex items-center gap-2 text-sm">
                <span className={`grid h-5 w-5 place-items-center rounded-full text-xs ${done ? "bg-brand" : "border border-brand-dark/40"}`}>{done && "✓"}</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold">Shortcuts</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/reports" className="btn btn-primary">View my report</Link>
            <Link href="/schedule" className="btn btn-outline">See event calendar</Link>
            <Link href="/upsells" className="btn btn-outline">Buy marketing boosts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
