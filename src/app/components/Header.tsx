import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import logo from '@/assets/logo.png';
import { useGlow } from '@/app/context/GlowContext';
import { useState, useEffect } from 'react';

export function Header() {
  const { isGlowing, triggerGlow } = useGlow();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`border-b sticky top-0 z-50 shadow-sm transition-colors duration-500 ${
      scrolled ? 'bg-[#003366]/95 backdrop-blur-sm' : (isGlowing ? 'bg-blue-600' : 'bg-white')
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TayoKonnektado Logo" className={`h-20 w-20 object-contain transition-all duration-500 ${
            scrolled ? 'brightness-0 invert' : (isGlowing ? 'drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]' : '')
          }`} />
          <span className={`text-2xl font-bold transition-colors duration-500 hidden md:block ${
            scrolled ? 'text-white' : (isGlowing ? 'text-white' : 'text-[#003366]')
          }`}>TayoKonnektado</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link to="/login" onClick={triggerGlow}>
            <Button 
              variant="outline" 
              className={`px-6 transition-all duration-300 ${
                scrolled
                  ? 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-500'
                  : (isGlowing 
                    ? 'bg-yellow-400 text-gray-900 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]' 
                    : 'border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white')
              }`}
            >
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}