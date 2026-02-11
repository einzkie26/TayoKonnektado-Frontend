import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Shield, Tv, Phone, Cloud, Router, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Addons() {
  const [selectedAddon, setSelectedAddon] = useState<any>(null);
  const [step, setStep] = useState<'select' | 'payment' | 'invoice' | 'manage'>('select');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddAddon = (addon: any) => {
    setSelectedAddon(addon);
    setStep('payment');
  };

  const handleManage = (addon: any) => {
    setSelectedAddon(addon);
    setStep('manage');
  };

  const handleRemoveAddon = () => {
    alert(`${selectedAddon.name} has been removed from your plan.`);
    closeModal();
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setStep('invoice');
  };

  const closeModal = () => {
    setStep('select');
    setSelectedAddon(null);
    setPaymentMethod('');
  };
  const addons = [
    {
      name: 'Premium Wi-Fi Router',
      icon: Router,
      price: '₱500.00',
      billing: 'one-time',
      description: 'Upgrade to our high-performance dual-band router for better coverage',
      features: ['Dual-band technology', 'Up to 50 devices', 'Mesh-ready', '3-year warranty'],
      active: false,
    },
    {
      name: 'Static IP Address',
      icon: Zap,
      price: '₱300.00',
      billing: 'monthly',
      description: 'Get a dedicated static IP address for hosting and remote access',
      features: ['Dedicated IP', 'Perfect for servers', 'Remote access', 'Business-grade'],
      active: true,
    },
    {
      name: 'Premium Security Suite',
      icon: Shield,
      price: '₱199.00',
      billing: 'monthly',
      description: 'Advanced firewall and antivirus protection for all your devices',
      features: ['Antivirus protection', 'Firewall security', 'Ad blocking', 'Parental controls'],
      active: false,
    },
    {
      name: 'IPTV Package',
      icon: Tv,
      price: '₱599.00',
      billing: 'monthly',
      description: 'Stream 100+ TV channels in HD quality',
      features: ['100+ channels', 'HD quality', 'On-demand content', 'Multi-device'],
      active: false,
    },
    {
      name: 'VoIP Phone Service',
      icon: Phone,
      price: '₱399.00',
      billing: 'monthly',
      description: 'Crystal-clear voice calls over your internet connection',
      features: ['Unlimited local calls', 'Free adapter', 'Call forwarding', 'Voicemail'],
      active: false,
    },
    {
      name: 'Cloud Backup',
      icon: Cloud,
      price: '₱249.00',
      billing: 'monthly',
      description: 'Secure cloud storage for your important files and documents',
      features: ['1TB storage', 'Auto backup', 'File sharing', 'Mobile access'],
      active: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Add-ons & Extras</h1>
          <p className="text-gray-600">Enhance your internet experience with additional features and services</p>
        </div>

        {/* Active Add-ons */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle size={24} />
              Active Add-ons
            </CardTitle>
            <CardDescription className="text-blue-100">
              Your currently subscribed additional services
            </CardDescription>
          </CardHeader>
          <CardContent>
            {addons.filter(addon => addon.active).length > 0 ? (
              <div className="space-y-3">
                {addons.filter(addon => addon.active).map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div key={addon.name} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">{addon.name}</p>
                          <p className="text-sm text-blue-100">{addon.price} / {addon.billing}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10" onClick={() => handleManage(addon)}>
                        Manage
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-blue-100">No active add-ons. Browse available options below.</p>
            )}
          </CardContent>
        </Card>

        {/* Available Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.filter(addon => !addon.active).map((addon) => {
            const Icon = addon.icon;
            return (
              <Card key={addon.name} className="hover:shadow-lg transition-all border-2 border-transparent hover:border-[#003366]">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#00509E] rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#003366]">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-[#003366]">
                    {addon.price}
                    <span className="text-sm font-normal text-gray-500"> / {addon.billing}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                  <div className="space-y-2">
                    {addon.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#003366] hover:bg-[#00509E]" onClick={() => handleAddAddon(addon)}>
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Payment Method Modal */}
      {step === 'payment' && selectedAddon && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 bg-white">
            <CardHeader>
              <CardTitle className="text-[#003366]">Select Payment Method</CardTitle>
              <CardDescription>Choose how you want to pay for {selectedAddon.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('gcash')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'gcash' ? 'border-[#003366] bg-[#E6F0FF]' : 'border-gray-200 hover:border-[#003366]'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                    <div>
                      <p className="font-semibold text-[#003366]">GCash</p>
                      <p className="text-xs text-gray-500">Pay via GCash wallet</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod('paymaya')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'paymaya' ? 'border-[#003366] bg-[#E6F0FF]' : 'border-gray-200 hover:border-[#003366]'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">PM</div>
                    <div>
                      <p className="font-semibold text-[#003366]">PayMaya</p>
                      <p className="text-xs text-gray-500">Pay via PayMaya wallet</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'card' ? 'border-[#003366] bg-[#E6F0FF]' : 'border-gray-200 hover:border-[#003366]'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">💳</div>
                    <div>
                      <p className="font-semibold text-[#003366]">Credit/Debit Card</p>
                      <p className="text-xs text-gray-500">Visa, Mastercard, etc.</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex gap-3 pt-4">
                <Button onClick={handlePayment} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                  Proceed to Payment
                </Button>
                <Button onClick={closeModal} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Invoice Modal */}
      {step === 'invoice' && selectedAddon && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 bg-white">
            <CardHeader>
              <CardTitle className="text-[#003366]">Payment Pending</CardTitle>
              <CardDescription>Invoice for {selectedAddon.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Add-on:</span>
                  <span className="font-semibold text-[#003366]">{selectedAddon.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold text-[#003366]">{selectedAddon.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-[#003366] capitalize">{paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Invoice ID:</span>
                  <span className="font-mono text-sm text-[#003366]">INV-{Date.now()}</span>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong className="text-[#003366]">Waiting for email confirmation</strong>
                </p>
                <p className="text-xs text-gray-600">
                  If you don't receive a response, please check your <strong>Order History</strong> for more details or <strong>Contact Support</strong> for assistance.
                </p>
              </div>
              <Button onClick={closeModal} className="w-full bg-[#003366] hover:bg-[#00509E]">
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Manage Add-on Modal */}
      {step === 'manage' && selectedAddon && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 bg-white">
            <CardHeader>
              <CardTitle className="text-[#003366]">Manage Add-on</CardTitle>
              <CardDescription>{selectedAddon.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold text-[#003366]">{selectedAddon.price} / {selectedAddon.billing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Billing:</span>
                  <span className="font-semibold text-[#003366]">Feb 15, 2026</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleRemoveAddon} variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50">
                  Remove Add-on
                </Button>
                <Button onClick={closeModal} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
}
