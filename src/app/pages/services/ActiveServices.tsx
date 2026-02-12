import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Wifi, Plus, QrCode } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

export function ActiveServices() {
  const [showDetails, setShowDetails] = useState(false);
  const [showAddService, setShowAddService] = useState(false);
  const [serviceType, setServiceType] = useState<'plan' | 'prepaid' | null>(null);
  const [macId, setMacId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleAddService = () => {
    if (serviceType === 'plan' && !macId.trim()) {
      alert('Please enter MAC ID');
      return;
    }
    if (serviceType === 'prepaid' && !phoneNumber.trim()) {
      alert('Please enter phone number');
      return;
    }
    alert('Service added successfully!');
    setShowAddService(false);
    setServiceType(null);
    setMacId('');
    setPhoneNumber('');
  };
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Active Services</h1>
            <p className="text-gray-600">View and manage your current internet subscriptions</p>
          </div>
          <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={() => setShowAddService(true)}>
            <Plus size={16} className="mr-2" />
            Add Service
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-[#003366] flex items-center gap-2">
                  <Wifi size={24} />
                  Fiber 100 Mbps Plan
                </CardTitle>
                <CardDescription>Active since January 1, 2025</CardDescription>
              </div>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
                Active
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Monthly Fee</p>
                <p className="text-2xl font-bold text-[#003366]">₱1,299.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Speed</p>
                <p className="text-2xl font-bold text-[#003366]">100 Mbps</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Next Billing</p>
                <p className="text-2xl font-bold text-[#003366]">Feb 15, 2026</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={() => navigate('/dashboard/services/manage')}>Upgrade Plan</Button>
              <Button variant="outline" className="border-[#003366] text-[#003366]" onClick={() => setShowDetails(true)}>View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-[#003366]">Service Details</CardTitle>
              <CardDescription>Fiber 100 Mbps Plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan Name:</span>
                  <span className="font-semibold text-[#003366]">Fiber 100 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Fee:</span>
                  <span className="font-semibold text-[#003366]">₱1,299.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Speed:</span>
                  <span className="font-semibold text-[#003366]">100 Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Since:</span>
                  <span className="font-semibold text-[#003366]">January 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Billing:</span>
                  <span className="font-semibold text-[#003366]">Feb 15, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account ID:</span>
                  <span className="font-mono text-sm text-[#003366]">ACC-2025-00145</span>
                </div>
              </div>
              <Button onClick={() => setShowDetails(false)} className="w-full bg-[#003366] hover:bg-[#00509E]">
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Service Modal */}
      {showAddService && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-[#003366]">Add Service</CardTitle>
              <CardDescription>Select service type to add</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!serviceType ? (
                <div className="space-y-3">
                  <button
                    onClick={() => setServiceType('plan')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-[#003366] hover:bg-[#E6F0FF] transition-all"
                  >
                    <p className="font-semibold text-[#003366] mb-1">Plan Subscription</p>
                    <p className="text-xs text-gray-500">Add using MAC ID or QR Code</p>
                  </button>
                  <button
                    onClick={() => setServiceType('prepaid')}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-[#003366] hover:bg-[#E6F0FF] transition-all"
                  >
                    <p className="font-semibold text-[#003366] mb-1">Prepaid WiFi</p>
                    <p className="text-xs text-gray-500">Add using phone number</p>
                  </button>
                  <Button onClick={() => setShowAddService(false)} variant="outline" className="w-full border-[#003366] text-[#003366]">
                    Cancel
                  </Button>
                </div>
              ) : serviceType === 'plan' ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="macId" className="text-[#003366] font-semibold">MAC ID</Label>
                    <Input
                      id="macId"
                      placeholder="Enter MAC ID (e.g., 00:1A:2B:3C:4D:5E)"
                      className="mt-2 border-gray-300 focus:border-[#003366]"
                      value={macId}
                      onChange={(e) => setMacId(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Or</p>
                    <Button variant="outline" className="border-[#003366] text-[#003366]">
                      <QrCode size={16} className="mr-2" />
                      Scan QR Code
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={handleAddService} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                      Add Service
                    </Button>
                    <Button onClick={() => { setServiceType(null); setMacId(''); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phoneNumber" className="text-[#003366] font-semibold">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      placeholder="Enter phone number (e.g., 09123456789)"
                      className="mt-2 border-gray-300 focus:border-[#003366]"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={handleAddService} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                      Add Service
                    </Button>
                    <Button onClick={() => { setServiceType(null); setPhoneNumber(''); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
}
