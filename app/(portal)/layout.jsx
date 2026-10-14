import Shell from "@/components/Shell";

const nav = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Reports", href: "/reports" },
  { name: "Schedule", href: "/schedule" },
  { name: "Upsells", href: "/upsells" },
];

export default function PortalLayout({ children }) {
  return <Shell nav={nav} label="Member portal" user="Joe's Coffeehouse">{children}</Shell>;
}
