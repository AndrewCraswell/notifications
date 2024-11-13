import * as React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Sidebar } from '@/components/sidebar';
import { TopBar } from '@/components/top-bar';
import { Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <TopBar />
        <main className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
