import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { Problem } from '@/pages/problem/problem';
import { AppShell } from '@/components/app-shell';
import { Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'problem', element: <Problem /> },
    ],
  },
]);
