import { StaffLayout } from '@/app/components/StaffLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye } from 'lucide-react';
import { useState } from 'react';

export function StaffOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showView, setShowView] = useState(false);

  const orders = [
    { id: 'ORD-2026-001', customer: 'Juan Dela Cruz', service: 'Fiber 100 Mbps', amount: '₱1,299.00', date: 'Feb 1, 2026', status: 'Completed' },
    { id: 'ORD-2026-002', customer: 'Maria Santos', service: 'Fiber 200 Mbps', amount: '₱1,899.00', date: 'Feb 2, 2026', status: 'Pending' },
    { id: 'ORD-2026-003', customer: 'Pedro Garcia', service: 'Fiber 50 Mbps', amount: '₱999.00', date: 'Feb 3, 2026', status: 'Completed' },
  ];

  const filteredOrders = orders.filter(o =>
    o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (order: any) => {
    setSelectedOrder(order);
    setShowView(true);
  };

  return (
    <StaffLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Customer Orders</h1>
          <p className="text-gray-600">View customer order information</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by customer or order ID..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{order.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{order.customer}</td>
                      <td className="px-4 py-3 text-gray-600">{order.service}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{order.amount}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{order.date}</td>
                      <td className="px-4 py-3">
                        <Badge className={order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm" onClick={() => handleView(order)}>
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

        {showView && selectedOrder && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-[#003366] font-semibold">{selectedOrder.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold text-[#003366]">{selectedOrder.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-semibold text-[#003366]">{selectedOrder.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-[#003366] text-xl">{selectedOrder.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-[#003366]">{selectedOrder.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={selectedOrder.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                      {selectedOrder.status}
                    </Badge>
                  </div>
                </div>
                <Button onClick={() => { setShowView(false); setSelectedOrder(null); }} className="w-full bg-[#003366] hover:bg-[#00509E]">
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </StaffLayout>
  );
}
