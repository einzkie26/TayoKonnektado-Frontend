import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, UserPlus } from 'lucide-react';
import { useState } from 'react';

export function AdminAssignTickets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tickets, setTickets] = useState([
    { id: 'TK-2026-001', customer: 'Juan Dela Cruz', issue: 'Connection Issue', priority: 'High', status: 'Unassigned', assignedTo: '', created: 'Feb 6, 2026' },
    { id: 'TK-2026-002', customer: 'Maria Santos', issue: 'Slow Speed', priority: 'Medium', status: 'Assigned', assignedTo: 'Tech Support 1', created: 'Feb 6, 2026' },
    { id: 'TK-2026-003', customer: 'Pedro Garcia', issue: 'Billing Query', priority: 'Low', status: 'Unassigned', assignedTo: '', created: 'Feb 5, 2026' },
  ]);

  const staff = ['Tech Support 1', 'Tech Support 2', 'Tech Support 3', 'Manager User'];

  const filteredTickets = tickets.filter(t =>
    t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleAssign = (ticketId: string) => {
    const staffMember = prompt(`Assign to:\n${staff.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nEnter number:`);
    if (staffMember && staff[parseInt(staffMember) - 1]) {
      setTickets(tickets.map(t => 
        t.id === ticketId 
          ? { ...t, status: 'Assigned', assignedTo: staff[parseInt(staffMember) - 1] }
          : t
      ));
    }
  };

  const handleReassign = (ticketId: string) => {
    handleAssign(ticketId);
  };

  const handleBulkAssign = () => {
    alert('Bulk assign selected tickets');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Assign Tickets</h1>
          <p className="text-gray-600">Assign support tickets to staff members</p>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by customer or ticket ID..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Ticket ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Issue</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Priority</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Assigned To</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">{ticket.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{ticket.customer}</td>
                      <td className="px-4 py-3 text-gray-600">{ticket.issue}</td>
                      <td className="px-4 py-3">
                        <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={ticket.status === 'Assigned' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{ticket.assignedTo || '-'}</td>
                      <td className="px-4 py-3">
                        <Button variant="outline" size="sm" onClick={() => handleAssign(ticket.id)}>
                          <UserPlus size={14} className="mr-1" />
                          Assign
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-600">{ticket.id}</span>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      <Badge className={ticket.status === 'Assigned' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {ticket.status}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{ticket.customer}</p>
                    <p className="text-sm text-gray-600">{ticket.issue}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{ticket.assignedTo || 'Unassigned'}</span>
                    <Button variant="outline" size="sm" onClick={() => handleAssign(ticket.id)}>
                      <UserPlus size={14} className="mr-1" />
                      Assign
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
