import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { useTheme } from '@/app/context/ThemeContext';
import logo from '@/assets/logo.png';
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Headphones,
  User,
  ChevronDown,
  ChevronRight,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Moon,
  Sun,
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
    path: '/dashboard',
  },
  {
    label: 'My Orders & Services',
    icon: ShoppingBag,
    children: [
      { label: 'Active Services', path: '/dashboard/services/active', description: 'View your current subscriptions' },
      { label: 'Order History', path: '/dashboard/services/history', description: 'Past orders and transactions' },
      { label: 'Upgrade/Downgrade', path: '/dashboard/services/manage', description: 'Manage your plan' },
      { label: 'Add-ons', path: '/dashboard/services/addons', description: 'Extra features and services' },
    ],
  },
  {
    label: 'Reports',
    icon: FileText,
    children: [
      { label: 'Billing Reports', path: '/dashboard/reports/billing', description: 'Payment history and invoices' },
      { label: 'Usage Reports', path: '/dashboard/reports/usage', description: 'Data consumption and activity' },
      { label: 'Service Reports', path: '/dashboard/reports/service', description: 'Service status and uptime' },
      { label: 'Download Reports', path: '/dashboard/reports/download', description: 'Export your data' },
    ],
  },
  {
    label: 'Support Request',
    icon: Headphones,
    children: [
      { label: 'Create Ticket', path: '/dashboard/support/create', description: 'Submit a new support request' },
      { label: 'My Tickets', path: '/dashboard/support/tickets', description: 'View all your tickets' },
      { label: 'Track Status', path: '/dashboard/support/track', description: 'Check ticket progress' },
      { label: 'FAQ', path: '/dashboard/support/faq', description: 'Frequently asked questions' },
    ],
  },
  {
    label: 'Account Management',
    icon: User,
    children: [
      { label: 'Profile Settings', path: '/dashboard/account/profile', description: 'Update personal information' },
      { label: 'Billing Information', path: '/dashboard/account/billing', description: 'Payment methods and address' },
      { label: 'Security', path: '/dashboard/account/security', description: 'Password and authentication' },
      { label: 'Notifications', path: '/dashboard/account/notifications', description: 'Email and SMS preferences' },
    ],
  },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showStars, setShowStars] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
    // Handle logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <Link to="/dashboard" className="flex items-center gap-3">
              <img src={logo} alt="TayoKonnektado Logo" className="h-10 object-contain" />
              <span className="text-xl font-bold text-[#003366] hidden sm:block">TayoKonnektado</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FDB913] rounded-full"></span>
            </Button>

            {/* Profile Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">Juan Dela Cruz</span>
                <ChevronDown size={16} className="text-gray-500" />
              </Button>

              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-40">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#003366]">Juan Dela Cruz</p>
                      <p className="text-xs text-gray-500">juan@example.com</p>
                    </div>
                    <Link
                      to="/dashboard/account/profile"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <User size={16} />
                      My Profile
                    </Link>
                    <Link
                      to="/dashboard/account/security"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Settings size={16} />
                      Settings
                    </Link>
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
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
              <h4 className="font-semibold text-sm mb-2">Need Help?</h4>
              <p className="text-xs mb-3 text-blue-100">
                Contact our support team for assistance
              </p>
              <Link to="/dashboard/support/create">
                <Button size="sm" className="w-full bg-[#FDB913] text-[#003366] hover:bg-[#FCA311] animate-pulse shadow-[0_0_20px_5px_rgba(253,185,19,0.6)]">
                  Contact Support
                </Button>
              </Link>
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
