
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Rings */}
      <circle cx="50" cy="55" r="35" stroke="url(#logoBlue)" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="50" cy="55" r="42" stroke="url(#logoBlue)" strokeWidth="0.5" strokeOpacity="0.1" />

      {/* Triquetra Knot Structure */}
      <g transform="translate(50, 58) scale(0.85)">
         {/* Loop 1 (Top) */}
         <path 
           d="M0 -45 C 15 -45, 30 -25, 0 10 C -30 -25, -15 -45, 0 -45 Z" 
           stroke="url(#logoMetal)" 
           strokeWidth="6" 
           fill="none"
         />
         {/* Loop 2 (Bottom Right) */}
         <path 
           d="M0 -45 C 15 -45, 30 -25, 0 10 C -30 -25, -15 -45, 0 -45 Z" 
           stroke="url(#logoMetal)" 
           strokeWidth="6" 
           fill="none"
           transform="rotate(120, 0, 5)"
         />
         {/* Loop 3 (Bottom Left) */}
         <path 
           d="M0 -45 C 15 -45, 30 -25, 0 10 C -30 -25, -15 -45, 0 -45 Z" 
           stroke="url(#logoMetal)" 
           strokeWidth="6" 
           fill="none"
           transform="rotate(240, 0, 5)"
         />
         
         {/* Circuit Lines (Overlay) */}
         <g filter="url(#glow)">
            <circle cx="0" cy="-35" r="1.5" fill="#2dd4bf" />
            <path d="M0 -35 L 0 -25" stroke="#2dd4bf" strokeWidth="1" />
            
            <g transform="rotate(120, 0, 5)">
               <circle cx="0" cy="-35" r="1.5" fill="#2dd4bf" />
               <path d="M0 -35 L 0 -25" stroke="#2dd4bf" strokeWidth="1" />
            </g>
            
            <g transform="rotate(240, 0, 5)">
               <circle cx="0" cy="-35" r="1.5" fill="#2dd4bf" />
               <path d="M0 -35 L 0 -25" stroke="#2dd4bf" strokeWidth="1" />
            </g>
         </g>
      </g>
    </svg>
  );
};

export default Logo;
