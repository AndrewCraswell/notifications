import { TopBar } from '@/components/top-bar';
import { Navigation } from '@/components/ui/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <>
      <SidebarProvider>
        <Navigation />
        <SidebarInset>
          <TopBar />
          <main className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
