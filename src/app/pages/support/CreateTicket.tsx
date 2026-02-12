import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { AlertCircle, Upload, Send } from 'lucide-react';
import { useState } from 'react';

export function CreateTicket() {
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');

  const categories = [
    { value: 'connection', label: 'Connection Issue', description: 'Slow speeds, disconnections, no internet' },
    { value: 'billing', label: 'Billing Inquiry', description: 'Payment questions, invoice issues' },
    { value: 'technical', label: 'Technical Support', description: 'Equipment, setup, configuration' },
    { value: 'account', label: 'Account Management', description: 'Profile updates, password reset' },
    { value: 'upgrade', label: 'Service Upgrade', description: 'Plan changes, add-ons' },
    { value: 'other', label: 'Other', description: 'General inquiries' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission
    alert('Ticket submitted successfully!');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Create Support Ticket</h1>
          <p className="text-gray-600">Submit a new support request and our team will assist you</p>
        </div>

        {/* Quick Tips */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-blue-900 mb-1">Tips for faster resolution:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Provide detailed information about your issue</li>
                  <li>Include error messages or screenshots if available</li>
                  <li>Mention troubleshooting steps you've already tried</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366]">Ticket Details</CardTitle>
              <CardDescription>Fill in the information below to submit your request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-[#003366] mb-3 block font-semibold">Issue Category *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setCategory(cat.value)}
                      className={`p-3 sm:p-4 rounded-lg border-2 text-left transition-all ${
                        category === cat.value
                          ? 'border-[#003366] bg-[#E6F0FF]'
                          : 'border-gray-200 hover:border-[#003366] hover:bg-gray-50'
                      }`}
                    >
                      <p className="font-semibold text-[#003366] mb-1 text-sm sm:text-base">{cat.label}</p>
                      <p className="text-xs text-gray-600">{cat.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-[#003366] mb-3 block font-semibold">Priority Level *</Label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { value: 'low', label: 'Low', color: 'green' },
                    { value: 'medium', label: 'Medium', color: 'yellow' },
                    { value: 'high', label: 'High', color: 'red' },
                  ].map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setPriority(p.value)}
                      className={`p-2 sm:p-3 rounded-lg border-2 transition-all ${
                        priority === p.value
                          ? 'border-[#003366] bg-[#E6F0FF]'
                          : 'border-gray-200 hover:border-[#003366]'
                      }`}
                    >
                      <span className="font-semibold text-[#003366] text-sm sm:text-base">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <Label htmlFor="subject" className="text-[#003366] font-semibold">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  placeholder="Brief description of your issue"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-[#003366] font-semibold">
                  Detailed Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Please provide as much detail as possible about your issue..."
                  className="mt-2 min-h-[150px] border-gray-300 focus:border-[#003366]"
                  required
                />
              </div>

              {/* Attachments */}
              <div>
                <Label className="text-[#003366] font-semibold block mb-2">
                  Attachments (Optional)
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#003366] transition-colors cursor-pointer">
                  <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Screenshots, error logs, or related files (Max 10MB)
                  </p>
                </div>
              </div>

              {/* Contact Preference */}
              <div>
                <Label className="text-[#003366] font-semibold block mb-2">
                  Preferred Contact Method
                </Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact" value="email" defaultChecked className="text-[#003366]" />
                    <span className="text-sm text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact" value="sms" className="text-[#003366]" />
                    <span className="text-sm text-gray-700">SMS</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact" value="both" className="text-[#003366]" />
                    <span className="text-sm text-gray-700">Both</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="submit" className="bg-[#003366] hover:bg-[#00509E] flex-1">
                  <Send size={16} className="mr-2" />
                  Submit Ticket
                </Button>
                <Button type="button" variant="outline" className="border-[#003366] text-[#003366]">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Response Time Info */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-3">Expected Response Times</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-red-600 mb-1">High Priority</p>
                <p className="text-gray-700">Within 2-4 hours</p>
              </div>
              <div>
                <p className="font-semibold text-yellow-600 mb-1">Medium Priority</p>
                <p className="text-gray-700">Within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold text-green-600 mb-1">Low Priority</p>
                <p className="text-gray-700">Within 48 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
