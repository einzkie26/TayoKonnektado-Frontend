import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { CreditCard, Smartphone, Building } from 'lucide-react';

export function AdminPaymentMethods() {
  const methods = [
    { id: 1, name: 'GCash', type: 'E-Wallet', icon: Smartphone, transactions: 567, status: 'Active' },
    { id: 2, name: 'Credit Card', type: 'Card', icon: CreditCard, transactions: 234, status: 'Active' },
    { id: 3, name: 'PayMaya', type: 'E-Wallet', icon: Smartphone, transactions: 189, status: 'Active' },
    { id: 4, name: 'Bank Transfer', type: 'Bank', icon: Building, transactions: 123, status: 'Active' },
  ];

  const handleViewDetails = (id: number) => {
    alert(`View details for payment method ${id}`);
  };

return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Payment Methods</h1>
          <p className="text-gray-600">Manage available payment methods</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.id} className="border-l-4 border-l-[#003366]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="text-[#003366]" size={32} />
                    <Badge className="bg-green-100 text-green-700">{method.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#003366]">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Transactions</p>
                    <p className="text-2xl font-bold text-gray-800">{method.transactions}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => handleViewDetails(method.id)}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
}
