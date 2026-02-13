import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye, Download } from 'lucide-react';
import { useState } from 'react';

export function AdminInvoices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [showView, setShowView] = useState(false);

  const invoices = [
    { id: 'INV-2026-001', customer: 'Juan Dela Cruz', amount: '₱1,299.00', dueDate: 'Feb 15, 2026', status: 'Paid', issueDate: 'Jan 15, 2026' },
    { id: 'INV-2026-002', customer: 'Maria Santos', amount: '₱1,899.00', dueDate: 'Mar 1, 2026', status: 'Pending', issueDate: 'Feb 1, 2026' },
    { id: 'INV-2026-003', customer: 'Pedro Garcia', amount: '₱999.00', dueDate: 'Feb 1, 2026', status: 'Overdue', issueDate: 'Jan 1, 2026' },
  ];

  const filteredInvoices = invoices.filter(i =>
    i.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleView = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShowView(true);
  };

  const handleDownload = (id: string) => {
    alert(`Download invoice ${id}`);
  };


  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Invoices</h1>
          <p className="text-gray-600">Manage customer invoices</p>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by customer or invoice ID..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Invoice ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Issue Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{invoice.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{invoice.customer}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{invoice.amount}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{invoice.issueDate}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{invoice.dueDate}</td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleView(invoice)}>
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownload(invoice.id)}>
                            <Download size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredInvoices.map((invoice) => (
                <div key={invoice.id} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-600">{invoice.id}</span>
                    <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{invoice.customer}</p>
                    <p className="text-lg font-semibold text-gray-800">{invoice.amount}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                      <p>Issue: {invoice.issueDate}</p>
                      <p>Due: {invoice.dueDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleView(invoice)}>
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(invoice.id)}>
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {showView && selectedInvoice && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Invoice Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Invoice ID:</span>
                    <span className="font-mono text-[#003366] font-semibold">{selectedInvoice.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold text-[#003366]">{selectedInvoice.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-[#003366] text-xl">{selectedInvoice.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Issue Date:</span>
                    <span className="font-semibold text-[#003366]">{selectedInvoice.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-semibold text-[#003366]">{selectedInvoice.dueDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={getStatusColor(selectedInvoice.status)}>{selectedInvoice.status}</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => handleDownload(selectedInvoice.id)} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    <Download size={16} className="mr-2" />
                    Download Invoice
                  </Button>
                  <Button onClick={() => { setShowView(false); setSelectedInvoice(null); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
