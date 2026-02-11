import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Download, TrendingUp } from 'lucide-react';

export function AdminRevenueReports() {
  const handleExport = () => {
    alert('Exporting revenue report...');
  };

return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Revenue Reports</h1>
            <p className="text-gray-600">View revenue analytics and reports</p>
          </div>
          <Button onClick={handleExport} className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Revenue</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₱1.2M</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp size={12} />
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">This Month</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">₱450K</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">This Week</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">₱105K</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Today</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">₱15K</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Monthly Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['January', 'February', 'March', 'April', 'May', 'June'].map((month, idx) => (
                <div key={month} className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{month}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-64 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${70 + idx * 5}%` }}
                      />
                    </div>
                    <span className="font-semibold text-gray-800 w-20 text-right">₱{(400 + idx * 50).toLocaleString()}K</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
