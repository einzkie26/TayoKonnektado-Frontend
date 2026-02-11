import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Wifi,
  DollarSign,
  AlertCircle,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Welcome back, Juan!</h1>
          <p className="text-gray-600">Here's what's happening with your internet service today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-[#003366] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Plan</CardTitle>
              <Wifi className="text-[#003366]" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">Fiber 100 Mbps</div>
              <p className="text-xs text-gray-500 mt-1">Active since Jan 2025</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Balance</CardTitle>
              <DollarSign className="text-green-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₱1,299.00</div>
              <p className="text-xs text-gray-500 mt-1">Due: Feb 15, 2026</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/dashboard/support/tickets')}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Support Tickets</CardTitle>
              <AlertCircle className="text-orange-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">2 Open</div>
              <p className="text-xs text-gray-500 mt-1">1 pending response</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#FDB913] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Data Usage</CardTitle>
              <TrendingUp className="text-[#FDB913]" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">245 GB</div>
              <p className="text-xs text-gray-500 mt-1">This billing cycle</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#003366]">Recent Activity</CardTitle>
              <CardDescription>Your latest account updates and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Payment Received</p>
                    <p className="text-sm text-gray-500">Monthly subscription payment of ₱1,299.00</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Feb 1, 2026 at 10:30 AM</span>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">₱1,299</span>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wifi className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Service Active</p>
                    <p className="text-sm text-gray-500">Your Fiber 100 Mbps plan is running smoothly</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Jan 28, 2026 at 8:00 AM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Support Ticket Updated</p>
                    <p className="text-sm text-gray-500">Ticket #TK-2026-0123 - Technician assigned</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Jan 26, 2026 at 2:15 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Billing Cycle Started</p>
                    <p className="text-sm text-gray-500">New billing period: Feb 1 - Feb 28, 2026</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">Feb 1, 2026 at 12:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-between bg-[#003366] hover:bg-[#00509E]" onClick={() => navigate('/dashboard/account/billing')}>
                Pay Bill
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/dashboard/reports/billing')}>
                View Invoice
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/dashboard/support/create')}>
                Create Ticket
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/dashboard/services/manage')}>
                Upgrade Plan
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/dashboard/reports/usage')}>
                Usage Report
                <ArrowUpRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
