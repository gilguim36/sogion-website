
import React, { useState } from 'react';
import Modal from './Modal';
import { Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Updated to new Cal.com link with dark theme forced
const CALENDAR_URL = "https://cal.com/gilbertofilho/diagnostico-estrategico?theme=dark";

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="" // Empty title for floating X button style
      maxWidth="max-w-5xl"
      noBodyScroll={true} // Disables parent scrolling to prevent double scrollbar
    >
      <div className="bg-slate-900 flex flex-col h-[80vh]">
        {/* Custom Internal Header matching result cards aesthetic */}
        <div className="flex items-center gap-3 p-6 pb-2 md:p-8 md:pb-4 pr-12 bg-slate-900 border-b border-white/5 shrink-0">
          <div className="p-2 rounded-lg bg-teal-400/10 ring-1 ring-teal-400/20">
             <Calendar className="h-5 w-5 text-teal-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white tracking-tight">Agendar Diagnóstico</h3>
        </div>

        <div className="flex-1 relative bg-slate-900 w-full overflow-hidden rounded-b-2xl">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
              <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <span className="text-slate-400 text-sm">Carregando agenda...</span>
            </div>
          )}
          
          {/* Styles to hide scrollbar visually while allowing scrolling */}
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
              }
            `}
          </style>
          
          <iframe
            src={CALENDAR_URL}
            className="w-full h-full border-none bg-slate-900 hide-scrollbar"
            title="Agendar Diagnóstico"
            allow="camera; microphone; autoplay; fullscreen"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
