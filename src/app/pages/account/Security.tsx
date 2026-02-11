import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Shield, Lock, Smartphone, Key, CheckCircle, AlertTriangle } from 'lucide-react';

export function Security() {
  const loginHistory = [
    { device: 'Chrome on Windows', location: 'Makati, Philippines', date: 'Feb 7, 2026 2:30 PM', current: true },
    { device: 'Safari on iPhone', location: 'Makati, Philippines', date: 'Feb 6, 2026 9:15 AM', current: false },
    { device: 'Chrome on Android', location: 'Manila, Philippines', date: 'Feb 5, 2026 6:45 PM', current: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Security Settings</h1>
          <p className="text-gray-600">Manage your account security and authentication</p>
        </div>

        {/* Security Status */}
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Shield size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Account Security: Good</h3>
                <p className="text-green-100">
                  Your account is protected with a strong password. Consider enabling two-factor authentication for extra security.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Lock size={24} />
              Change Password
            </CardTitle>
            <CardDescription>Update your account password regularly for better security</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="currentPassword" className="text-[#003366] font-semibold">
                  Current Password *
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="newPassword" className="text-[#003366] font-semibold">
                  New Password *
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
                <div className="mt-2 space-y-1 text-xs">
                  <p className="text-gray-600 font-semibold">Password must contain:</p>
                  <ul className="list-disc list-inside space-y-0.5 text-gray-600">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One number</li>
                    <li>One special character</li>
                  </ul>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-[#003366] font-semibold">
                  Confirm New Password *
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="mt-2 border-gray-300 focus:border-[#003366]"
                  required
                />
              </div>

              <Button type="submit" className="bg-[#003366] hover:bg-[#00509E]">
                Update Password
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Smartphone size={24} />
              Two-Factor Authentication (2FA)
            </CardTitle>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <AlertTriangle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Two-factor authentication is not enabled</p>
                  <p className="text-gray-700">
                    Protect your account with an additional security code sent to your mobile device each time you sign in.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#003366]">Choose 2FA Method:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#003366] hover:bg-[#E6F0FF] transition-all text-left">
                    <p className="font-semibold text-[#003366] mb-1">SMS Authentication</p>
                    <p className="text-xs text-gray-600">Receive codes via text message</p>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#003366] hover:bg-[#E6F0FF] transition-all text-left">
                    <p className="font-semibold text-[#003366] mb-1">Authenticator App</p>
                    <p className="text-xs text-gray-600">Use Google Authenticator or similar</p>
                  </button>
                </div>
              </div>

              <Button className="bg-[#003366] hover:bg-[#00509E]">
                Enable Two-Factor Authentication
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Login Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#003366] flex items-center gap-2">
              <Key size={24} />
              Recent Login Activity
            </CardTitle>
            <CardDescription>Review your recent account access history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {loginHistory.map((login, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    login.current
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-semibold text-[#003366]">{login.device}</p>
                        {login.current && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                            <CheckCircle size={12} />
                            Current Session
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{login.location}</p>
                        <p className="text-xs">{login.date}</p>
                      </div>
                    </div>
                    {!login.current && (
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        Revoke
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong className="text-yellow-900">Notice:</strong> If you see any unfamiliar activity, change your password immediately and contact support.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card className="bg-[#E6F0FF] border-[#003366]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#003366] mb-3 flex items-center gap-2">
              <Shield size={20} />
              Security Best Practices
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Never share your password with anyone, including TayoKonnektado staff</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Use a unique password that you don't use on other websites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Enable two-factor authentication for maximum account protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Always log out when using shared or public computers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Be cautious of phishing emails claiming to be from TayoKonnektado</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
