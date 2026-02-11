import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { User, Mail, Phone, MapPin, Calendar, Save } from 'lucide-react';

export function Profile() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your personal information and account details</p>
        </div>

        {/* Profile Header */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Juan Dela Cruz</h2>
                <p className="text-blue-100 mb-2">Customer ID: CUST-2025-00145</p>
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                  Active Member
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#003366] flex items-center gap-2">
                <User size={24} />
                Personal Information
              </CardTitle>
              <CardDescription>Update your basic profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-[#003366] font-semibold">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Juan"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-[#003366] font-semibold">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Dela Cruz"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="birthday" className="text-[#003366] font-semibold flex items-center gap-2">
                  <Calendar size={16} />
                  Birthday
                </Label>
                <Input
                  id="birthday"
                  type="date"
                  defaultValue="1990-05-15"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-[#003366] flex items-center gap-2">
                <Phone size={24} />
                Contact Information
              </CardTitle>
              <CardDescription>How we can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-[#003366] font-semibold flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="juan@example.com"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll send important account updates to this email
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobile" className="text-[#003366] font-semibold">
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    defaultValue="+63 912 345 6789"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="altPhone" className="text-[#003366] font-semibold">
                    Alternative Phone
                  </Label>
                  <Input
                    id="altPhone"
                    type="tel"
                    placeholder="Optional"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-[#003366] flex items-center gap-2">
                <MapPin size={24} />
                Service Address
              </CardTitle>
              <CardDescription>Where your internet service is installed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="street" className="text-[#003366] font-semibold">
                  Street Address *
                </Label>
                <Input
                  id="street"
                  defaultValue="123 Bonifacio Street"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="barangay" className="text-[#003366] font-semibold">
                    Barangay *
                  </Label>
                  <Input
                    id="barangay"
                    defaultValue="San Antonio"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[#003366] font-semibold">
                    City *
                  </Label>
                  <Input
                    id="city"
                    defaultValue="Makati"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-[#003366] font-semibold">
                    Zip Code *
                  </Label>
                  <Input
                    id="zipCode"
                    defaultValue="1203"
                    className="mt-2 border-gray-300 focus:border-[#003366]"
                    required
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#003366]">Note:</strong> To change your service address, please contact support or submit a relocation request. Address changes may require a site survey and reinstallation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" className="border-[#003366] text-[#003366]">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#003366] hover:bg-[#00509E]">
              <Save size={16} className="mr-2" />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
