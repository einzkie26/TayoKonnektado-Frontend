import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Clock, MessageSquare, User, Calendar, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Textarea } from '@/app/components/ui/textarea';

export function MyTickets() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');
  const navigate = useNavigate();

  const handleReply = () => {
    if (!replyText.trim()) {
      alert('Please enter a reply message');
      return;
    }
    alert('Reply sent successfully!');
    setShowReply(false);
    setReplyText('');
    setSelectedTicket(null);
  };
  const tickets = [
    {
      id: 'TK-2026-0145',
      subject: 'Intermittent connection drops during evening hours',
      category: 'Connection Issue',
      priority: 'High',
      status: 'In Progress',
      created: 'Feb 5, 2026',
      updated: 'Feb 7, 2026',
      assignedTo: 'Maria Santos',
      messages: 5,
    },
    {
      id: 'TK-2026-0123',
      subject: 'Request for static IP address setup',
      category: 'Technical Support',
      priority: 'Medium',
      status: 'Pending',
      created: 'Jan 26, 2026',
      updated: 'Jan 28, 2026',
      assignedTo: 'Tech Team',
      messages: 3,
    },
    {
      id: 'TK-2026-0098',
      subject: 'Billing inquiry about January invoice',
      category: 'Billing Inquiry',
      priority: 'Low',
      status: 'Resolved',
      created: 'Jan 15, 2026',
      updated: 'Jan 16, 2026',
      assignedTo: 'Carlos Reyes',
      messages: 4,
    },
    {
      id: 'TK-2025-0845',
      subject: 'Router configuration assistance needed',
      category: 'Technical Support',
      priority: 'Medium',
      status: 'Closed',
      created: 'Dec 20, 2025',
      updated: 'Dec 22, 2025',
      assignedTo: 'Anna Cruz',
      messages: 6,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Resolved':
        return 'bg-green-100 text-green-700';
      case 'Closed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">My Support Tickets</h1>
            <p className="text-gray-600">Track and manage all your support requests</p>
          </div>
          <Link to="/dashboard/support/create">
            <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={() => navigate('/dashboard/support/create')}>
              <Plus size={16} className="mr-2" />
              New Ticket
            </Button>
          </Link>
        </div>

        {/* Ticket Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardDescription>Active Tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <CardDescription>Pending Response</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">1</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardDescription>Resolved This Month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">1</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-gray-400">
            <CardHeader className="pb-2">
              <CardDescription>Avg. Resolution Time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#003366]">24h</div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#003366] mb-2">
                          {ticket.subject}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline" className="font-mono text-xs">
                            {ticket.id}
                          </Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                          <span className="text-xs text-gray-500">{ticket.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <div>
                          <p className="text-xs text-gray-500">Created</p>
                          <p className="font-medium">{ticket.created}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <div>
                          <p className="text-xs text-gray-500">Updated</p>
                          <p className="font-medium">{ticket.updated}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <User size={16} />
                        <div>
                          <p className="text-xs text-gray-500">Assigned To</p>
                          <p className="font-medium">{ticket.assignedTo}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MessageSquare size={16} />
                        <div>
                          <p className="text-xs text-gray-500">Messages</p>
                          <p className="font-medium">{ticket.messages}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <Button variant="outline" className="border-[#003366] text-[#003366] flex-1 lg:flex-none" onClick={() => setSelectedTicket(ticket)}>
                      View Details
                    </Button>
                    {ticket.status === 'Pending' && (
                      <Button className="bg-[#003366] hover:bg-[#00509E] flex-1 lg:flex-none" onClick={() => { setSelectedTicket(ticket); setShowReply(true); }}>
                        Reply
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* View Details Modal */}
      {selectedTicket && !showReply && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-[#003366]">Ticket Details</CardTitle>
              <CardDescription>{selectedTicket.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#003366] mb-2">{selectedTicket.subject}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getPriorityColor(selectedTicket.priority)}>{selectedTicket.priority}</Badge>
                  <Badge className={getStatusColor(selectedTicket.status)}>{selectedTicket.status}</Badge>
                  <span className="text-xs text-gray-500">{selectedTicket.category}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-semibold text-[#003366]">{selectedTicket.created}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-semibold text-[#003366]">{selectedTicket.updated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assigned To:</span>
                  <span className="font-semibold text-[#003366]">{selectedTicket.assignedTo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Messages:</span>
                  <span className="font-semibold text-[#003366]">{selectedTicket.messages}</span>
                </div>
              </div>
              <div className="flex gap-3">
                {selectedTicket.status === 'Pending' && (
                  <Button className="flex-1 bg-[#003366] hover:bg-[#00509E]" onClick={() => setShowReply(true)}>
                    Reply to Ticket
                  </Button>
                )}
                <Button variant="outline" className="flex-1 border-[#003366] text-[#003366]" onClick={() => setSelectedTicket(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reply Modal */}
      {showReply && selectedTicket && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 bg-white">
            <CardHeader>
              <CardTitle className="text-[#003366]">Reply to Ticket</CardTitle>
              <CardDescription>{selectedTicket.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Subject: <strong>{selectedTicket.subject}</strong></p>
                <Textarea
                  placeholder="Type your reply here..."
                  className="min-h-[150px] border-gray-300 focus:border-[#003366]"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
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
    </DashboardLayout>
  );
}
