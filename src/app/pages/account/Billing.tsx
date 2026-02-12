import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { CreditCard, Building, Plus, Trash2, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Billing() {
  const [showPayNow, setShowPayNow] = useState(false);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [autoPay, setAutoPay] = useState(false);

  const handlePayNow = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    alert('Payment of ₱1,299.00 processed successfully!');
    setShowPayNow(false);
    setPaymentMethod('');
  };

  const handleAddPayment = () => {
    alert('Payment method added successfully!');
    setShowAddPayment(false);
  };

  const handleSetDefault = (_id: number) => {
    alert('Payment method set as default!');
  };

  const handleRemove = (_id: number) => {
    if (confirm('Are you sure you want to remove this payment method?')) {
      alert('Payment method removed!');
    }
  };

  const handleUpdateAddress = () => {
    alert('Billing address updated successfully!');
  };
  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      last4: '4532',
      brand: 'Visa',
      expiry: '12/26',
      isDefault: true,
    },
    {
      id: 2,
      type: 'GCash',
      number: '+63 912 345 6789',
      isDefault: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Billing Information</h1>
          <p className="text-gray-600">Manage your payment methods and billing details</p>
        </div>

        {/* Current Balance */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-blue-100 text-sm mb-1">Current Balance</p>
                <p className="text-4xl font-bold">₱1,299.00</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Due Date</p>
                <p className="text-2xl font-bold">Feb 15, 2026</p>
              </div>
              <div>
                <Button className="w-full bg-[#FDB913] text-[#003366] hover:bg-[#FCA311] h-12 text-lg font-semibold" onClick={() => setShowPayNow(true)}>
                  Pay Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-[#003366]">Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment options</CardDescription>
              </div>
              <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={() => setShowAddPayment(true)}>
                <Plus size={16} className="mr-2" />
                Add Payment Method
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 rounded-lg border-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    method.isDefault
                      ? 'border-[#003366] bg-[#E6F0FF]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#00509E] rounded-lg flex items-center justify-center">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-[#003366]">
                          {method.type}
                          {method.brand && ` (${method.brand})`}
                        </p>
                        {method.isDefault && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
                            <CheckCircle size={12} />
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {method.last4 ? `•••• ${method.last4}` : method.number}
                        {method.expiry && ` • Expires ${method.expiry}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" className="border-[#003366] text-[#003366]" onClick={() => handleSetDefault(method.id)}>
                        Set as Default
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleRemove(method.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Billing Address */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Building size={24} />
              Billing Address
            </CardTitle>
            <CardDescription>Address where we send your invoices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="billingStreet" className="text-[#003366] font-semibold">
                Street Address *
              </Label>
              <Input
                id="billingStreet"
                defaultValue="123 Bonifacio Street"
                className="mt-2 border-gray-300 focus:border-[#003366]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="billingBarangay" className="text-[#003366] font-semibold">
                  Barangay *
                </Label>
                <Input
                  id="billingBarangay"
                  defaultValue="San Antonio"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                />
              </div>
              <div>
                <Label htmlFor="billingCity" className="text-[#003366] font-semibold">
                  City *
                </Label>
                <Input
                  id="billingCity"
                  defaultValue="Makati"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                />
              </div>
              <div>
                <Label htmlFor="billingZip" className="text-[#003366] font-semibold">
                  Zip Code *
                </Label>
                <Input
                  id="billingZip"
                  defaultValue="1203"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="sameAsService" defaultChecked className="text-[#003366]" />
              <Label htmlFor="sameAsService" className="text-sm text-gray-700 cursor-pointer">
                Same as service address
              </Label>
            </div>

            <Button className="bg-[#003366] hover:bg-[#00509E]" onClick={handleUpdateAddress}>
              Update Billing Address
            </Button>
          </CardContent>
        </Card>

        {/* Auto-Pay */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#003366] mb-2 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Automatic Payments
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Enable auto-pay to automatically charge your default payment method on the due date each month. Never miss a payment!
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="autopay"
                      className="w-4 h-4 text-[#003366]"
                      checked={autoPay}
                      onChange={(e) => {
                        setAutoPay(e.target.checked);
                        alert(e.target.checked ? 'Auto-pay enabled!' : 'Auto-pay disabled!');
                      }}
                    />
                    <Label htmlFor="autopay" className="text-sm font-medium text-[#003366] cursor-pointer">
                      Enable Auto-Pay
                    </Label>
                  </div>
                  <span className="text-xs text-gray-500">
                    You'll receive email confirmation before each payment
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pay Now Modal */}
      {showPayNow && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-[#003366]">Pay Now</CardTitle>
              <CardDescription>Amount Due: ₱1,299.00</CardDescription>
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
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'card' ? 'border-[#003366] bg-[#E6F0FF]' : 'border-gray-200 hover:border-[#003366]'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">💳</div>
                    <div>
                      <p className="font-semibold text-[#003366]">Credit Card</p>
                      <p className="text-xs text-gray-500">Visa •••• 4532</p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handlePayNow} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                  Confirm Payment
                </Button>
                <Button onClick={() => { setShowPayNow(false); setPaymentMethod(''); }} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Payment Method Modal */}
      {showAddPayment && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-[#003366]">Add Payment Method</CardTitle>
              <CardDescription>Add a new payment option</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cardNumber" className="text-[#003366] font-semibold">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-[#003366] font-semibold">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-[#003366] font-semibold">CVV</Label>
                  <Input id="cvv" placeholder="123" className="mt-2" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAddPayment} className="flex-1 bg-[#003366] hover:bg-[#00509E]">
                  Add Card
                </Button>
                <Button onClick={() => setShowAddPayment(false)} variant="outline" className="flex-1 border-[#003366] text-[#003366]">
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
