import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Checkbox } from '@/app/components/ui/checkbox';
import { User, Mail, Lock, Calendar, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Register() {
  return (
    <div className="min-h-screen flex animate-in fade-in slide-in-from-left duration-500">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-[#003366] to-[#00509E] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0wIDZoMnYyaC0ydi0yem0wIDJoMnYyaC0ydi0yem0yIDBsMiAyaDJsLTItMmgtMnptLTItMmgtMnYyaDJ2LTJ6bTAtMmgtMnYyaDJ2LTJ6bTAgNmgtMnYyaDJ2LTJ6bTAtMmgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="relative z-10 text-white text-center max-w-md">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4">
              <img src={logo} alt="TayoKonnektado Logo" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">Join TayoKonnektado</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start managing your internet service with ease
          </p>
          <div className="space-y-4 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <span className="text-[#003366] font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-lg">Create Account</h3>
              </div>
              <p className="text-sm text-blue-100">Fill in your details to register</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <span className="text-[#003366] font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-lg">Verify Email</h3>
              </div>
              <p className="text-sm text-blue-100">Confirm your email address</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <span className="text-[#003366] font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-lg">Start Using</h3>
              </div>
              <p className="text-sm text-blue-100">Access all self-service features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-2xl">
          {/* Logo and Title - Mobile Only */}
          <div className="text-center mb-8 lg:hidden">
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#003366] mb-2">Create Your Account</h1>
              <p className="text-gray-600">Get started with TayoKonnektado self-service platform</p>
            </div>

            {/* Registration Form */}
            <form className="space-y-5">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#003366] font-medium">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Juan"
                      className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#003366] font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Dela Cruz"
                      className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#003366] font-medium">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                    required
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#003366] font-medium">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Min. 8 characters"
                      className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-[#003366] font-medium">
                    Confirm Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter password"
                      className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Birthday */}
              <div className="space-y-2">
                <Label htmlFor="birthday" className="text-[#003366] font-medium">
                  Birthday <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="birthday"
                    type="date"
                    className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[#003366] font-medium">
                  Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="address"
                    rows={3}
                    placeholder="Enter your complete address"
                    className="w-full pl-10 pt-3 pb-3 pr-3 border border-gray-300 rounded-lg focus:border-[#003366] focus:ring-[#003366] focus:outline-none resize-none"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <Checkbox 
                  id="terms" 
                  className="mt-1 border-[#003366] data-[state=checked]:bg-[#003366]" 
                  required 
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#003366] hover:text-[#00509E] font-medium underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-[#003366] hover:text-[#00509E] font-medium underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-[#003366] hover:bg-[#00509E] text-white font-semibold text-base"
              >
                Create Account
              </Button>

              {/* Social Registration */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="h-12 border-gray-300 hover:border-[#003366] hover:bg-gray-50"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
              </div>
            </form>

            <p className="text-center mt-8 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#003366] hover:text-[#00509E] font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}