import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye } from 'lucide-react';
import { useState } from 'react';

export function AdminSubscriptions() {
  const [searchTerm, setSearchTerm] = useState('');

  const subscriptions = [
    { id: 'SUB-001', customer: 'Juan Dela Cruz', plan: 'Fiber 100 Mbps', status: 'Active', startDate: 'Jan 15, 2025', endDate: 'Jan 15, 2026', amount: '₱1,299.00' },
    { id: 'SUB-002', customer: 'Maria Santos', plan: 'Fiber 200 Mbps', status: 'Active', startDate: 'Feb 1, 2025', endDate: 'Feb 1, 2026', amount: '₱1,899.00' },
    { id: 'SUB-003', customer: 'Pedro Garcia', plan: 'Fiber 50 Mbps', status: 'Expired', startDate: 'Dec 1, 2024', endDate: 'Dec 1, 2025', amount: '₱999.00' },
  ];

  const filteredSubscriptions = subscriptions.filter(s =>
    s.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (id: string) => {
    alert(`View subscription ${id}`);
  };

  const handleRenew = (id: string) => {
    alert(`Renew subscription ${id}`);
  };

  const handleCancel = (id: string) => {
    if (confirm('Cancel this subscription?')) {
      alert(`Subscription ${id} cancelled`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Subscriptions</h1>
          <p className="text-gray-600">Manage customer subscriptions</p>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by customer or subscription ID..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Subscription ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Plan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Start Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">End Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{sub.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{sub.customer}</td>
                      <td className="px-4 py-3 text-gray-600">{sub.plan}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{sub.startDate}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{sub.endDate}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{sub.amount}</td>
                      <td className="px-4 py-3">
                        <Badge className={sub.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                          {sub.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm" onClick={() => handleView(sub.id)}>
                          <Eye size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredSubscriptions.map((sub) => (
                <div key={sub.id} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-600">{sub.id}</span>
                    <Badge className={sub.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {sub.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{sub.customer}</p>
                    <p className="text-sm text-gray-600">{sub.plan}</p>
                    <p className="text-lg font-semibold text-gray-800">{sub.amount}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                      <p>Start: {sub.startDate}</p>
                      <p>End: {sub.endDate}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleView(sub.id)}>
                      <Eye size={16} />
                    </Button>
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
