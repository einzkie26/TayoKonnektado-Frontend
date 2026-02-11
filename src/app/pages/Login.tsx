import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Lock, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';
import loginImage from '@/images/login_right_side-photo.png';
import { useGlow } from '@/app/context/GlowContext';
import { api } from '@/services/api';
import { useState } from 'react';

export function Login() {
  const navigate = useNavigate();
  const { isGlowing, triggerGlow } = useGlow();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerGlow();
    // Check if admin credentials
    if (email.toLowerCase() === 'admin@gmail.com' && password.toLowerCase() === 'admin') {
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 300);
    } else {
      // Allow login with any credentials since this is frontend only
      setTimeout(() => {
        navigate('/dashboard');
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex animate-in fade-in slide-in-from-right duration-500">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white shadow-2xl relative z-10">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <img src={logo} alt="TayoKonnektado Logo" className={`h-36 object-contain transition-all duration-500 ${
                isGlowing ? 'drop-shadow-[0_0_20px_rgba(37,99,235,0.8)]' : ''
              }`} />
            </div>
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSignIn}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#003366] font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#003366] font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 h-12 border-gray-300 focus:border-[#003366] focus:ring-[#003366]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-[#003366] data-[state=checked]:bg-[#003366]" />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-[#003366] hover:text-[#00509E] font-medium">
                Forgot Password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-[#003366] hover:bg-[#00509E] text-white font-semibold text-base"
            >
              Sign In
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
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
            Don't have an account?{' '}
            <Link to="/register" className="text-[#003366] hover:text-[#00509E] font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#003366] to-[#00509E] items-center justify-center p-12 relative overflow-hidden">
        <img src={loginImage} alt="TayoKonnektado" className="absolute inset-0 w-full h-full object-cover animate-[pan_30s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-blue-300/40"></div>
      </div>
    </div>
  );
}