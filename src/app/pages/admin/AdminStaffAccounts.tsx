import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, UserPlus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function AdminStaffAccounts() {
  const [searchTerm, setSearchTerm] = useState('');

  const staff = [
    { id: 'STAFF-001', name: 'Admin User', email: 'admin@tayokonnektado.com', role: 'Administrator', status: 'Active', lastLogin: 'Feb 6, 2026' },
    { id: 'STAFF-002', name: 'Support Agent 1', email: 'support1@tayokonnektado.com', role: 'Support', status: 'Active', lastLogin: 'Feb 6, 2026' },
    { id: 'STAFF-003', name: 'Tech Support 1', email: 'tech1@tayokonnektado.com', role: 'Technical', status: 'Active', lastLogin: 'Feb 5, 2026' },
    { id: 'STAFF-004', name: 'Manager User', email: 'manager@tayokonnektado.com', role: 'Manager', status: 'Inactive', lastLogin: 'Jan 30, 2026' },
  ];

  const filteredStaff = staff.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStaff = () => {
    alert('Add new staff member');
  };

  const handleEditStaff = (id: string) => {
    alert(`Edit staff ${id}`);
  };

  const handleDeleteStaff = (id: string) => {
    if (confirm('Delete this staff member?')) {
      alert(`Staff ${id} deleted`);
    }
  };

  const handleResetPassword = (id: string) => {
    alert(`Password reset for ${id}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Staff Accounts</h1>
            <p className="text-gray-600">Manage staff members and their accounts</p>
          </div>
          <Button onClick={handleAddStaff} className="bg-[#003366] hover:bg-[#00509E]">
            <UserPlus size={16} className="mr-2" />
            Add Staff
          </Button>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by name or email..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Staff ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Last Login</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStaff.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{member.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{member.name}</td>
                      <td className="px-4 py-3 text-gray-600">{member.email}</td>
                      <td className="px-4 py-3">
                        <Badge className="bg-blue-100 text-blue-700">{member.role}</Badge>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{member.lastLogin}</td>
                      <td className="px-4 py-3">
                        <Badge className={member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                          {member.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditStaff(member.id)}>
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDeleteStaff(member.id)}>
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
      </div>
    </AdminLayout>
  );
}
