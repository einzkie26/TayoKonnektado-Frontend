import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Bell, Mail, MessageSquare, DollarSign, Wifi, AlertCircle, Save } from 'lucide-react';
import { useState } from 'react';

export function Notifications() {
  const [notifications, setNotifications] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setNotifications(prev => ({ ...prev, [id]: checked }));
  };

  const handleEnableAll = () => {
    const allEnabled: Record<string, boolean> = {};
    notificationCategories.forEach(cat => {
      cat.options.forEach(opt => {
        allEnabled[`${opt.id}-email`] = true;
      });
    });
    setNotifications(allEnabled);
    alert('All notifications enabled!');
  };

  const handleDisableAll = () => {
    const allDisabled: Record<string, boolean> = {};
    notificationCategories.forEach(cat => {
      cat.options.forEach(opt => {
        allDisabled[`${opt.id}-email`] = false;
      });
    });
    setNotifications(allDisabled);
    alert('All notifications disabled!');
  };

  const handleEssentialOnly = () => {
    const essential: Record<string, boolean> = {};
    notificationCategories.forEach(cat => {
      cat.options.forEach(opt => {
        essential[`${opt.id}-email`] = opt.email;
      });
    });
    setNotifications(essential);
    alert('Set to essential notifications only!');
  };

  const handleSave = () => {
    alert('Notification preferences saved successfully!');
  };

  const handleReset = () => {
    setNotifications({});
    alert('Preferences reset to default!');
  };
  const notificationCategories = [
    {
      title: 'Billing & Payments',
      icon: DollarSign,
      color: 'green',
      options: [
        { id: 'bill-due', label: 'Bill due reminders', email: true },
        { id: 'payment-received', label: 'Payment confirmations', email: true },
        { id: 'payment-failed', label: 'Failed payment alerts', email: true },
        { id: 'invoice-ready', label: 'New invoice available', email: true },
      ],
    },
    {
      title: 'Service Updates',
      icon: Wifi,
      color: 'blue',
      options: [
        { id: 'service-outage', label: 'Service outages and interruptions', email: true },
        { id: 'maintenance', label: 'Scheduled maintenance notices', email: true },
        { id: 'service-restored', label: 'Service restoration confirmations', email: true },
        { id: 'speed-changes', label: 'Speed tier changes', email: true },
      ],
    },
    {
      title: 'Support & Tickets',
      icon: MessageSquare,
      color: 'purple',
      options: [
        { id: 'ticket-created', label: 'Ticket creation confirmations', email: true },
        { id: 'ticket-update', label: 'Ticket status updates', email: true },
        { id: 'ticket-resolved', label: 'Ticket resolution notifications', email: true },
        { id: 'new-message', label: 'New messages from support', email: true },
      ],
    },
    {
      title: 'Account Activity',
      icon: AlertCircle,
      color: 'orange',
      options: [
        { id: 'login-new', label: 'New device logins', email: true },
        { id: 'password-change', label: 'Password changes', email: true },
        { id: 'profile-update', label: 'Profile updates', email: true },
        { id: 'plan-change', label: 'Plan upgrades/downgrades', email: true },
      ],
    },
    {
      title: 'Marketing & Promotions',
      icon: Bell,
      color: 'yellow',
      options: [
        { id: 'promo-offers', label: 'Special offers and promotions', email: false },
        { id: 'newsletter', label: 'Monthly newsletter', email: false },
        { id: 'product-updates', label: 'New products and features', email: false },
        { id: 'referral', label: 'Referral program updates', email: false },
      ],
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Notification Preferences</h1>
          <p className="text-gray-600">Choose how and when you want to receive updates</p>
        </div>

        {/* Contact Info */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-xs">Email</p>
                  <p className="font-semibold">juan@example.com</p>
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-xs mt-4">
              Update these in your Profile Settings
            </p>
          </CardContent>
        </Card>

        {/* Notification Categories */}
        {notificationCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-[#003366] flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`text-${category.color}-600`} size={24} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-[1fr_80px] gap-4 pb-2 border-b border-gray-200">
                    <div className="text-sm font-semibold text-gray-700">Notification Type</div>
                    <div className="text-sm font-semibold text-gray-700 text-center">Email</div>
                  </div>

                  {/* Notification Options */}
                  {category.options.map((option) => (
                    <div key={option.id} className="grid grid-cols-[1fr_80px] gap-4 items-center py-2">
                      <Label htmlFor={`${option.id}-email`} className="text-sm text-gray-700 cursor-pointer">
                        {option.label}
                      </Label>
                      <div className="flex justify-center">
                        <input
                          type="checkbox"
                          id={`${option.id}-email`}
                          checked={notifications[`${option.id}-email`] ?? option.email}
                          onChange={(e) => handleCheckboxChange(`${option.id}-email`, e.target.checked)}
                          className="w-4 h-4 text-[#003366] cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Quick Actions */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-[#003366] text-[#003366]" onClick={handleEnableAll}>
                Enable All Notifications
              </Button>
              <Button variant="outline" className="border-[#003366] text-[#003366]" onClick={handleDisableAll}>
                Disable All Notifications
              </Button>
              <Button variant="outline" className="border-[#003366] text-[#003366]" onClick={handleEssentialOnly}>
                Essential Only
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-[#003366] text-[#003366]" onClick={handleReset}>
            Reset to Default
          </Button>
          <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={handleSave}>
            <Save size={16} className="mr-2" />
            Save Preferences
          </Button>
        </div>

        {/* Info Box */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-3">
              <AlertCircle className="text-[#003366] flex-shrink-0" size={20} />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-[#003366] mb-2">Important Information</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Some critical notifications (security alerts, payment failures) cannot be disabled</li>
                  <li>Email notifications may take up to 5 minutes to arrive</li>
                  <li>You can unsubscribe from marketing emails at any time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
