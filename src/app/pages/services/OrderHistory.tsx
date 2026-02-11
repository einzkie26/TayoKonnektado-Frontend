import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle, Clock, Package, Download } from 'lucide-react';
import { useState } from 'react';

export function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const orders = [
    {
      id: 'ORD-2026-001',
      date: 'Feb 1, 2026',
      service: 'Fiber 100 Mbps Plan - Monthly Subscription',
      amount: '₱1,299.00',
      status: 'Completed',
      statusColor: 'green',
    },
    {
      id: 'ORD-2026-002',
      date: 'Jan 1, 2026',
      service: 'Fiber 100 Mbps Plan - Monthly Subscription',
      amount: '₱1,299.00',
      status: 'Completed',
      statusColor: 'green',
    },
    {
      id: 'ORD-2025-145',
      date: 'Dec 1, 2025',
      service: 'Fiber 100 Mbps Plan - Monthly Subscription',
      amount: '₱1,299.00',
      status: 'Completed',
      statusColor: 'green',
    },
    {
      id: 'ORD-2025-132',
      date: 'Nov 15, 2025',
      service: 'Installation Fee - Fiber 100 Mbps',
      amount: '₱2,500.00',
      status: 'Completed',
      statusColor: 'green',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Order History</h1>
            <p className="text-gray-600">View all your past orders and transactions</p>
          </div>
          <Button variant="outline" className="border-[#003366] text-[#003366]">
            <Download size={16} className="mr-2" />
            Export History
          </Button>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="text-[#003366]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-1">{order.service}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Order ID: {order.id}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {order.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#003366]">{order.amount}</p>
                    </div>
                    <span className={`px-4 py-2 bg-${order.statusColor}-100 text-${order.statusColor}-700 rounded-full font-semibold text-sm flex items-center gap-2 whitespace-nowrap`}>
                      <CheckCircle size={16} />
                      {order.status}
                    </span>
                    <Button variant="outline" size="sm" className="border-[#003366] text-[#003366]" onClick={() => setSelectedOrder(order)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Details Modal */}
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
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-[#003366]">{selectedOrder.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold text-[#003366]">{selectedOrder.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-[#003366] text-lg">{selectedOrder.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-green-600">{selectedOrder.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-[#003366]">GCash</span>
                </div>
              </div>
              <Button onClick={() => setSelectedOrder(null)} className="w-full bg-[#003366] hover:bg-[#00509E]">
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
}
