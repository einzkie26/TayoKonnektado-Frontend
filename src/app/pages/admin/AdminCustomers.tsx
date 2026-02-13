import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Badge } from '@/app/components/ui/badge';
import { Search, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showActions, setShowActions] = useState<string | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 'CUST-001', name: 'Juan Dela Cruz', email: 'juan@example.com', plan: 'Fiber 100 Mbps', status: 'Active', balance: '₱0.00' },
    { id: 'CUST-002', name: 'Maria Santos', email: 'maria@example.com', plan: 'Fiber 200 Mbps', status: 'Active', balance: '₱1,299.00' },
    { id: 'CUST-003', name: 'Pedro Garcia', email: 'pedro@example.com', plan: 'Fiber 50 Mbps', status: 'Suspended', balance: '₱2,598.00' },
    { id: 'CUST-004', name: 'Ana Reyes', email: 'ana@example.com', plan: 'Fiber 100 Mbps', status: 'Active', balance: '₱0.00' },
  ]);

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
      setCustomers(customers.filter(c => c.id !== id));
      setShowActions(null);
      alert(`Customer ${id} deleted!`);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomers(customers.map(c => c.id === selectedCustomer.id ? selectedCustomer : c));
    alert('Customer updated successfully!');
    setShowEdit(false);
    setSelectedCustomer(null);
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
                        <div className="hidden sm:flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleViewDetails(customer)}>
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => { setSelectedCustomer(customer); setShowEdit(true); }}>
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDelete(customer.id)}>
                            <Trash2 size={16} />
                          </Button>
                        </div>
                        <div className="sm:hidden relative">
                          <Button variant="ghost" size="sm" onClick={() => setShowActions(showActions === customer.id ? null : customer.id)}>
                            <MoreVertical size={16} />
                          </Button>
                          {showActions === customer.id && (
                            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                              <button onClick={() => { handleViewDetails(customer); setShowActions(null); }} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                                <Eye size={14} /> View
                              </button>
                              <button onClick={() => { setSelectedCustomer(customer); setShowEdit(true); setShowActions(null); }} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                                <Edit size={14} /> Edit
                              </button>
                              <button onClick={() => { handleDelete(customer.id); setShowActions(null); }} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600">
                                <Trash2 size={14} /> Delete
                              </button>
                            </div>
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

        {showDetails && selectedCustomer && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
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

        {showEdit && selectedCustomer && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Edit Customer</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveEdit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[#003366] font-semibold">Name</Label>
                      <Input
                        value={selectedCustomer.name}
                        onChange={(e) => setSelectedCustomer({...selectedCustomer, name: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Email</Label>
                      <Input
                        value={selectedCustomer.email}
                        onChange={(e) => setSelectedCustomer({...selectedCustomer, email: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Plan</Label>
                      <Input
                        value={selectedCustomer.plan}
                        onChange={(e) => setSelectedCustomer({...selectedCustomer, plan: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Status</Label>
                      <select
                        value={selectedCustomer.status}
                        onChange={(e) => setSelectedCustomer({...selectedCustomer, status: e.target.value})}
                        className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2"
                      >
                        <option value="Active">Active</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                      Save Changes
                    </Button>
                    <Button type="button" onClick={() => { setShowEdit(false); setSelectedCustomer(null); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
