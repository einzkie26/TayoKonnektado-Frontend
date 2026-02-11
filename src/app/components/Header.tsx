import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import logo from '@/assets/logo.png';
import { useGlow } from '@/app/context/GlowContext';

export function Header() {
  const { isGlowing, triggerGlow } = useGlow();

  return (
    <header className={`border-b sticky top-0 z-50 shadow-sm transition-colors duration-500 ${
      isGlowing ? 'bg-blue-600' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TayoKonnektado Logo" className={`h-16 w-16 object-contain transition-all duration-500 ${
            isGlowing ? 'drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]' : ''
          }`} />
          <span className={`text-2xl font-bold transition-colors duration-500 ${
            isGlowing ? 'text-white' : 'text-[#003366]'
          }`}>TayoKonnektado</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link to="/login" onClick={triggerGlow}>
            <Button 
              variant="outline" 
              className={`px-6 transition-all duration-300 ${
                isGlowing 
                  ? 'bg-yellow-400 text-gray-900 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]' 
                  : 'border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white'
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