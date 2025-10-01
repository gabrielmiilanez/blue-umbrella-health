import SidebarComponent from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarComponent>{children}</SidebarComponent>
    </>
  );
}
