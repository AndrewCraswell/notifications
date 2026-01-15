import { AppShell } from '@/components/app-shell';
import { Dashboard } from '@/pages/dashboard';
import { Problem } from '@/pages/problem';
import { createBrowserRouter } from 'react-router-dom';

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
