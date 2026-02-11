import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function AdminFAQManagement() {
  const faqs = [
    { id: 1, question: 'How do I reset my password?', category: 'Account', status: 'Published', views: 1234 },
    { id: 2, question: 'What are the available plans?', category: 'Services', status: 'Published', views: 2345 },
    { id: 3, question: 'How to upgrade my plan?', category: 'Services', status: 'Published', views: 987 },
    { id: 4, question: 'Payment methods accepted?', category: 'Billing', status: 'Draft', views: 0 },
  ];

  const handleAdd = () => {
    alert('Add new FAQ');
  };

  const handleEdit = (id: number) => {
    alert(`Edit FAQ ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this FAQ?')) {
      alert(`FAQ ${id} deleted`);
    }
  };


  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">FAQ Management</h1>
            <p className="text-gray-600">Manage frequently asked questions</p>
          </div>
          <Button onClick={handleAdd} className="bg-[#003366] hover:bg-[#00509E]">
            <Plus size={16} className="mr-2" />
            Add New FAQ
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-[#003366] text-lg">{faq.question}</CardTitle>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge className="bg-blue-100 text-blue-700">{faq.category}</Badge>
                      <Badge className={faq.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {faq.status}
                      </Badge>
                      <span className="text-sm text-gray-600">{faq.views} views</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(faq.id)}>
                      <Edit size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600" onClick={() => handleDelete(faq.id)}>
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
