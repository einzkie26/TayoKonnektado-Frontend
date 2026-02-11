import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Activity, TrendingUp, Download, Calendar } from 'lucide-react';

export function UsageReports() {
  const usageData = [
    { date: 'Feb 1-7, 2026', download: '125 GB', upload: '45 GB', total: '170 GB', peak: '95 Mbps' },
    { date: 'Jan 25-31, 2026', download: '132 GB', upload: '52 GB', total: '184 GB', peak: '98 Mbps' },
    { date: 'Jan 18-24, 2026', download: '118 GB', upload: '38 GB', total: '156 GB', peak: '92 Mbps' },
    { date: 'Jan 11-17, 2026', download: '145 GB', upload: '55 GB', total: '200 GB', peak: '99 Mbps' },
    { date: 'Jan 4-10, 2026', download: '110 GB', upload: '42 GB', total: '152 GB', peak: '90 Mbps' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Usage Reports</h1>
            <p className="text-gray-600">Monitor your data consumption and internet activity</p>
          </div>
          <Button className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Export Report
          </Button>
        </div>

        {/* Current Billing Cycle */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity size={24} />
              Current Billing Cycle
            </CardTitle>
            <CardDescription className="text-blue-100">Feb 1 - Feb 28, 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-blue-100 text-sm mb-1">Total Usage</p>
                <p className="text-4xl font-bold">245 GB</p>
                <p className="text-blue-100 text-xs mt-1">Unlimited plan</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Download</p>
                <p className="text-4xl font-bold">180 GB</p>
                <p className="text-blue-100 text-xs mt-1">73% of total</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Upload</p>
                <p className="text-4xl font-bold">65 GB</p>
                <p className="text-blue-100 text-xs mt-1">27% of total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader className="pb-2">
              <CardDescription>Average Daily Usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">35 GB/day</div>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <TrendingUp size={12} className="text-green-500" />
                <span className="text-green-600">+12% from last month</span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardDescription>Peak Speed Recorded</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98.5 Mbps</div>
              <p className="text-xs text-gray-500 mt-1">99% of subscribed speed</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#FDB913]">
            <CardHeader className="pb-2">
              <CardDescription>Connection Uptime</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">99.8%</div>
              <p className="text-xs text-gray-500 mt-1">7 days, 2 hours online</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Usage Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Weekly Usage Breakdown</CardTitle>
            <CardDescription>Detailed data consumption for the past 5 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Period</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Download</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Upload</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Peak Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {usageData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="font-medium text-[#003366]">{row.date}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.download}</td>
                      <td className="px-4 py-3 text-gray-700">{row.upload}</td>
                      <td className="px-4 py-3 font-semibold text-[#003366]">{row.total}</td>
                      <td className="px-4 py-3 text-green-600 font-medium">{row.peak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Usage Tips */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-3 flex items-center gap-2">
              <Activity size={20} />
              Usage Tips
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Your usage is consistent with streaming HD video content for 4-6 hours daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Consider upgrading to a higher speed plan if you frequently experience slowdowns during peak hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Your connection uptime is excellent! Average uptime across all customers is 99.2%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
