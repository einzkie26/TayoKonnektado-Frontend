import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Textarea } from '@/app/components/ui/textarea';
import { User, Clock } from 'lucide-react';
import { useState } from 'react';

export function AdminSupportTickets() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [assignStaff, setAssignStaff] = useState('');

  const tickets = [
    { id: 'TK-2026-0145', customer: 'Juan Dela Cruz', subject: 'Connection drops', priority: 'High', status: 'Open', created: 'Feb 5, 2026', assignedTo: 'Unassigned' },
    { id: 'TK-2026-0144', customer: 'Maria Santos', subject: 'Billing inquiry', priority: 'Medium', status: 'In Progress', created: 'Feb 4, 2026', assignedTo: 'Carlos Reyes' },
    { id: 'TK-2026-0143', customer: 'Pedro Garcia', subject: 'Speed issue', priority: 'High', status: 'Open', created: 'Feb 3, 2026', assignedTo: 'Unassigned' },
    { id: 'TK-2026-0142', customer: 'Ana Reyes', subject: 'Router setup help', priority: 'Low', status: 'Resolved', created: 'Feb 2, 2026', assignedTo: 'Anna Cruz' },
  ];

  const staff = ['Carlos Reyes', 'Anna Cruz', 'Maria Santos', 'Tech Team'];

  const handleAssign = (ticketId: string) => {
    if (!assignStaff) {
      alert('Please select a staff member');
      return;
    }
    alert(`Ticket ${ticketId} assigned to ${assignStaff}`);
    setSelectedTicket(null);
    setAssignStaff('');
  };

  const handleReply = () => {
    if (!replyText.trim()) {
      alert('Please enter a reply');
      return;
    }
    alert('Reply sent to customer!');
    setShowReply(false);
    setReplyText('');
    setSelectedTicket(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-700';
      case 'In Progress': return 'bg-purple-100 text-purple-700';
      case 'Resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Support Tickets</h1>
          <p className="text-gray-600">Manage customer support requests</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Open Tickets</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">In Progress</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">1</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">Resolved Today</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">1</div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <p className="text-sm text-gray-600">High Priority</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">2</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">All Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-[#003366] mb-2 truncate">{ticket.subject}</h3>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <Badge variant="outline" className="font-mono text-xs">{ticket.id}</Badge>
                              <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                              <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <User size={16} className="flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500">Customer</p>
                              <p className="font-medium truncate">{ticket.customer}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={16} className="flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500">Created</p>
                              <p className="font-medium truncate">{ticket.created}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <User size={16} className="flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs text-gray-500">Assigned To</p>
                              <p className="font-medium truncate">{ticket.assignedTo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" className="border-[#003366] text-[#003366] flex-1" onClick={() => setSelectedTicket(ticket)}>
                          Assign
                        </Button>
                        <Button className="bg-[#003366] hover:bg-[#00509E] flex-1" onClick={() => { setSelectedTicket(ticket); setShowReply(true); }}>
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedTicket && !showReply && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Assign Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Ticket: <strong>{selectedTicket.id}</strong></p>
                  <p className="text-sm text-gray-600 mb-4">Subject: <strong>{selectedTicket.subject}</strong></p>
                  <label className="block text-sm font-semibold text-[#003366] mb-2">Assign to Staff</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={assignStaff}
                    onChange={(e) => setAssignStaff(e.target.value)}
                  >
                    <option value="">Select staff member</option>
                    {staff.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => handleAssign(selectedTicket.id)} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    Assign
                  </Button>
                  <Button onClick={() => { setSelectedTicket(null); setAssignStaff(''); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {showReply && selectedTicket && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-[#003366]">Reply to Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Ticket: <strong>{selectedTicket.id}</strong></p>
                  <p className="text-sm text-gray-600 mb-4">Customer: <strong>{selectedTicket.customer}</strong></p>
                  <Textarea
                    placeholder="Type your reply here..."
                    className="min-h-[150px] border-gray-300 focus:border-[#003366]"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleReply} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                    Send Reply
                  </Button>
                  <Button onClick={() => { setShowReply(false); setReplyText(''); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
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
