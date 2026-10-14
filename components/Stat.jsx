export default function Stat({ label, value, note }) {
  return (
    <div className="card">
      <p className="text-sm text-ink/70">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
      {note && <p className="mt-1 text-xs text-brand-dark">{note}</p>}
    </div>
  );
}
