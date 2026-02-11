import { AdminLayout } from '@/app/components/AdminLayout';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Search, Download } from 'lucide-react';
import { useState } from 'react';

export function AdminActivityLogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    { id: 1, user: 'Admin User', action: 'Created new customer', type: 'Create', timestamp: 'Feb 6, 2026 10:30 AM', ip: '192.168.1.1' },
    { id: 2, user: 'Support Agent 1', action: 'Updated ticket status', type: 'Update', timestamp: 'Feb 6, 2026 10:25 AM', ip: '192.168.1.2' },
    { id: 3, user: 'Manager User', action: 'Generated revenue report', type: 'View', timestamp: 'Feb 6, 2026 10:20 AM', ip: '192.168.1.3' },
    { id: 4, user: 'Tech Support 1', action: 'Deleted service plan', type: 'Delete', timestamp: 'Feb 6, 2026 10:15 AM', ip: '192.168.1.4' },
    { id: 5, user: 'Admin User', action: 'Modified user permissions', type: 'Update', timestamp: 'Feb 6, 2026 10:10 AM', ip: '192.168.1.1' },
  ];

  const filteredLogs = logs.filter(l =>
    l.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Create': return 'bg-green-100 text-green-700';
      case 'Update': return 'bg-blue-100 text-blue-700';
      case 'Delete': return 'bg-red-100 text-red-700';
      case 'View': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleExport = () => {
    alert('Exporting logs to CSV...');
  };

  const handleFilter = (type: string) => {
    alert(`Filter by ${type}`);
  };

  const handleClearLogs = () => {
    if (confirm('Clear old logs? This cannot be undone.')) {
      alert('Logs cleared');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Activity Logs</h1>
            <p className="text-gray-600">View system activity and audit logs</p>
          </div>
          <Button onClick={handleExport} className="bg-[#003366] hover:bg-[#00509E]">
            <Download size={16} className="mr-2" />
            Export Logs
          </Button>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by user or action..."
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">User</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Timestamp</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">IP Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{log.user}</td>
                      <td className="px-4 py-3 text-gray-600">{log.action}</td>
                      <td className="px-4 py-3">
                        <Badge className={getTypeColor(log.type)}>{log.type}</Badge>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{log.timestamp}</td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <div key={log.id} className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{log.user}</span>
                    <Badge className={getTypeColor(log.type)}>{log.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{log.action}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{log.timestamp}</span>
                    <span className="font-mono">{log.ip}</span>
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
