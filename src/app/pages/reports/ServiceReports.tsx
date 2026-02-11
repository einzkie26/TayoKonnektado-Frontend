import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

import { CheckCircle, AlertTriangle, XCircle, Clock, Activity } from 'lucide-react';

export function ServiceReports() {
  const incidents = [
    {
      date: 'Jan 28, 2026',
      type: 'Scheduled Maintenance',
      duration: '2 hours',
      status: 'Completed',
      impact: 'Low',
      description: 'Routine network equipment upgrade',
    },
    {
      date: 'Jan 15, 2026',
      type: 'Service Interruption',
      duration: '15 minutes',
      status: 'Resolved',
      impact: 'Medium',
      description: 'Temporary network congestion during peak hours',
    },
    {
      date: 'Dec 10, 2025',
      type: 'Scheduled Maintenance',
      duration: '1 hour',
      status: 'Completed',
      impact: 'Low',
      description: 'Fiber line inspection and cleaning',
    },
  ];

  const upcomingMaintenance = [
    {
      date: 'Feb 15, 2026',
      time: '2:00 AM - 4:00 AM',
      type: 'Network Upgrade',
      impact: 'Minimal',
      description: 'Upgrading backbone infrastructure for improved speeds',
    },
    {
      date: 'Feb 28, 2026',
      time: '3:00 AM - 5:00 AM',
      type: 'System Maintenance',
      impact: 'None Expected',
      description: 'Routine server maintenance and updates',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Service Reports</h1>
          <p className="text-gray-600">Monitor service status, uptime, and maintenance schedules</p>
        </div>

        {/* Current Status */}
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle size={32} />
              All Systems Operational
            </CardTitle>
            <CardDescription className="text-green-100">
              Last updated: Feb 7, 2026 at 2:30 PM
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">Connection Status</p>
                <p className="text-2xl font-bold">Active</p>
                <p className="text-green-100 text-xs mt-1">Running smoothly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">Current Uptime</p>
                <p className="text-2xl font-bold">45 days</p>
                <p className="text-green-100 text-xs mt-1">Since last restart</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">Network Health</p>
                <p className="text-2xl font-bold">Excellent</p>
                <p className="text-green-100 text-xs mt-1">0 issues detected</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardDescription>30-Day Uptime</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">99.9%</div>
              <p className="text-xs text-gray-500 mt-1">Industry leading</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardDescription>Total Incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2</div>
              <p className="text-xs text-gray-500 mt-1">Last 90 days</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#FDB913]">
            <CardHeader className="pb-2">
              <CardDescription>Avg. Resolution Time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#003366]">12 min</div>
              <p className="text-xs text-gray-500 mt-1">Very fast</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <CardDescription>Scheduled Maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">2</div>
              <p className="text-xs text-gray-500 mt-1">Upcoming</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Maintenance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Clock size={24} />
              Upcoming Scheduled Maintenance
            </CardTitle>
            <CardDescription>Plan ahead for these scheduled service windows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMaintenance.map((maintenance, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border-l-4 border-[#003366]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-[#003366] mb-1">{maintenance.type}</h4>
                      <p className="text-sm text-gray-600 mb-2">{maintenance.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{maintenance.date}</span>
                        <span>•</span>
                        <span>{maintenance.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap">
                        Impact: {maintenance.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Incident History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Activity size={24} />
              Recent Service Incidents
            </CardTitle>
            <CardDescription>Historical service events and resolutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {incidents.map((incident, index) => {
                const getIcon = () => {
                  if (incident.status === 'Completed' || incident.status === 'Resolved') {
                    return <CheckCircle className="text-green-500" size={24} />;
                  }
                  if (incident.impact === 'Medium') {
                    return <AlertTriangle className="text-orange-500" size={24} />;
                  }
                  return <XCircle className="text-red-500" size={24} />;
                };

                const getBgColor = () => {
                  if (incident.status === 'Completed' || incident.status === 'Resolved') {
                    return 'bg-green-50';
                  }
                  if (incident.impact === 'Medium') {
                    return 'bg-orange-50';
                  }
                  return 'bg-red-50';
                };

                return (
                  <div key={index} className={`flex items-start gap-4 p-4 rounded-lg ${getBgColor()}`}>
                    <div className="flex-shrink-0">{getIcon()}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-[#003366]">{incident.type}</h4>
                        <span className="text-sm text-gray-500">{incident.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="px-2 py-1 bg-white rounded-full font-semibold text-gray-700">
                          Duration: {incident.duration}
                        </span>
                        <span className="px-2 py-1 bg-white rounded-full font-semibold text-gray-700">
                          Impact: {incident.impact}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                          {incident.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Service Level Agreement */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-3 text-lg">Service Level Agreement (SLA)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Guaranteed Uptime:</strong> 99.5% monthly
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Response Time:</strong> Within 4 hours for critical issues
                </p>
                <p className="text-gray-700">
                  <strong>Resolution Time:</strong> 24 hours for most incidents
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Your Performance:</strong> 99.9% uptime (Exceeding SLA)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Avg Response:</strong> 2 hours
                </p>
                <p className="text-gray-700">
                  <strong>Avg Resolution:</strong> 12 minutes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
