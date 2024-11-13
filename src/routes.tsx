import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { Problem } from '@/pages/problem/problem';
import { AppShell } from '@/components/app-shell';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { path: '', element: <Dashboard />, index: true },
      { path: 'problem', element: <Problem /> },
    ],
  },
]);
