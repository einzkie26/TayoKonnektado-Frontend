import { StaffLayout } from '@/app/components/StaffLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Headphones, CheckCircle, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <StaffLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Dashboard</h1>
          <p className="text-gray-600">Overview of your support activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Open Tickets</CardTitle>
              <Headphones className="text-blue-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2</div>
              <p className="text-xs text-gray-500 mt-1">Assigned to you</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Progress</CardTitle>
              <Clock className="text-purple-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">1</div>
              <p className="text-xs text-gray-500 mt-1">Currently working on</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Resolved Today</CardTitle>
              <CheckCircle className="text-green-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">0</div>
              <p className="text-xs text-gray-500 mt-1">Completed tickets</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">High Priority</CardTitle>
              <AlertCircle className="text-red-500" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2</div>
              <p className="text-xs text-gray-500 mt-1">Needs attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Recent Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-red-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Connection drops</p>
                    <p className="text-sm text-gray-500">Juan Dela Cruz - TK-2026-0145</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Billing inquiry</p>
                    <p className="text-sm text-gray-500">Maria Santos - TK-2026-0144</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">5 hours ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-red-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Speed issue</p>
                    <p className="text-sm text-gray-500">Pedro Garcia - TK-2026-0143</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-between bg-[#003366] hover:bg-[#00509E]" onClick={() => navigate('/staff/tickets')}>
                View My Tickets
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="w-full justify-between border-[#003366] text-[#003366] hover:bg-[#E6F0FF]" onClick={() => navigate('/staff/orders')}>
                View Customer Orders
                <ArrowUpRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </StaffLayout>
  );
}
