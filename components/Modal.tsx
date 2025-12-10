
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string; // Prop opcional para controlar a largura
  noBodyScroll?: boolean; // Nova prop para desabilitar o scroll do corpo do modal
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = "max-w-2xl",
  noBodyScroll = false 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative w-full ${maxWidth} bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-fade-slide-in-1 overflow-hidden backdrop-blur-xl`}>
        
        {/* Header Logic: Only render standard header bar if title exists. Otherwise, use floating button. */}
        {title ? (
          <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-slate-900/50">
            <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/20 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 backdrop-blur-md"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Body */}
        <div className={`p-0 ${noBodyScroll ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'} text-slate-300 leading-relaxed flex-1 relative`}>
           {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
