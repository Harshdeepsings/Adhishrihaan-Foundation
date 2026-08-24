import { Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

// AdminRoutes placeholder — ready for future admin panel routes
export default function AdminRoutes() {
  return (
    <Route element={<AdminLayout />}>
      {/* Future admin routes go here */}
    </Route>
  );
}
