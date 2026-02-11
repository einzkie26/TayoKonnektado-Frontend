import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Download, FileText, Calendar, FileSpreadsheet, File } from 'lucide-react';
import { useState } from 'react';

export function DownloadReports() {
  const [selectedFormat, setSelectedFormat] = useState('PDF');

  const reportTypes = [
    {
      name: 'Complete Account Summary',
      description: 'All account details, services, and billing history',
      icon: FileText,
      size: '~2-5 MB',
    },
    {
      name: 'Billing & Payment History',
      description: 'Invoices, payments, and transaction records',
      icon: File,
      size: '~500 KB',
    },
    {
      name: 'Data Usage Report',
      description: 'Detailed bandwidth consumption statistics',
      icon: FileSpreadsheet,
      size: '~1 MB',
    },
    {
      name: 'Service Activity Log',
      description: 'Connection history, uptime, and incidents',
      icon: FileText,
      size: '~300 KB',
    },
    {
      name: 'Support Ticket History',
      description: 'All support requests and resolutions',
      icon: FileText,
      size: '~200 KB',
    },
  ];

  const recentDownloads = [
    { name: 'Billing_Report_Jan2026.pdf', date: 'Feb 5, 2026', size: '485 KB' },
    { name: 'Usage_Report_Dec2025.xlsx', date: 'Jan 10, 2026', size: '1.2 MB' },
    { name: 'Account_Summary_2025.pdf', date: 'Jan 2, 2026', size: '3.4 MB' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Download Reports</h1>
          <p className="text-gray-600">Export your account data and reports in various formats</p>
        </div>

        {/* Export Settings */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardHeader>
            <CardTitle className="text-xl">Export Settings</CardTitle>
            <CardDescription className="text-blue-100">
              Choose your preferred format for downloading reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label className="text-white mb-3 block">Select File Format</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['PDF', 'Excel (XLSX)', 'CSV'].map((format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedFormat === format
                          ? 'bg-white text-[#003366] border-white'
                          : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {format === 'PDF' && <File size={20} />}
                        {format === 'Excel (XLSX)' && <FileSpreadsheet size={20} />}
                        {format === 'CSV' && <FileText size={20} />}
                        <span className="font-semibold">{format}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-blue-100">
                  <strong>Selected Format:</strong> {selectedFormat}
                </p>
                <p className="text-xs text-blue-100 mt-1">
                  All reports will be exported in this format. You can change this anytime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Reports */}
        <div>
          <h2 className="text-xl font-bold text-[#003366] mb-4">Available Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTypes.map((report) => {
              const Icon = report.icon;
              return (
                <Card key={report.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-[#E6F0FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#003366]" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-[#003366] text-lg mb-1">{report.name}</CardTitle>
                          <CardDescription className="text-sm">{report.description}</CardDescription>
                          <p className="text-xs text-gray-500 mt-2">Estimated size: {report.size}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full bg-[#003366] hover:bg-[#00509E]">
                        <Download size={16} className="mr-2" />
                        Download as {selectedFormat}
                      </Button>
                      <Button variant="outline" className="w-full border-[#003366] text-[#003366]">
                        <Calendar size={16} className="mr-2" />
                        Schedule Export
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Downloads */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Recent Downloads</CardTitle>
            <CardDescription>Your previously exported reports</CardDescription>
          </CardHeader>
          <CardContent>
            {recentDownloads.length > 0 ? (
              <div className="space-y-3">
                {recentDownloads.map((download, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#E6F0FF] rounded-full flex items-center justify-center">
                        <FileText className="text-[#003366]" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#003366]">{download.name}</p>
                        <p className="text-sm text-gray-500">
                          {download.date} • {download.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-[#003366] text-[#003366]">
                      <Download size={14} className="mr-1" />
                      Re-download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No recent downloads</p>
            )}
          </CardContent>
        </Card>

        {/* Automated Reports */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-3 flex items-center gap-2">
              <Calendar size={20} />
              Automated Monthly Reports
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Set up automatic monthly report generation and receive them via email. Perfect for record keeping and expense tracking.
            </p>
            <Button className="bg-[#003366] hover:bg-[#00509E]">
              Configure Auto-Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}