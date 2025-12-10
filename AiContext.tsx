
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AiContextType {
  isAiOpen: boolean;
  setAiOpen: (isOpen: boolean) => void;
  externalMessage: string | null;
  sendExternalMessage: (message: string) => void;
  clearExternalMessage: () => void;
}

const AiContext = createContext<AiContextType | undefined>(undefined);

export const AiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAiOpen, setAiOpen] = useState(false);
  const [externalMessage, setExternalMessage] = useState<string | null>(null);

  const sendExternalMessage = (message: string) => {
    setExternalMessage(message);
    setAiOpen(true);
  };

  const clearExternalMessage = () => {
    setExternalMessage(null);
  };

  return (
    <AiContext.Provider value={{ 
      isAiOpen, 
      setAiOpen, 
      externalMessage, 
      sendExternalMessage, 
      clearExternalMessage 
    }}>
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => {
  const context = useContext(AiContext);
  if (!context) {
    throw new Error('useAi must be used within an AiProvider');
  }
  return context;
};
