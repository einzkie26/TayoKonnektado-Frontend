import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Eye } from 'lucide-react';
import { useState } from 'react';

export function AdminActiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [services] = useState([
    { id: 'SRV-001', customer: 'Juan Dela Cruz', service: 'Fiber 100 Mbps', status: 'Active', installDate: 'Jan 15, 2025', location: 'Manila' },
    { id: 'SRV-002', customer: 'Maria Santos', service: 'Fiber 200 Mbps', status: 'Active', installDate: 'Feb 1, 2025', location: 'Quezon City' },
    { id: 'SRV-003', customer: 'Pedro Garcia', service: 'Fiber 50 Mbps', status: 'Suspended', installDate: 'Dec 1, 2024', location: 'Makati' },
  ]);

  const filteredServices = services.filter(s =>
    s.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (id: string) => {
    alert(`View service ${id}`);
  };



  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Active Services</h1>
          <p className="text-gray-600">Monitor all active customer services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Active</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1,089</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Suspended</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">23</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">New This Month</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">45</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Pending Install</p>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">12</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by customer or service ID..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Service ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Install Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{service.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{service.customer}</td>
                      <td className="px-4 py-3 text-gray-600">{service.service}</td>
                      <td className="px-4 py-3 text-gray-600">{service.location}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{service.installDate}</td>
                      <td className="px-4 py-3">
                        <Badge className={service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                          {service.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm" onClick={() => handleView(service.id)}>
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
              {filteredServices.map((service) => (
                <div key={service.id} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-600">{service.id}</span>
                    <Badge className={service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                      {service.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{service.customer}</p>
                    <p className="text-sm text-gray-600">{service.service}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                      <p>{service.location}</p>
                      <p>Installed: {service.installDate}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleView(service.id)}>
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
