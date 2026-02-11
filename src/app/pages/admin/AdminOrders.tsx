import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    { id: 'ORD-2026-001', customer: 'Juan Dela Cruz', service: 'Fiber 100 Mbps', amount: '₱1,299.00', status: 'Completed', date: 'Feb 1, 2026' },
    { id: 'ORD-2026-002', customer: 'Maria Santos', service: 'Fiber 200 Mbps', amount: '₱1,899.00', status: 'Pending', date: 'Feb 5, 2026' },
    { id: 'ORD-2026-003', customer: 'Pedro Garcia', service: 'Fiber 50 Mbps', amount: '₱999.00', status: 'Completed', date: 'Feb 3, 2026' },
    { id: 'ORD-2026-004', customer: 'Ana Reyes', service: 'Premium Router', amount: '₱500.00', status: 'Processing', date: 'Feb 6, 2026' },
  ];

  const filteredOrders = orders.filter(o => 
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (orderId: string) => {
    alert(`Order ${orderId} approved!`);
  };

  const handleReject = (orderId: string) => {
    if (confirm('Are you sure you want to reject this order?')) {
      alert(`Order ${orderId} rejected!`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Processing': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Orders Management</h1>
          <p className="text-gray-600">View and manage all customer orders</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <p className="text-sm text-gray-600">Total Orders</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#003366]">{orders.length}</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <p className="text-sm text-gray-600">Pending</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">1</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <p className="text-sm text-gray-600">Processing</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader>
              <p className="text-sm text-gray-600">Revenue Today</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₱4.7K</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by order ID or customer..."
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
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Service</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Date</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-3 font-mono text-xs">{order.id}</td>
                      <td className="px-2 sm:px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{order.customer}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm hidden lg:table-cell">{order.service}</td>
                      <td className="px-2 sm:px-4 py-3 font-semibold text-gray-800 text-xs sm:text-sm">{order.amount}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs hidden md:table-cell">{order.date}</td>
                      <td className="px-2 sm:px-4 py-3">
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </td>
                      <td className="px-2 sm:px-4 py-3">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                            <Eye size={16} />
                          </Button>
                          {order.status === 'Pending' && (
                            <>
                              <Button variant="ghost" size="sm" className="text-green-600 hidden sm:inline-flex" onClick={() => handleApprove(order.id)}>
                                <CheckCircle size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hidden sm:inline-flex" onClick={() => handleReject(order.id)}>
                                <XCircle size={16} />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {selectedOrder && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4 bg-white">
              <CardHeader>
                <CardTitle className="text-[#003366]">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-sm text-[#003366]">{selectedOrder.id}</span>
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
                    <span className="font-semibold text-[#003366]">{selectedOrder.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-[#003366]">{selectedOrder.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={getStatusColor(selectedOrder.status)}>{selectedOrder.status}</Badge>
                  </div>
                </div>
                <Button onClick={() => setSelectedOrder(null)} className="w-full bg-[#003366] hover:bg-[#00509E]">
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
