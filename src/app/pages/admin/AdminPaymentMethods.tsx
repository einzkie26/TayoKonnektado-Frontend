import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { CreditCard, Smartphone, Building } from 'lucide-react';
import { useState } from 'react';

export function AdminPaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [methods, setMethods] = useState([
    { id: 1, name: 'GCash', type: 'E-Wallet', icon: Smartphone, transactions: 567, status: 'Active', revenue: '₱745,233.00' },
    { id: 2, name: 'Credit Card', type: 'Card', icon: CreditCard, transactions: 234, status: 'Active', revenue: '₱303,966.00' },
    { id: 3, name: 'PayMaya', type: 'E-Wallet', icon: Smartphone, transactions: 189, status: 'Active', revenue: '₱245,511.00' },
    { id: 4, name: 'Bank Transfer', type: 'Bank', icon: Building, transactions: 123, status: 'Active', revenue: '₱159,777.00' },
  ]);

  const handleViewDetails = (method: any) => {
    setSelectedMethod(method);
    setShowDetails(true);
  };

  const handleToggleStatus = () => {
    const newStatus = selectedMethod.status === 'Active' ? 'Inactive' : 'Active';
    setMethods(methods.map(m => m.id === selectedMethod.id ? {...m, status: newStatus} : m));
    setSelectedMethod({...selectedMethod, status: newStatus});
    alert(`Payment method ${newStatus === 'Active' ? 'activated' : 'deactivated'}!`);
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
                  <Button variant="outline" size="sm" className="w-full" onClick={() => handleViewDetails(method)}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {showDetails && selectedMethod && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Payment Method Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-center gap-4 pb-3 border-b">
                    {selectedMethod.icon && <selectedMethod.icon className="text-[#003366]" size={40} />}
                    <div>
                      <h3 className="text-xl font-bold text-[#003366]">{selectedMethod.name}</h3>
                      <p className="text-sm text-gray-600">{selectedMethod.type}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className={selectedMethod.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {selectedMethod.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Transactions:</span>
                    <span className="font-semibold text-[#003366] text-xl">{selectedMethod.transactions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Revenue:</span>
                    <span className="font-semibold text-[#003366] text-xl">{selectedMethod.revenue}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleToggleStatus} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    {selectedMethod.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button onClick={() => { setShowDetails(false); setSelectedMethod(null); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
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
