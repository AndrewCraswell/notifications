import { useLocation } from 'react-router-dom';

export function useGetRouteName() {
  const location = useLocation();

  // Extracting the last part of the path
  const routeName =
    location.pathname.split('/').filter(Boolean).pop() || 'dashboard';

  // Capitalizing the first letter
  const capitalizedRouteName =
    routeName.charAt(0).toUpperCase() + routeName.slice(1);

  return capitalizedRouteName;
}
