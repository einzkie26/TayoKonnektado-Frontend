import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

export function AdminServicePlans() {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Fiber 50 Mbps', speed: '50 Mbps', price: '₱999.00', subscribers: 234, status: 'Active' },
    { id: 2, name: 'Fiber 100 Mbps', speed: '100 Mbps', price: '₱1,299.00', subscribers: 567, status: 'Active' },
    { id: 3, name: 'Fiber 200 Mbps', speed: '200 Mbps', price: '₱1,899.00', subscribers: 288, status: 'Active' },
    { id: 4, name: 'Fiber 500 Mbps', speed: '500 Mbps', price: '₱2,999.00', subscribers: 45, status: 'Inactive' },
  ]);

  const handleAddPlan = () => {
    alert('Add new service plan');
  };

  const handleEditPlan = (id: number) => {
    alert(`Edit plan ${id}`);
  };

  const handleDeletePlan = (id: number) => {
    if (confirm('Delete this plan?')) {
      setPlans(plans.filter(p => p.id !== id));
    }
  };

  const handleToggleStatus = (id: number) => {
    setPlans(plans.map(p => 
      p.id === id 
        ? { ...p, status: p.status === 'Active' ? 'Inactive' : 'Active' }
        : p
    ));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Service Plans</h1>
            <p className="text-gray-600">Manage available service plans</p>
          </div>
          <Button onClick={handleAddPlan} className="bg-[#003366] hover:bg-[#00509E]">
            <Plus size={16} className="mr-2" />
            Add New Plan
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="border-l-4 border-l-[#003366]">
              <CardHeader>
                <CardTitle className="text-[#003366] flex items-center justify-between">
                  {plan.name}
                  <Badge className={plan.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {plan.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Speed</p>
                  <p className="text-xl font-bold text-[#003366]">{plan.speed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Price</p>
                  <p className="text-2xl font-bold text-green-600">{plan.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Subscribers</p>
                  <p className="text-lg font-semibold text-gray-800">{plan.subscribers}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditPlan(plan.id)}>
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600" onClick={() => handleDeletePlan(plan.id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
