import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Badge } from '@/app/components/ui/badge';
import { UserPlus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function AdminStaff() {
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);

  const staff = [
    { id: 'STF-001', name: 'Carlos Reyes', email: 'carlos@tayokonnektado.com', role: 'Support Agent', status: 'Active', tickets: 15 },
    { id: 'STF-002', name: 'Anna Cruz', email: 'anna@tayokonnektado.com', role: 'Support Agent', status: 'Active', tickets: 12 },
    { id: 'STF-003', name: 'Maria Santos', email: 'maria.s@tayokonnektado.com', role: 'Supervisor', status: 'Active', tickets: 8 },
    { id: 'STF-004', name: 'Tech Team', email: 'tech@tayokonnektado.com', role: 'Technical', status: 'Active', tickets: 20 },
  ];

  const handleAddStaff = () => {
    alert('Staff member added successfully!');
    setShowAddStaff(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this staff member?')) {
      alert(`Staff ${id} removed!`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Staff Management</h1>
            <p className="text-gray-600">Manage admin and support staff accounts</p>
          </div>
          <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={() => setShowAddStaff(true)}>
            <UserPlus size={16} className="mr-2" />
            Add Staff
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Staff</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#003366]">{staff.length}</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Active</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{staff.filter(s => s.status === 'Active').length}</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Support Agents</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Total Tickets</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">55</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {staff.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#003366] truncate">{member.name}</h3>
                      <p className="text-sm text-gray-500 truncate">{member.email}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 flex-shrink-0">{member.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Role</p>
                    <p className="font-semibold text-gray-800 text-sm">{member.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Assigned Tickets</p>
                    <p className="font-semibold text-gray-800 text-sm">{member.tickets}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-[#003366] text-[#003366]" onClick={() => setSelectedStaff(member)}>
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500" onClick={() => handleDelete(member.id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showAddStaff && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4 bg-white">
              <CardHeader>
                <CardTitle className="text-[#003366]">Add Staff Member</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#003366] font-semibold">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#003366] font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="email@tayokonnektado.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="role" className="text-[#003366] font-semibold">Role</Label>
                  <select id="role" className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-2">
                    <option value="">Select role</option>
                    <option value="support">Support Agent</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="technical">Technical</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleAddStaff} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    Add Staff
                  </Button>
                  <Button onClick={() => setShowAddStaff(false)} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedStaff && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4 bg-white">
              <CardHeader>
                <CardTitle className="text-[#003366]">Edit Staff Member</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="editName" className="text-[#003366] font-semibold">Full Name</Label>
                  <Input id="editName" defaultValue={selectedStaff.name} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="editEmail" className="text-[#003366] font-semibold">Email</Label>
                  <Input id="editEmail" type="email" defaultValue={selectedStaff.email} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="editRole" className="text-[#003366] font-semibold">Role</Label>
                  <select id="editRole" defaultValue={selectedStaff.role} className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-2">
                    <option value="Support Agent">Support Agent</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Technical">Technical</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <Button onClick={() => { alert('Staff updated!'); setSelectedStaff(null); }} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    Save Changes
                  </Button>
                  <Button onClick={() => setSelectedStaff(null)} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                    Cancel
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
