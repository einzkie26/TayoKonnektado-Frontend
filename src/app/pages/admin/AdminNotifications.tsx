import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Bell, CheckCircle, AlertCircle, Info, Trash2 } from 'lucide-react';

export function AdminNotifications() {
  const notifications = [
    { id: 1, type: 'alert', title: 'High Priority Ticket', message: 'New high priority ticket TK-2026-001 requires immediate attention', time: '5 min ago', read: false },
    { id: 2, type: 'success', title: 'Payment Received', message: 'Payment of ₱1,299.00 received from Juan Dela Cruz', time: '15 min ago', read: false },
    { id: 3, type: 'info', title: 'System Update', message: 'System maintenance scheduled for tonight at 11 PM', time: '1 hour ago', read: true },
    { id: 4, type: 'alert', title: 'Service Outage', message: 'Service outage reported in Makati area', time: '2 hours ago', read: true },
    { id: 5, type: 'success', title: 'New Customer', message: 'New customer registration: Maria Santos', time: '3 hours ago', read: true },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert': return <AlertCircle className="text-red-500" size={24} />;
      case 'success': return <CheckCircle className="text-green-500" size={24} />;
      case 'info': return <Info className="text-blue-500" size={24} />;
      default: return <Bell className="text-gray-500" size={24} />;
    }
  };

  const handleMarkAllRead = () => {
    alert('All notifications marked as read');
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this notification?')) {
      alert(`Notification ${id} deleted`);
    }
  };


  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Notifications</h1>
            <p className="text-gray-600">View and manage system notifications</p>
          </div>
          <Button variant="outline" onClick={handleMarkAllRead}>
            Mark All as Read
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={!notification.read ? 'border-l-4 border-l-[#003366]' : ''}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-[#003366] text-lg">{notification.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-sm text-gray-400 mt-2">{notification.time}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Badge className="bg-blue-100 text-blue-700">New</Badge>
                        )}
                        <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDelete(notification.id)}>
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
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
