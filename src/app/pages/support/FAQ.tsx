import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Search, HelpCircle, Wifi, DollarSign, Settings, Shield } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'Connection & Speed',
      icon: Wifi,
      color: 'blue',
      faqs: [
        {
          question: 'Why is my internet connection slow?',
          answer: 'Slow internet can be caused by several factors: too many devices connected, outdated router firmware, distance from the router, or network congestion. Try restarting your router, limiting connected devices, or upgrading your plan if you consistently need higher speeds.',
        },
        {
          question: 'How can I improve my Wi-Fi signal strength?',
          answer: 'To improve Wi-Fi signal: 1) Place your router in a central location, 2) Keep it elevated and away from walls, 3) Avoid interference from other electronics, 4) Consider using Wi-Fi extenders for larger homes, 5) Update your router firmware regularly.',
        },
        {
          question: 'What should I do if I have no internet connection?',
          answer: 'First, check if all cables are properly connected and the router lights are on. Restart your modem and router by unplugging for 30 seconds. If the issue persists, check our service status page or contact support. We can run remote diagnostics to identify the problem.',
        },
      ],
    },
    {
      category: 'Billing & Payments',
      icon: DollarSign,
      color: 'green',
      faqs: [
        {
          question: 'When is my monthly bill due?',
          answer: 'Your bill is due on the same date each month, starting from your activation date. You can view your exact due date in the Billing section of your dashboard. We send email reminders 7 days before the due date.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods: credit/debit cards, online banking, over-the-counter payments at partner locations, GCash, PayMaya, and auto-debit arrangements. You can manage your payment methods in Account Settings.',
        },
        {
          question: 'Can I get a refund for unused service?',
          answer: 'Refunds are processed on a case-by-case basis. For service outages longer than 24 hours (not due to scheduled maintenance), you may be eligible for a prorated credit. Contact our billing department to discuss your specific situation.',
        },
        {
          question: 'How do I set up automatic payments?',
          answer: 'Go to Account Management > Billing Information and click "Enable Auto-Pay". Link your preferred payment method and your bills will be automatically paid on the due date each month. You\'ll receive confirmation emails for each payment.',
        },
      ],
    },
    {
      category: 'Account Management',
      icon: Settings,
      color: 'purple',
      faqs: [
        {
          question: 'How do I change my plan?',
          answer: 'You can upgrade or downgrade your plan anytime through the "My Orders & Services" section. Select "Upgrade/Downgrade" and choose your new plan. Upgrades take effect immediately, while downgrades apply from your next billing cycle.',
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link. For security, this link expires after 1 hour. If you don\'t receive the email, check your spam folder or contact support.',
        },
        {
          question: 'Can I transfer my service to a new address?',
          answer: 'Yes! Submit a relocation request through support or call our customer service. We\'ll check availability at your new address and schedule the transfer. There may be a one-time relocation fee depending on the distance and installation requirements.',
        },
      ],
    },
    {
      category: 'Security & Privacy',
      icon: Shield,
      color: 'red',
      faqs: [
        {
          question: 'How do I change my Wi-Fi password?',
          answer: 'Access your router\'s admin panel (usually at 192.168.1.1), log in with your credentials, navigate to Wireless Settings, and update your password. Make sure to use a strong password with a mix of letters, numbers, and symbols. Reconnect all your devices after changing.',
        },
        {
          question: 'Is my personal information secure?',
          answer: 'We take data security seriously. All personal information is encrypted and stored on secure servers. We never share your data with third parties without consent. Review our Privacy Policy for complete details on how we protect your information.',
        },
        {
          question: 'How do I enable parental controls?',
          answer: 'Most modern routers include parental control features. Access your router settings, find the Parental Controls section, and set up website filters, time restrictions, and device limits. You can also use our Premium Security Suite add-on for advanced parental controls.',
        },
      ],
    },
    {
      category: 'Technical Support',
      icon: HelpCircle,
      color: 'orange',
      faqs: [
        {
          question: 'How do I set up my router?',
          answer: 'Connect the modem to your fiber outlet, connect the router to the modem, plug in power cables, and wait 2-3 minutes. Connect your device to the default Wi-Fi network (name and password on the router sticker). Access 192.168.1.1 to customize settings.',
        },
        {
          question: 'What are the router light indicators?',
          answer: 'Power (solid green = on), Internet (solid green = connected, red = no connection), Wi-Fi (blinking = active), LAN (blinking when devices connected). If you see red or no lights, check connections and restart the router.',
        },
        {
          question: 'Can I use my own router?',
          answer: 'Yes, you can use your own router, but it must be compatible with fiber connections. Connect it to our provided modem. Note that we can only provide technical support for our official equipment. Keep our router as backup in case of issues.',
        },
      ],
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find quick answers to common questions</p>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 focus:border-[#003366]"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        {faqCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-[#003366] flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`text-${category.color}-600`} size={24} />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#003366]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          );
        })}

        {/* Still Need Help */}
        <Card className="bg-gradient-to-br from-[#003366] to-[#00509E] text-white">
          <CardContent className="p-8 text-center">
            <HelpCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
            <p className="text-blue-100 mb-6">
              Can't find what you're looking for? Our support team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/dashboard/support/create">
                <button className="px-6 py-3 bg-[#FDB913] text-[#003366] rounded-lg font-semibold hover:bg-[#FCA311] transition-colors">
                  Create Support Ticket
                </button>
              </a>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30">
                Contact Us
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
