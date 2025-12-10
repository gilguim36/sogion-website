
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import { BookingProvider, useBooking } from './BookingContext';
import { AiProvider } from './AiContext';
import AiAgent from './components/AiAgent';
import BookingModal from './components/BookingModal';

// Extend the window interface to include UnicornStudio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

function AppContent() {
  const { isBookingOpen, closeBooking } = useBooking();

  useEffect(() => {
    // Function to initialize UnicornStudio
    const initUnicorn = () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      }, 100);
    };

    // Check if script is already present
    const scriptId = 'unicorn-studio-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = initUnicorn;
      document.body.appendChild(script);
    } else {
      // If script is already there, try to init immediately
      initUnicorn();
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background container expected by UnicornStudio script */}
      {/* z-0 ensures it is above the body background but behind the content (z-10) */}
      <div className="aura-background-component fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <div data-us-project="OMO2zbNkRGUqAVYhB4jD" className="absolute top-0 left-0 w-full h-full"></div>
        {/* Fallback gradient if script fails or loads slowly */}
        <div className="absolute inset-0 bg-slate-950 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>
      </div>

      <div className="relative z-10 isolate">
        <Header />
        <Hero />
        
        {/* Divider */}
        <div className="max-w-screen-2xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <Features />

        {/* Divider */}
        <div className="max-w-screen-2xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <HowItWorks />

        {/* Divider */}
        <div className="max-w-screen-2xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <Pricing />
        
        {/* Divider */}
        <div className="max-w-screen-2xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <Footer />
        <AiAgent />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <AiProvider>
          <AppContent />
        </AiProvider>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;
