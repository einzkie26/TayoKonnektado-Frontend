import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes';
import { GlowProvider } from '@/app/context/GlowContext';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <GlowProvider>
        <RouterProvider router={router} />
      </GlowProvider>
    </ThemeProvider>
  );
}
