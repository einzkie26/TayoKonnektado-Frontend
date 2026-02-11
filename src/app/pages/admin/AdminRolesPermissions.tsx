import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Plus, Edit } from 'lucide-react';

export function AdminRolesPermissions() {
  const roles = [
    { 
      id: 1, 
      name: 'Administrator', 
      users: 2, 
      permissions: ['Full Access', 'User Management', 'System Settings', 'Reports'],
      color: 'red'
    },
    { 
      id: 2, 
      name: 'Manager', 
      users: 5, 
      permissions: ['View Reports', 'Manage Customers', 'Manage Orders', 'View Analytics'],
      color: 'blue'
    },
    { 
      id: 3, 
      name: 'Support', 
      users: 12, 
      permissions: ['View Tickets', 'Respond to Tickets', 'View Customers'],
      color: 'green'
    },
    { 
      id: 4, 
      name: 'Technical', 
      users: 8, 
      permissions: ['Manage Services', 'View Tickets', 'Technical Support'],
      color: 'yellow'
    },
  ];

  const handleAddRole = () => {
    alert('Add new role');
  };

  const handleEditRole = (id: number) => {
    alert(`Edit role ${id}`);
  };


  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Roles & Permissions</h1>
            <p className="text-gray-600">Manage user roles and their permissions</p>
          </div>
          <Button onClick={handleAddRole} className="bg-[#003366] hover:bg-[#00509E]">
            <Plus size={16} className="mr-2" />
            Add New Role
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Card key={role.id} className={`border-l-4 border-l-${role.color}-500`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#003366]">{role.name}</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleEditRole(role.id)}>
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">{role.users} users assigned</p>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Permissions:</p>
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.map((permission, idx) => (
                      <Badge key={idx} className="bg-blue-100 text-blue-700">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
