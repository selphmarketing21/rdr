import Link from "next/link";
import Logo from "@/components/Logo";

export default function PublicLayout({ children }) {
  return (
    <>
      <header className="border-b border-brand/20 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/"><Logo /></Link>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/pricing" className="px-3 py-2 hover:text-brand-dark">Pricing</Link>
            <Link href="/login" className="px-3 py-2 hover:text-brand-dark">Log in</Link>
            <Link href="/signup" className="btn btn-primary">Join now</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-16 bg-ink py-8 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4">
          <p>© 2025 Rediscover Roanoke · Selph Marketing</p>
          <p className="flex gap-4"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">Privacy policy</a></p>
        </div>
      </footer>
    </>
  );
}
