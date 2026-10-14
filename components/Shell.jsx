"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

/** Sidebar shell shared by the business portal and the admin portal. */
export default function Shell({ nav, label, user, children }) {
  const path = usePathname();
  return (
    <div className="min-h-screen md:flex">
      <aside className="bg-ink text-white md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0">
        <div className="flex items-center justify-between p-4 md:block">
          <Link href="/"><Logo /></Link>
          <p className="mt-0 text-xs text-brand-light md:mt-1">{label}</p>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:block md:space-y-1 md:overflow-visible">
          {nav.map((n) => {
            const active = path === n.href;
            return (
              <Link key={n.href} href={n.href}
                className={`block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${active ? "bg-brand text-ink" : "text-white/80 hover:bg-white/10"}`}>
                {n.name}
              </Link>
            );
          })}
        </nav>
        <p className="hidden p-4 text-xs text-white/60 md:absolute md:bottom-0 md:block">{user}</p>
      </aside>
      <main className="flex-1 p-5 md:p-8">{children}</main>
    </div>
  );
}
