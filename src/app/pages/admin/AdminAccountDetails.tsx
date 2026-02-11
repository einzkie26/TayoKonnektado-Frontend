import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

export function AdminAccountDetails() {
  const account = {
    id: 'CUST-001',
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    phone: '+63 912 345 6789',
    address: '123 Main St, Manila, Philippines',
    status: 'Active',
    plan: 'Fiber 100 Mbps',
    joinDate: 'Jan 15, 2025',
    balance: '₱0.00'
  };

  const handleEdit = () => {
    alert('Edit account functionality');
  };

  const handleSuspend = () => {
    if (confirm('Suspend this account?')) {
      alert('Account suspended');
    }
  };

  const handleResetPassword = () => {
    alert('Password reset email sent');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Account Details</h1>
            <p className="text-gray-600">View and manage customer account information</p>
          </div>
          <Button onClick={handleEdit} className="bg-[#003366] hover:bg-[#00509E]">
            <Edit size={16} className="mr-2" />
            Edit Account
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#003366]">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <User className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-semibold text-[#003366]">{account.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-semibold text-[#003366]">{account.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold text-[#003366]">{account.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-semibold text-[#003366]">{account.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Join Date</p>
                  <p className="font-semibold text-[#003366]">{account.joinDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Status</p>
                <Badge className="bg-green-100 text-green-700">{account.status}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Current Plan</p>
                <p className="font-semibold text-[#003366]">{account.plan}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Outstanding Balance</p>
                <p className="font-semibold text-[#003366]">{account.balance}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
