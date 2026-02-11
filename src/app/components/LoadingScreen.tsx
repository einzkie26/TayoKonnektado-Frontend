import { useEffect, useState } from 'react';
import wifiIcon1 from '@/assets/wifi_loading_icon-1.png';
import wifiIcon2 from '@/assets/wifi_loading_icon-2.png';
import wifiIcon3 from '@/assets/wifi_loading_icon-3.png';
import wifiIcon4 from '@/assets/wifi_loading_icon-4.png';
import wifiIconFull from '@/assets/wifi_loading_icon-full.png';

export function LoadingScreen() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const icons = [wifiIcon1, wifiIcon2, wifiIcon3, wifiIcon4, wifiIconFull];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setFadeOut(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-[#003366]/90 to-[#00509E]/90 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <img
          src={icons[currentIcon]}
          alt="Loading"
          className="w-32 h-32 animate-pulse-yellow"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/60 text-sm mt-4">© 2026 TayoKonnektado. All rights reserved.</p>
      </div>
      <style>{`
        @keyframes pulse-yellow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(234, 179, 8, 0.8)); }
          50% { filter: drop-shadow(0 0 40px rgba(234, 179, 8, 1)); }
        }
        .animate-pulse-yellow {
          animation: pulse-yellow 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
