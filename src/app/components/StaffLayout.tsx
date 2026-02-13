import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import logo from '@/assets/logo.png';
import {
  LayoutDashboard,
  Headphones,
  ShoppingBag,
  ChevronDown,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/staff/dashboard' },
  { label: 'My Tickets', icon: Headphones, path: '/staff/tickets' },
  { label: 'Customer Orders', icon: ShoppingBag, path: '/staff/orders' },
];

export function StaffLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#003366] to-[#00509E] border-b border-blue-800 sticky top-0 z-40 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <Link to="/staff/dashboard" className="flex items-center gap-3">
              <img src={logo} alt="TayoKonnektado Logo" className="h-10 object-contain" />
              <div className="hidden md:block">
                <span className="text-xl font-bold text-white block">TayoKonnektado</span>
                <span className="text-xs text-blue-200">Support Staff</span>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 text-white hover:bg-white/10"
            >
              <div className="w-8 h-8 bg-[#FDB913] rounded-full flex items-center justify-center">
                <span className="text-[#003366] text-sm font-semibold">ST</span>
              </div>
              <span className="hidden md:block text-sm font-medium">Support Staff</span>
              <ChevronDown size={16} />
            </Button>

            {isProfileOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setIsProfileOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-40">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-[#003366]">Support Staff</p>
                    <p className="text-xs text-gray-500">staff@tayokonnektado.com</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-30 ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#003366] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
        )}

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
