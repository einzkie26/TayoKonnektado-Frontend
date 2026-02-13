import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Badge } from '@/app/components/ui/badge';
import { User, Mail, Phone, MapPin, Search, Edit } from 'lucide-react';
import { useState } from 'react';

export function AdminAccountDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [accounts, setAccounts] = useState([
    { id: 'CUST-001', name: 'Juan Dela Cruz', email: 'juan@example.com', phone: '+63 912 345 6789', address: '123 Main St, Manila', status: 'Active', plan: 'Fiber 100 Mbps' },
    { id: 'CUST-002', name: 'Maria Santos', email: 'maria@example.com', phone: '+63 923 456 7890', address: '456 Oak Ave, Quezon City', status: 'Active', plan: 'Fiber 200 Mbps' },
    { id: 'CUST-003', name: 'Pedro Garcia', email: 'pedro@example.com', phone: '+63 934 567 8901', address: '789 Pine Rd, Makati', status: 'Suspended', plan: 'Fiber 50 Mbps' },
  ]);

  const filteredAccounts = accounts.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setAccounts(accounts.map(a => a.id === selectedAccount.id ? selectedAccount : a));
    alert('Account updated successfully!');
    setShowEdit(false);
    setSelectedAccount(null);
  };

return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Account Details</h1>
          <p className="text-gray-600">View and manage customer account information</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
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
          <CardContent>
            <div className="space-y-4">
              {filteredAccounts.map((account) => (
                <Card key={account.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="text-[#003366]" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#003366] text-lg">{account.name}</h3>
                            <p className="text-sm text-gray-500">{account.id}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-400" />
                            <span className="text-gray-600">{account.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-400" />
                            <span className="text-gray-600">{account.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-gray-600">{account.address}</span>
                          </div>
                          <div>
                            <Badge className={account.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                              {account.status}
                            </Badge>
                            <span className="ml-2 text-gray-600">{account.plan}</span>
                          </div>
                        </div>
                      </div>
                      <Button onClick={() => { setSelectedAccount(account); setShowEdit(true); }} className="bg-[#003366] hover:bg-[#00509E] w-full sm:w-auto">
                        <Edit size={16} className="mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {showEdit && selectedAccount && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Edit Account Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveEdit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-[#003366] font-semibold">Name</Label>
                      <Input
                        value={selectedAccount.name}
                        onChange={(e) => setSelectedAccount({...selectedAccount, name: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Email</Label>
                      <Input
                        value={selectedAccount.email}
                        onChange={(e) => setSelectedAccount({...selectedAccount, email: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Phone</Label>
                      <Input
                        value={selectedAccount.phone}
                        onChange={(e) => setSelectedAccount({...selectedAccount, phone: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Address</Label>
                      <Input
                        value={selectedAccount.address}
                        onChange={(e) => setSelectedAccount({...selectedAccount, address: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Plan</Label>
                      <Input
                        value={selectedAccount.plan}
                        onChange={(e) => setSelectedAccount({...selectedAccount, plan: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-[#003366] font-semibold">Status</Label>
                      <select
                        value={selectedAccount.status}
                        onChange={(e) => setSelectedAccount({...selectedAccount, status: e.target.value})}
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
                    <Button type="button" onClick={() => { setShowEdit(false); setSelectedAccount(null); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
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
