import AppShell from "./AppShell";
import BaseLayout from "./BaseLayout";

export default function AdminLayout({ children }: any) {
  return (
    <BaseLayout>
      <AppShell>{children}</AppShell>
    </BaseLayout>
  );
}
