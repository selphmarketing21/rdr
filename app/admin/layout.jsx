import Shell from "@/components/Shell";

const nav = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Businesses", href: "/admin/businesses" },
  { name: "Events", href: "/admin/events" },
  { name: "Upsells", href: "/admin/upsells" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Metrics", href: "/admin/metrics" },
];

export default function AdminLayout({ children }) {
  return <Shell nav={nav} label="Admin" user="Admin · Selph Marketing">{children}</Shell>;
}
