import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import logo from '@/assets/logo.png';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  DollarSign,
  FileText,
  Headphones,
  Settings,
  ChevronDown,
  ChevronRight,
  Bell,
  LogOut,
  Menu,
  X,
  Shield,
} from 'lucide-react';

interface MenuItem {
  label: string;
  icon: any;
  path?: string;
  children?: { label: string; path: string; description?: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard',
  },
  {
    label: 'Account Management',
    icon: Users,
    children: [
      { label: 'All Customers', path: '/admin/accounts/customers', description: 'Manage customer accounts' },
      { label: 'Account Details', path: '/admin/accounts/details', description: 'View account information' },
      { label: 'Subscriptions', path: '/admin/billing/subscriptions', description: 'Manage subscriptions' },
    ],
  },
  {
    label: 'Order & Services',
    icon: ShoppingBag,
    children: [
      { label: 'All Orders', path: '/admin/orders/all', description: 'View all orders' },
      { label: 'Active Services', path: '/admin/services/active', description: 'Manage active services' },
      { label: 'Service Plans', path: '/admin/services/plans', description: 'Manage service plans' },
    ],
  },
  {
    label: 'Billing & Payment',
    icon: DollarSign,
    children: [
      { label: 'Payments', path: '/admin/billing/payments', description: 'View all payments' },
      { label: 'Invoices', path: '/admin/billing/invoices', description: 'Manage invoices' },
      { label: 'Payment Methods', path: '/admin/billing/payment-methods', description: 'Payment configurations' },
    ],
  },
  {
    label: 'Reports',
    icon: FileText,
    children: [
      { label: 'Revenue Reports', path: '/admin/reports/revenue', description: 'Financial reports' },
      { label: 'Customer Reports', path: '/admin/reports/customer', description: 'Customer analytics' },
      { label: 'Service Reports', path: '/admin/reports/service', description: 'Service statistics' },
    ],
  },
  {
    label: 'Support Request',
    icon: Headphones,
    children: [
      { label: 'All Tickets', path: '/admin/support/tickets', description: 'Manage support tickets' },
      { label: 'Assign Tickets', path: '/admin/support/assign', description: 'Assign to staff' },
      { label: 'FAQ Management', path: '/admin/support/faq', description: 'Manage FAQ content' },
    ],
  },
  {
    label: 'Admin & Staff Management',
    icon: Shield,
    children: [
      { label: 'Staff Accounts', path: '/admin/staff/accounts', description: 'Manage staff users' },
      { label: 'Roles & Permissions', path: '/admin/staff/roles', description: 'Access control' },
      { label: 'Activity Logs', path: '/admin/system/activity-logs', description: 'Audit trail' },
    ],
  },
  {
    label: 'Notifications',
    icon: Bell,
    path: '/admin/system/notifications',
  },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showStars, setShowStars] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = (label: string) => {
    const isOpening = expandedMenu !== label;
    setExpandedMenu(expandedMenu === label ? null : label);
    
    if (isOpening) {
      setShowStars(label);
      setTimeout(() => setShowStars(null), 3000);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
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
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <img src={logo} alt="TayoKonnektado Logo" className="h-10 object-contain" />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white block">TayoKonnektado</span>
                <span className="text-xs text-blue-200">Admin Portal</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative text-white hover:bg-white/10">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FDB913] rounded-full"></span>
            </Button>

            {/* Profile Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-white hover:bg-white/10"
              >
                <div className="w-8 h-8 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <span className="text-[#003366] text-sm font-semibold">AD</span>
                </div>
                <span className="hidden md:block text-sm font-medium">Admin User</span>
                <ChevronDown size={16} />
              </Button>

              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-40">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#003366]">Admin User</p>
                      <p className="text-xs text-gray-500">admin@tayokonnektado.com</p>
                    </div>
                    <Link
                      to="/admin/settings"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Settings size={16} />
                      Settings
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
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
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-30 ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedMenu === item.label;
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.label}>
                  {hasChildren ? (
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all relative overflow-hidden ${
                        isExpanded
                          ? 'bg-[#003366] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {showStars === item.label && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div className="absolute top-1/4 left-0 w-2 h-2 bg-white rounded-full opacity-0 animate-[shooting-star_3s_ease-in-out] shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]"></div>
                          <div className="absolute top-1/3 left-0 w-2 h-2 bg-yellow-300 rounded-full opacity-0 animate-[shooting-star_3s_ease-in-out_0.5s] shadow-[0_0_20px_5px_rgba(253,185,19,0.8)]"></div>
                          <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-200 rounded-full opacity-0 animate-[shooting-star_3s_ease-in-out_1s] shadow-[0_0_20px_5px_rgba(191,219,254,0.8)]"></div>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                  ) : (
                    <Link
                      to={item.path!}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive(item.path!)
                          ? 'bg-[#003366] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasChildren && isExpanded && (
                    <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {item.children!.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMobileSidebarOpen(false)}
                          className={`block px-4 py-3 rounded-lg transition-all ${
                            isActive(child.path)
                              ? 'bg-[#E6F0FF] border-l-4 border-[#003366] text-[#003366] font-medium'
                              : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                          }`}
                        >
                          <div className="text-sm font-medium">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 mt-auto">
            <div className="bg-gradient-to-br from-[#003366] to-[#00509E] rounded-lg p-4 text-white">
              <h4 className="font-semibold text-sm mb-2">System Status</h4>
              <p className="text-xs mb-3 text-blue-100">
                All systems operational
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">Online</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
