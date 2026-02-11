import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Download, FileText, Calendar } from 'lucide-react';

export function BillingReports() {
  const invoices = [
    { month: 'February 2026', amount: '₱1,299.00', status: 'Paid', date: 'Feb 1, 2026', invoice: 'INV-2026-02' },
    { month: 'January 2026', amount: '₱1,299.00', status: 'Paid', date: 'Jan 1, 2026', invoice: 'INV-2026-01' },
    { month: 'December 2025', amount: '₱1,299.00', status: 'Paid', date: 'Dec 1, 2025', invoice: 'INV-2025-12' },
    { month: 'November 2025', amount: '₱1,299.00', status: 'Paid', date: 'Nov 1, 2025', invoice: 'INV-2025-11' },
    { month: 'October 2025', amount: '₱1,299.00', status: 'Paid', date: 'Oct 1, 2025', invoice: 'INV-2025-10' },
  ];

  const summary = {
    totalPaid: '₱6,495.00',
    averageMonthly: '₱1,299.00',
    lastPayment: 'Feb 1, 2026',
    nextDue: 'Mar 1, 2026',
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Billing Reports</h1>
            <p className="text-gray-600">View your payment history and download invoices</p>
          </div>
          <Button className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Download All
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardDescription>Total Paid (Last 5 Months)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{summary.totalPaid}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader className="pb-2">
              <CardDescription>Average Monthly Bill</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">{summary.averageMonthly}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardDescription>Last Payment Date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-gray-800">{summary.lastPayment}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#FDB913]">
            <CardHeader className="pb-2">
              <CardDescription>Next Due Date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-gray-800">{summary.nextDue}</div>
            </CardContent>
          </Card>
        </div>

        {/* Invoices Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Payment History & Invoices</CardTitle>
            <CardDescription>All your billing statements and receipts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div
                  key={invoice.invoice}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="text-[#003366]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003366]">{invoice.month}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {invoice.date}
                        </span>
                        <span>•</span>
                        <span>{invoice.invoice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#003366]">{invoice.amount}</p>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                        {invoice.status}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="border-[#003366] text-[#003366]">
                      <Download size={14} className="mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
