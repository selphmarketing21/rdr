const reports = ["June 2025", "May 2025", "April 2025"];

export default function Reports() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold md:text-3xl">Monthly marketing reports</h1>
      <ul className="mt-6 space-y-3">
        {reports.map((r, i) => (
          <li key={r} className="card flex items-center justify-between">
            <div><p className="font-semibold">{r} report</p>{i === 0 && <span className="mt-1 inline-block rounded-full bg-brand px-2 py-0.5 text-xs font-medium">New</span>}</div>
            <button className="btn btn-outline">Download PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
