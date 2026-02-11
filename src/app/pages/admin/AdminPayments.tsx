import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye, Download } from 'lucide-react';
import { useState } from 'react';

export function AdminPayments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const payments = [
    { id: 'PAY-2026-001', customer: 'Juan Dela Cruz', amount: '₱1,299.00', method: 'GCash', status: 'Success', date: 'Feb 1, 2026 10:30 AM' },
    { id: 'PAY-2026-002', customer: 'Maria Santos', amount: '₱1,899.00', method: 'Credit Card', status: 'Success', date: 'Feb 5, 2026 2:15 PM' },
    { id: 'PAY-2026-003', customer: 'Pedro Garcia', amount: '₱999.00', method: 'PayMaya', status: 'Failed', date: 'Feb 3, 2026 9:45 AM' },
    { id: 'PAY-2026-004', customer: 'Ana Reyes', amount: '₱1,299.00', method: 'GCash', status: 'Pending', date: 'Feb 6, 2026 11:20 AM' },
  ];

  const filteredPayments = payments.filter(p => 
    p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const totalRevenue = payments.filter(p => p.status === 'Success').reduce((sum, p) => sum + parseFloat(p.amount.replace('₱', '').replace(',', '')), 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Payments</h1>
            <p className="text-gray-600">View and manage all payment transactions</p>
          </div>
          <Button className="bg-[#003366] hover:bg-[#00509E]">
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
              <div className="text-2xl font-bold text-green-600">₱{totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Successful</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Pending</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">1</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Failed</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">1</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by payment ID or customer..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Payment ID</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Method</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Date & Time</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-3 font-mono text-xs sm:text-sm">{payment.id}</td>
                      <td className="px-2 sm:px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{payment.customer}</td>
                      <td className="px-2 sm:px-4 py-3 font-semibold text-gray-800 text-xs sm:text-sm">{payment.amount}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm hidden md:table-cell">{payment.method}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs hidden lg:table-cell">{payment.date}</td>
                      <td className="px-2 sm:px-4 py-3">
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </td>
                      <td className="px-2 sm:px-4 py-3">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedPayment(payment)}>
                          <Eye size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {selectedPayment && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4 bg-white">
              <CardHeader>
                <CardTitle className="text-[#003366]">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-mono text-sm text-[#003366]">{selectedPayment.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold text-[#003366]">{selectedPayment.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-[#003366] text-lg">{selectedPayment.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold text-[#003366]">{selectedPayment.method}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-semibold text-[#003366]">{selectedPayment.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={getStatusColor(selectedPayment.status)}>{selectedPayment.status}</Badge>
                  </div>
                </div>
                <Button onClick={() => setSelectedPayment(null)} className="w-full bg-[#003366] hover:bg-[#00509E]">
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
