import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Download, Users, TrendingUp } from 'lucide-react';

export function AdminCustomerReports() {
  const handleExport = () => {
    alert('Exporting customer report...');
  };

  const handleFilterByDate = () => {
    alert('Filter by date range');
  };

  const handleViewDetails = (month: string) => {
    alert(`View details for ${month}`);
  };
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Customer Reports</h1>
            <p className="text-gray-600">View customer analytics and reports</p>
          </div>
          <Button onClick={handleExport} className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Customers</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">1,245</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp size={12} />
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Active</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1,089</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">New This Month</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">45</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Churned</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">12</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Customer Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['January', 'February', 'March', 'April', 'May', 'June'].map((month, idx) => (
                  <div key={month} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{month}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-48 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003366] h-2 rounded-full"
                          style={{ width: `${60 + idx * 7}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 w-16 text-right">{1000 + idx * 40}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Customer by Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { plan: 'Fiber 50 Mbps', count: 234 },
                  { plan: 'Fiber 100 Mbps', count: 567 },
                  { plan: 'Fiber 200 Mbps', count: 288 },
                  { plan: 'Fiber 500 Mbps', count: 156 },
                ].map((item) => (
                  <div key={item.plan} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{item.plan}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-48 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(item.count / 567) * 100}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 w-16 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
