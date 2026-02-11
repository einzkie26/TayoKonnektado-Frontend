import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Download, TrendingUp } from 'lucide-react';

export function AdminServiceReports() {
  const handleExport = () => {
    alert('Exporting service report...');
  };

  const handleViewPlanDetails = (plan: string) => {
    alert(`View details for ${plan}`);
  };

  const handleGenerateReport = () => {
    alert('Generate custom report');
  };
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Service Reports</h1>
            <p className="text-gray-600">View service performance and analytics</p>
          </div>
          <Button onClick={handleExport} className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Active Services</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1,089</div>
              <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp size={12} />
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">New Installations</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">45</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Upgrades</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">23</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Cancellations</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">8</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Service Performance by Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { plan: 'Fiber 50 Mbps', active: 234, uptime: 99.8 },
                { plan: 'Fiber 100 Mbps', active: 567, uptime: 99.9 },
                { plan: 'Fiber 200 Mbps', active: 288, uptime: 99.7 },
                { plan: 'Fiber 500 Mbps', active: 156, uptime: 99.9 },
              ].map((item) => (
                <div key={item.plan} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{item.plan}</p>
                    <p className="text-sm text-gray-600">{item.active} active services</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{item.uptime}%</p>
                    <p className="text-xs text-gray-600">Uptime</p>
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
