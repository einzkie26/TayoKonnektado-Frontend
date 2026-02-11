import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Search, Eye, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const customers = [
    { id: 'CUST-001', name: 'Juan Dela Cruz', email: 'juan@example.com', plan: 'Fiber 100 Mbps', status: 'Active', balance: '₱0.00' },
    { id: 'CUST-002', name: 'Maria Santos', email: 'maria@example.com', plan: 'Fiber 200 Mbps', status: 'Active', balance: '₱1,299.00' },
    { id: 'CUST-003', name: 'Pedro Garcia', email: 'pedro@example.com', plan: 'Fiber 50 Mbps', status: 'Suspended', balance: '₱2,598.00' },
    { id: 'CUST-004', name: 'Ana Reyes', email: 'ana@example.com', plan: 'Fiber 100 Mbps', status: 'Active', balance: '₱0.00' },
  ];

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (customer: any) => {
    setSelectedCustomer(customer);
    setShowDetails(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      alert(`Customer ${id} deleted!`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Customer Management</h1>
          <p className="text-gray-600">Manage all customer accounts</p>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by name, email, or ID..."
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
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Customer ID</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Email</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Plan</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Balance</th>
                    <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-3 font-mono text-xs sm:text-sm">{customer.id}</td>
                      <td className="px-2 sm:px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{customer.name}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm hidden md:table-cell">{customer.email}</td>
                      <td className="px-2 sm:px-4 py-3 text-gray-600 text-xs sm:text-sm hidden lg:table-cell">{customer.plan}</td>
                      <td className="px-2 sm:px-4 py-3">
                        <Badge className={customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                          {customer.status}
                        </Badge>
                      </td>
                      <td className="px-2 sm:px-4 py-3 font-semibold text-gray-800 text-xs sm:text-sm hidden md:table-cell">{customer.balance}</td>
                      <td className="px-2 sm:px-4 py-3">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleViewDetails(customer)}>
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hidden sm:inline-flex" onClick={() => handleDelete(customer.id)}>
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {showDetails && selectedCustomer && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4 bg-white">
              <CardHeader>
                <CardTitle className="text-[#003366]">Customer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Customer ID</p>
                    <p className="font-semibold text-[#003366]">{selectedCustomer.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <Badge className={selectedCustomer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {selectedCustomer.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-semibold text-[#003366]">{selectedCustomer.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-[#003366]">{selectedCustomer.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Current Plan</p>
                    <p className="font-semibold text-[#003366]">{selectedCustomer.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Outstanding Balance</p>
                    <p className="font-semibold text-[#003366]">{selectedCustomer.balance}</p>
                  </div>
                </div>
                <Button onClick={() => setShowDetails(false)} className="w-full bg-[#003366] hover:bg-[#00509E]">
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
