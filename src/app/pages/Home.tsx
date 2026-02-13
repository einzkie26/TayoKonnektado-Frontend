import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Clock, Users, Zap, CheckCircle, CreditCard, Headphones, Bell, Settings, BarChart, ArrowUp } from 'lucide-react';
import { ScrollFade } from '@/app/components/ScrollFade';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import rawr from '@/assets/rawr.png';
import clouds from '@/assets/clouds.png';
import tumbleweed from '@/assets/tumbleweed.png';

export function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    api.testConnection()
      .then(data => {
        console.log('Connection successful:', data);


      })
      .catch(error => {
        console.error('Connection failed:', error);


      });
  }, []);
  const modules = [
    {
      icon: Settings,
      title: 'Account Management',
      description: 'Manage your account details, subscriptions, and personal information with complete control and flexibility.'
    },
    {
      icon: Zap,
      title: 'Order & Service Management',
      description: 'Request new services, upgrade your plan, or modify existing internet service subscriptions seamlessly.'
    },
    {
      icon: CreditCard,
      title: 'Billing & Payment Processing',
      description: 'View bills, invoices, and securely pay your internet service fees online with multiple payment options.'
    },
    {
      icon: Headphones,
      title: 'Support Request System',
      description: 'Submit, track, and manage service or technical issues through our integrated ticketing system.'
    },
    {
      icon: BarChart,
      title: 'Self-Service Reports',
      description: 'Access detailed reports on your usage, billing history, and account activities anytime you need.'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Stay informed with real-time alerts about bills, payments, service updates, and important announcements.'
    }
  ];

  const objectives = [
    {
      title: 'Complete Account Control',
      description: 'A comprehensive web-based self-service system that empowers you to manage your accounts, subscriptions, and personal information online at your convenience.',
      icon: Users
    },
    {
      title: 'Efficient Billing & Payment',
      description: 'An integrated billing and payment platform where you can view bills, invoices, and securely pay your internet service fees using various payment methods.',
      icon: CreditCard
    },
    {
      title: 'Real-Time Information Access',
      description: 'Get instant access to billing information, invoices, and payment status with our real-time inquiry system for complete transparency.',
      icon: Clock
    },
    {
      title: 'Streamlined Support System',
      description: 'An online support request system that enables you to submit, track, and manage service or technical issues efficiently through our ticketing platform.',
      icon: Headphones
    }
  ];

  const features = [
    'Secure online account management',
    'Real-time billing and invoice viewing',
    'Multiple secure payment options',
    'Service subscription management',
    'Online support ticket system',
    'Automated notifications and alerts',
    'Detailed usage and billing reports',
    'Order tracking and history',
    'Personal information updates',
    '24/7 self-service access'
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img src={logo} alt="Logo" className="absolute top-8 right-8 w-64 h-64 object-contain opacity-20 z-20" />
          {/* Static stars */}
          <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-[20%] left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[25%] left-[65%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-[30%] left-[80%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-[50%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-[60%] left-[50%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-[55%] left-[70%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-[70%] left-[85%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.3s'}}></div>
          <div className="absolute top-[75%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
          <div className="absolute top-[80%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.6s'}}></div>
          <div className="absolute top-[85%] left-[60%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-[90%] left-[75%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.1s'}}></div>
          <div className="absolute top-[35%] left-[35%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
          <div className="absolute top-[45%] left-[55%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.9s'}}></div>
          <div className="absolute top-[12%] left-[90%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-[48%] left-[92%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-[78%] left-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.2s'}}></div>
          
          {/* Shooting stars */}
          <div className="absolute top-1/4 left-0 w-2 h-2 bg-white rounded-full opacity-0 animate-[shooting-star_4s_ease-in-out_infinite] shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]">
            <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[spark_4s_ease-out_infinite] [animation-delay:1.8s]">
              <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-white origin-bottom rotate-0 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-white origin-bottom rotate-45 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-white origin-bottom rotate-90 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-white origin-bottom rotate-[135deg] blur-[1px]"></div>
            </div>
          </div>
          <div className="absolute top-1/3 left-0 w-2 h-2 bg-yellow-300 rounded-full opacity-0 animate-[shooting-star_5s_ease-in-out_infinite_1s] shadow-[0_0_20px_5px_rgba(253,185,19,0.8)]">
            <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[spark_5s_ease-out_infinite_1s] [animation-delay:2.8s]">
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-yellow-300 origin-bottom rotate-0 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-yellow-300 origin-bottom rotate-45 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-yellow-300 origin-bottom rotate-90 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-yellow-300 origin-bottom rotate-[135deg] blur-[1px]"></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-200 rounded-full opacity-0 animate-[shooting-star_6s_ease-in-out_infinite_2s] shadow-[0_0_20px_5px_rgba(191,219,254,0.8)]">
            <div className="absolute inset-0 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[spark_6s_ease-out_infinite_2s] [animation-delay:3.8s]">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-sm"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-blue-200 origin-bottom rotate-0 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-blue-200 origin-bottom rotate-45 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-blue-200 origin-bottom rotate-90 blur-[1px]"></div>
              <div className="absolute top-0 left-1/2 w-1 h-4 bg-blue-200 origin-bottom rotate-[135deg] blur-[1px]"></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              TayoKonnektado
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">
              The Internet Self-Service Platform
            </p>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
              Manage your internet service account, pay bills, request support, and access all your account 
              information in one convenient platform. Experience seamless self-service at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-yellow-600 text-white hover:bg-yellow-500 hover:text-black px-8 py-6 text-lg font-semibold shadow-lg hover:animate-pulse transition-all">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollFade>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl mb-6">About TayoKonnektado Self-Service Platform</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TayoKonnektado is a comprehensive web-based self-service platform designed specifically for internet 
              service customers. Our system provides you with complete control over your account, enabling you to 
              manage subscriptions, view and pay bills, request technical support, and access detailed reports – 
              all from the comfort of your home or on-the-go.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl mb-6 text-center">What We Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our platform revolutionizes how you interact with your internet service provider. Gone are the days 
              of waiting in long queues or making phone calls for simple tasks. With TayoKonnektado, you have 
              instant access to all your account services, billing information, and support systems through an 
              intuitive, secure online interface.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you need to check your current bill, make a payment, upgrade your internet plan, or report 
              a technical issue, our self-service platform is available 24/7 to meet your needs. The system provides 
              real-time information updates, secure payment processing, and an efficient ticketing system for support 
              requests.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join thousands of satisfied customers who have discovered the convenience and efficiency of managing 
              their internet service through TayoKonnektado. Our platform is designed with your needs in mind, 
              offering transparency, security, and complete control over your internet service account.
            </p>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* System Modules Section */}
      <ScrollFade>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4">System Modules</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive features designed to give you complete control over your internet service account
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#003366]">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-[#003366]" size={32} />
                    </div>
                    <CardTitle className="text-[#003366]">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Platform Objectives Section */}
      <ScrollFade>
      <section className="py-16 bg-blue-50 relative overflow-hidden">
        <img src={logo} alt="" className="absolute top-8 left-8 w-40 h-40 object-contain opacity-60 rounded-full shadow-[0_0_40px_10px_rgba(234,179,8,0.6)] hidden md:block" />
        <img src={clouds} alt="" className="absolute top-8 left-0 w-32 h-16 object-contain opacity-40 animate-[run_15s_linear_infinite]" />
        <img src={clouds} alt="" className="absolute top-20 left-0 w-24 h-12 object-contain opacity-30 animate-[run_20s_linear_infinite]" />
        <img src={clouds} alt="" className="absolute top-12 left-0 w-28 h-14 object-contain opacity-35 animate-[run_18s_linear_infinite]" />
        <img src={clouds} alt="" className="absolute top-32 left-0 w-36 h-18 object-contain opacity-25 animate-[run_22s_linear_infinite]" />
        <img src={clouds} alt="" className="absolute top-40 left-0 w-20 h-10 object-contain opacity-30 animate-[run_16s_linear_infinite]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <img src={rawr} alt="" className="absolute bottom-2 w-8 h-8 object-contain animate-[run_8s_linear_infinite]" />
          <img src={tumbleweed} alt="" className="absolute bottom-2 w-6 h-6 object-contain animate-[tumble_10s_linear_infinite]" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4">Platform Objectives</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our mission is to provide you with the best self-service experience
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <CardTitle className="text-xl text-[#003366]">{objective.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Platform Features */}
      <ScrollFade>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-12">Self-Service Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#003366] flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* How It Works Section */}
      <ScrollFade>
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          {/* Static stars */}
          <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-[20%] left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[25%] left-[65%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-[30%] left-[80%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-[50%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-[60%] left-[50%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-[55%] left-[70%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-[70%] left-[85%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.3s'}}></div>
          <div className="absolute top-[75%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
          <div className="absolute top-[80%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.6s'}}></div>
          <div className="absolute top-[85%] left-[60%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-[90%] left-[75%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.1s'}}></div>
          <div className="absolute top-[35%] left-[35%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
          <div className="absolute top-[45%] left-[55%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.9s'}}></div>
          <div className="absolute top-[12%] left-[90%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-[48%] left-[92%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-[78%] left-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '2.2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Create Account', description: 'Register with your internet service account details' },
              { step: '2', title: 'Access Dashboard', description: 'Log in to view your personalized account dashboard' },
              { step: '3', title: 'Manage Services', description: 'View bills, make payments, request support, and more' },
              { step: '4', title: 'Stay Updated', description: 'Receive notifications and track all your activities' }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-blue-900/95 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#003366] hover:bg-[#00509E] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
}