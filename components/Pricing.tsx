
import React, { useState } from 'react';
import { TrendingUp, Check, ArrowRight, Zap, Trophy, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import Modal from './Modal';

type CaseType = 'basic' | 'pro' | 'enterprise';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [activeCase, setActiveCase] = useState<CaseType | null>(null);

  const handleOpenCase = (caseType: CaseType) => {
    setActiveCase(caseType);
  };

  const handleCloseCase = () => {
    setActiveCase(null);
  };

  const getCaseContent = (caseType: CaseType) => {
    const data = t.pricing[caseType];
    const labels = t.pricing.labels;

    return (
      <div className="space-y-6 p-6 md:p-8">
        {/* Header Summary */}
        {/* pr-12 added to prevent overlap with the floating close button */}
        <div className="flex items-start justify-between gap-4 mb-2 pb-4 border-b border-white/10 pr-12">
           <div>
             <div className="flex items-center gap-2 mb-1">
                <Sparkles className="h-4 w-4 text-teal-400" />
                <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">{t.pricing.save_badge}</span>
             </div>
             <h3 className="text-xl font-semibold text-white">{data.title}</h3>
           </div>
           <div className="text-right">
              <div className="text-2xl font-bold text-white tracking-tight">{data.price}</div>
              <div className="text-xs text-slate-400">{t.pricing.toggle_annual}</div>
           </div>
        </div>

        <div className="space-y-4">
            {/* Challenge */}
            <div className="group p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-all">
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                    <Target className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
                <div>
                    <h4 className="text-white font-medium text-sm mb-1.5">{labels.challenge}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{data.details.challenge}</p>
                </div>
            </div>
            </div>

            {/* Solution */}
            <div className="group p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-all">
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                    <Zap className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
                <div>
                    <h4 className="text-white font-medium text-sm mb-1.5">{labels.solution}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{data.details.solution}</p>
                </div>
            </div>
            </div>

            {/* Result */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent ring-1 ring-teal-500/20 overflow-hidden">
             <div className="absolute inset-0 bg-teal-400/5 pointer-events-none"></div>
             <div className="relative flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-teal-400/10 ring-1 ring-teal-400/20">
                    <Trophy className="h-4 w-4 text-teal-400" />
                </div>
                <div>
                    <h4 className="text-white font-medium text-sm mb-1.5">{labels.result}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{data.details.result}</p>
                </div>
            </div>
            </div>
        </div>

        <button 
            onClick={() => {
              handleCloseCase();
              // Delay slightly to allow modal close animation to start before opening booking
              setTimeout(openBooking, 200);
            }}
            className="w-full py-3.5 mt-4 bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-teal-400/20 flex items-center justify-center gap-2"
        >
            {t.pricing.want_to_know_more}
            <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="max-w-screen-2xl mx-auto pt-24 pb-24 px-6 lg:px-12" id="pricing">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
            <TrendingUp className="h-3 w-3" />
            {t.pricing.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
            {t.pricing.title_start} <span className="text-teal-400">{t.pricing.title_highlight}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.pricing.description}</p>
        </div>

        {/* Results Cards */}
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 mt-16">
          {/* Case 1 */}
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col hover:ring-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">{t.pricing.basic.title}</span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{t.pricing.basic.price}</span>
              </div>
              <p className="text-slate-300 mt-3">{t.pricing.basic.desc}</p>
            </div>

            <div className="my-8 h-px bg-white/10"></div>

            <ul className="space-y-3 text-slate-300 flex-1">
              {t.pricing.basic.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-teal-400 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-white/10"></div>

            <div className="space-y-2">
              <button 
                onClick={() => handleOpenCase('basic')}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl transition"
              >
                {t.pricing.get_started}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Case 2 (Most Popular) */}
          <div className="relative bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col hover:ring-teal-400/30 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-400/5 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">{t.pricing.pro.title}</span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">{t.pricing.most_popular}</span>
              </div>
              <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                      {t.pricing.pro.price}
                  </span>
                  </div>
                  <p className="text-slate-300 mt-3">{t.pricing.pro.desc}</p>
              </div>

              <div className="my-8 h-px bg-white/10"></div>

              <ul className="space-y-3 text-slate-300 flex-1">
                  {t.pricing.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-teal-400 mt-0.5" />
                      {feature}
                  </li>
                  ))}
              </ul>

              <div className="my-8 h-px bg-white/10"></div>

              <div className="space-y-2">
                  <button 
                    onClick={() => handleOpenCase('pro')}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl ring-1 ring-teal-400/30 transition shadow-lg shadow-teal-400/10"
                  >
                  {t.pricing.get_started}
                  <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col hover:ring-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">{t.pricing.enterprise.title}</span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  {t.pricing.enterprise.price}
                </span>
              </div>
              <p className="text-slate-300 mt-3">{t.pricing.enterprise.desc}</p>
            </div>

            <div className="my-8 h-px bg-white/10"></div>

            <ul className="space-y-3 text-slate-300 flex-1">
               {t.pricing.enterprise.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-teal-400 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-white/10"></div>

            <div className="space-y-2">
              <button 
                onClick={() => handleOpenCase('enterprise')}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl transition"
              >
                {t.pricing.get_started}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Modal
        isOpen={!!activeCase}
        onClose={handleCloseCase}
        title="" // Empty title in modal header, rendering custom header inside content
      >
        {activeCase && getCaseContent(activeCase)}
      </Modal>
    </>
  );
};

export default Pricing;
