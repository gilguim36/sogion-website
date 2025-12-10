
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Bot, Send, Zap, Activity } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import { useAi } from '../AiContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const { sendExternalMessage } = useAi();
  
  // Animation state
  const [displayText, setDisplayText] = useState('');
  const [status, setStatus] = useState(t.hero.chat_status_gen);
  const [responseIndex, setResponseIndex] = useState(0);

  // User interaction state
  const [heroInputValue, setHeroInputValue] = useState('');

  // Animation Loop
  useEffect(() => {
    let isMounted = true;
    let charIndex = 0;
    
    const responses = t.hero.chat_responses;
    const safeIndex = responseIndex % responses.length;
    const targetText = responses[safeIndex];
    
    setStatus(t.hero.chat_status_gen);
    setDisplayText('');

    const typeInterval = setInterval(() => {
      if (!isMounted) return;
      
      if (charIndex < targetText.length) {
        setDisplayText(prev => targetText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setStatus(t.hero.chat_status_complete);
        
        setTimeout(() => {
          if (isMounted) {
            setResponseIndex(prev => (prev + 1) % responses.length);
          }
        }, 4000);
      }
    }, 40);

    return () => {
      isMounted = false;
      clearInterval(typeInterval);
    };
  }, [responseIndex, t.hero.chat_responses, t.hero.chat_status_gen, t.hero.chat_status_complete]);

  const handleHeroSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (heroInputValue.trim()) {
      sendExternalMessage(heroInputValue);
      setHeroInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleHeroSubmit();
    }
  };

  return (
    <section id="home" className="lg:pt-40 lg:pb-32 max-w-screen-2xl mx-auto pt-32 pb-24 px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <div className="opacity-0 translate-y-8 animate-fade-slide-in-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
              <Sparkles className="h-3 w-3" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
              {t.hero.title_start}<br />
              <span className="text-teal-400">{t.hero.title_highlight}</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={openBooking}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition shadow-lg"
              >
                {t.hero.cta_primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-semibold text-white">+60%</div>
                <div className="text-sm text-slate-400">{t.hero.stat_apps}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">49 days</div>
                <div className="text-sm text-slate-400">{t.hero.stat_uptime}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">1-3 mo</div>
                <div className="text-sm text-slate-400">{t.hero.stat_build_time}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chat Interface */}
        <div className="lg:col-span-5 opacity-0 translate-x-8 animate-fade-slide-in-2">
          <div className="relative">
            {/* Chat card */}
            <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sogion OS</div>
                    <div className="text-xs text-slate-400">System Active</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400">Monitoring</span>
                </div>
              </div>
              
              {/* Messages */}
              <div className="p-4 space-y-4 h-80">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-teal-400/20 ring-1 ring-teal-400/30 rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                    <p className="text-sm text-white">{t.hero.chat_user}</p>
                  </div>
                </div>
                
                {/* AI typing indicator */}
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-teal-400" />
                  </div>
                  <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl rounded-bl-md px-4 py-3 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-1 bg-teal-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">{status}</span>
                    </div>
                    <p className="text-sm text-white min-h-[40px]">
                        {displayText}
                        <span className="animate-pulse inline-block w-1 h-3 bg-teal-400 ml-1 align-middle"></span>
                    </p>
                    
                    {/* Progress indicators */}
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-1 w-1 bg-teal-400 rounded-full"></div>
                        <span className="text-slate-300">{t.hero.chat_progress_1}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-1 w-1 bg-teal-400 rounded-full"></div>
                        <span className="text-slate-300">{t.hero.chat_progress_2}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-1 w-1 bg-teal-400 rounded-full animate-pulse"></div>
                        <span className="text-slate-400">{t.hero.chat_progress_3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input - Now Interactive */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-xl p-3 focus-within:ring-teal-400/50 transition">
                  <input 
                    type="text" 
                    value={heroInputValue}
                    onChange={(e) => setHeroInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.hero.chat_input} 
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 outline-none" 
                  />
                  <button 
                    onClick={() => handleHeroSubmit()}
                    className="h-8 w-8 rounded-lg bg-teal-400 hover:bg-teal-300 flex items-center justify-center transition"
                  >
                    <Send className="h-4 w-4 text-slate-900" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 h-12 w-12 rounded-xl bg-teal-400/20 ring-1 ring-teal-400/30 flex items-center justify-center backdrop-blur-sm">
              <Zap className="h-5 w-5 text-teal-400" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center backdrop-blur-sm">
              <Activity className="h-4 w-4 text-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
