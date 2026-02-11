import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                      location.pathname.startsWith('/account') || 
                      location.pathname.startsWith('/services') || 
                      location.pathname.startsWith('/support') || 
                      location.pathname.startsWith('/reports');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}
