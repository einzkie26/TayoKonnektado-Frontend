import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Users,
  DollarSign,
  ShoppingBag,
  Headphones,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of system performance and key metrics</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border-l-4 border-l-[#003366] hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Customers</CardTitle>
              <Users className="text-[#003366]" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">1,245</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp size={12} />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Revenue</CardTitle>
              <DollarSign className="text-green-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₱1.2M</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp size={12} />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Services</CardTitle>
              <ShoppingBag className="text-blue-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,089</div>
              <p className="text-xs text-gray-500 mt-1">87% of total customers</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/support/tickets')}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Open Tickets</CardTitle>
              <Headphones className="text-orange-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">23</div>
              <p className="text-xs text-gray-500 mt-1">5 high priority</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#003366]">Recent Activity</CardTitle>
              <CardDescription>Latest system events and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">New Customer Registration</p>
                    <p className="text-sm text-gray-500">Maria Santos signed up for Fiber 100 Mbps</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">5 minutes ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Payment Received</p>
                    <p className="text-sm text-gray-500">₱1,299.00 from Juan Dela Cruz</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">15 minutes ago</span>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">₱1,299</span>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Support Ticket Created</p>
                    <p className="text-sm text-gray-500">TK-2026-0156 - Connection issue reported</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">30 minutes ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Service Upgrade</p>
                    <p className="text-sm text-gray-500">Customer upgraded to Fiber 200 Mbps</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Quick Actions</CardTitle>
              <CardDescription>Common admin tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-between bg-[#003366] hover:bg-[#00509E]" onClick={() => navigate('/admin/accounts/customers')}>
                Manage Customers
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/admin/orders/all')}>
                View Orders
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/admin/billing/payments')}>
                Process Payments
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/admin/support/tickets')}>
                Support Tickets
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/admin/reports/revenue')}>
                View Reports
                <ArrowUpRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
