import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { CheckCircle, Clock, MessageSquare, User, Search } from 'lucide-react';
import { useState } from 'react';

export function TrackStatus() {
  const [trackingId, setTrackingId] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const ticketTimeline = [
    {
      status: 'Ticket Created',
      date: 'Feb 5, 2026',
      time: '10:30 AM',
      description: 'Your support ticket has been created and assigned to our team',
      user: 'System',
      completed: true,
    },
    {
      status: 'Ticket Assigned',
      date: 'Feb 5, 2026',
      time: '11:00 AM',
      description: 'Ticket assigned to Maria Santos from Technical Support Team',
      user: 'Support Manager',
      completed: true,
    },
    {
      status: 'Investigation Started',
      date: 'Feb 5, 2026',
      time: '2:15 PM',
      description: 'Technician is investigating your connection issue',
      user: 'Maria Santos',
      completed: true,
    },
    {
      status: 'Update Provided',
      date: 'Feb 6, 2026',
      time: '9:00 AM',
      description: 'Network diagnostics completed. Issue identified in local equipment',
      user: 'Maria Santos',
      completed: true,
    },
    {
      status: 'Technician Dispatched',
      date: 'Feb 7, 2026',
      time: '8:00 AM',
      description: 'Field technician scheduled for on-site visit',
      user: 'Operations Team',
      completed: true,
    },
    {
      status: 'In Progress',
      date: 'Feb 7, 2026',
      time: '2:00 PM',
      description: 'Technician is currently working on resolving your issue',
      user: 'Field Technician',
      completed: false,
    },
    {
      status: 'Resolution',
      date: 'Pending',
      time: 'Est. Today',
      description: 'Ticket will be resolved once work is completed',
      user: 'Pending',
      completed: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Track Ticket Status</h1>
          <p className="text-gray-600">Check the progress of your support request in real-time</p>
        </div>

        {/* Search Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366]">Enter Ticket ID</CardTitle>
            <CardDescription>Track your ticket using the ID provided when you submitted your request</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <Label htmlFor="ticketId" className="text-[#003366] font-semibold">
                  Ticket ID
                </Label>
                <div className="flex gap-3 mt-2">
                  <Input
                    id="ticketId"
                    placeholder="e.g., TK-2026-0145"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="border-gray-300 focus:border-[#003366]"
                  />
                  <Button type="submit" className="bg-[#003366] hover:bg-[#00509E]">
                    <Search size={16} className="mr-2" />
                    Track
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Results - Would only show after form submission */}
        {(showResults || true) && (
          <>
            {/* Ticket Summary */}
            <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Ticket #TK-2026-0145</CardTitle>
                    <CardDescription className="text-blue-100 text-base">
                      Intermittent connection drops during evening hours
                    </CardDescription>
                  </div>
                  <span className="px-4 py-2 bg-blue-400 text-white rounded-full text-sm font-semibold whitespace-nowrap">
                    In Progress
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Priority</p>
                    <p className="text-xl font-bold">High</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Assigned To</p>
                    <p className="text-xl font-bold">Maria Santos</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Est. Resolution</p>
                    <p className="text-xl font-bold">Today, 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003366]">Progress Timeline</CardTitle>
                <CardDescription>Detailed status updates for your ticket</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                  <div className="space-y-6">
                    {ticketTimeline.map((item, index) => (
                      <div key={index} className="relative flex gap-4">
                        {/* Timeline dot */}
                        <div
                          className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            item.completed
                              ? 'bg-green-500'
                              : index === ticketTimeline.findIndex(t => !t.completed)
                              ? 'bg-blue-500 animate-pulse'
                              : 'bg-gray-300'
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="text-white" size={24} />
                          ) : index === ticketTimeline.findIndex(t => !t.completed) ? (
                            <Clock className="text-white" size={24} />
                          ) : (
                            <Clock className="text-gray-500" size={24} />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6">
                          <div
                            className={`p-4 rounded-lg ${
                              item.completed
                                ? 'bg-green-50 border-l-4 border-green-500'
                                : index === ticketTimeline.findIndex(t => !t.completed)
                                ? 'bg-blue-50 border-l-4 border-blue-500'
                                : 'bg-gray-50 border-l-4 border-gray-300'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4
                                className={`font-semibold text-lg ${
                                  item.completed ? 'text-green-700' : 'text-gray-700'
                                }`}
                              >
                                {item.status}
                              </h4>
                              <span className="text-sm text-gray-500">
                                {item.date} • {item.time}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <User size={14} />
                              <span>{item.user}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-[#E6F0FF] border-[#003366]">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-2">Need to add more information?</h3>
                    <p className="text-gray-700 text-sm">
                      You can reply to this ticket or contact our support team directly
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-[#003366] text-[#003366]">
                      <MessageSquare size={16} className="mr-2" />
                      Reply to Ticket
                    </Button>
                    <Button className="bg-[#003366] hover:bg-[#00509E]">
                      View Full Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
