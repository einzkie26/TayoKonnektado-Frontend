import { createContext, useContext, useState, type ReactNode } from 'react';

interface GlowContextType {
  isGlowing: boolean;
  triggerGlow: () => void;
}

const GlowContext = createContext<GlowContextType | undefined>(undefined);

export function GlowProvider({ children }: { children: ReactNode }) {
  const [isGlowing, setIsGlowing] = useState(false);

  const triggerGlow = () => {
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 3000);
  };

  return (
    <GlowContext.Provider value={{ isGlowing, triggerGlow }}>
      {children}
    </GlowContext.Provider>
  );
}

export function useGlow() {
  const context = useContext(GlowContext);
  if (!context) {
    throw new Error('useGlow must be used within GlowProvider');
  }
  return context;
}
