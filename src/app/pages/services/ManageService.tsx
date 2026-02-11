import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle, Wifi, ArrowUp, ArrowDown, Star } from 'lucide-react';
import { useState } from 'react';

export function ManageService() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePlanChange = (planName: string, _type: string) => {
    setSelectedPlan(planName);
    setShowConfirmation(true);
  };

  const confirmChange = () => {
    alert(`Plan change to ${selectedPlan} has been requested successfully! You will receive a confirmation email shortly.`);
    setShowConfirmation(false);
    setSelectedPlan(null);
  };
  const plans = [
    {
      name: 'Fiber 50 Mbps',
      speed: '50 Mbps',
      price: '₱999.00',
      features: ['Unlimited Data', 'Fiber Connection', 'Basic Support', '1 Device Included'],
      current: false,
      type: 'downgrade',
    },
    {
      name: 'Fiber 100 Mbps',
      speed: '100 Mbps',
      price: '₱1,299.00',
      features: ['Unlimited Data', 'Fiber Connection', 'Priority Support', '3 Devices Included'],
      current: true,
      type: 'current',
    },
    {
      name: 'Fiber 200 Mbps',
      speed: '200 Mbps',
      price: '₱1,899.00',
      features: ['Unlimited Data', 'Premium Fiber', '24/7 Support', '5 Devices Included', 'Free Installation'],
      current: false,
      type: 'upgrade',
      popular: true,
    },
    {
      name: 'Fiber 500 Mbps',
      speed: '500 Mbps',
      price: '₱2,799.00',
      features: ['Unlimited Data', 'Ultra-Fast Fiber', 'VIP Support', 'Unlimited Devices', 'Free Router Upgrade'],
      current: false,
      type: 'upgrade',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Upgrade/Downgrade Plan</h1>
          <p className="text-gray-600">Choose the perfect internet plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.current
                  ? 'border-[#003366] border-2 shadow-lg'
                  : plan.popular
                  ? 'border-[#FDB913] border-2 shadow-lg'
                  : 'hover:shadow-lg'
              } transition-all`}
            >
              {plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#003366] text-white text-xs font-semibold rounded-full">
                    Current Plan
                  </span>
                </div>
              )}
              {plan.popular && !plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#FDB913] text-[#003366] text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#00509E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-white" size={28} />
                </div>
                <CardTitle className="text-[#003366] mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-[#003366] mb-1">{plan.price}</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.current ? (
                  <Button disabled className="w-full bg-gray-300 cursor-not-allowed">
                    Current Plan
                  </Button>
                ) : plan.type === 'upgrade' ? (
                  <Button onClick={() => handlePlanChange(plan.name, 'upgrade')} className="w-full bg-[#003366] hover:bg-[#00509E]">
                    <ArrowUp size={16} className="mr-2" />
                    Upgrade Now
                  </Button>
                ) : (
                  <Button onClick={() => handlePlanChange(plan.name, 'downgrade')} variant="outline" className="w-full border-[#003366] text-[#003366]">
                    <ArrowDown size={16} className="mr-2" />
                    Downgrade
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-2">Need help choosing a plan?</h3>
            <p className="text-gray-700 mb-4">
              Our team is here to help you find the perfect internet plan for your needs. Contact us for personalized recommendations.
            </p>
            <Button variant="outline" className="border-[#003366] text-[#003366] bg-white">
              Contact Support
            </Button>
          </CardContent>
        </Card>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4 bg-[#003366] text-white">
              <CardHeader>
                <CardTitle className="text-white">Confirm Plan Change</CardTitle>
                <CardDescription className="text-blue-200">Are you sure you want to change to {selectedPlan}?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-100">
                  Your plan change will take effect on your next billing cycle. You will receive a confirmation email with the details.
                </p>
                <div className="flex gap-3">
                  <Button onClick={confirmChange} className="flex-1 bg-white text-[#003366] hover:bg-gray-100">
                    Confirm
                  </Button>
                  <Button onClick={() => setShowConfirmation(false)} variant="outline" className="flex-1 border-white text-white hover:bg-white/10">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
