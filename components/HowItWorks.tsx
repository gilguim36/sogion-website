
import React from 'react';
import { Workflow, Zap, Activity, Rocket, Settings, Sidebar, Sparkles, LayoutDashboard, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="max-w-screen-2xl mx-auto pt-24 pb-24 px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-20 xl:gap-32 items-center">
        {/* Left: How it works steps */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-8">
            <Workflow className="h-3 w-3" />
            {t.how.badge}
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            {t.how.title_start}<br />
            <span className="text-teal-400">{t.how.title_highlight}</span>
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            {t.how.description}
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-teal-400/5 ring-1 ring-teal-400/20 flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5 text-teal-400" />
                </div>
                <div className="-translate-x-0.5 w-px bg-gradient-to-b from-teal-400/60 to-teal-400/10 h-8 absolute top-12 left-1/2"></div>
              </div>
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3 mb-3 justify-between">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{t.how.step1.title}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-teal-400 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full">01</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {t.how.step1.desc}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 flex items-center justify-center shadow-lg">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div className="absolute left-1/2 -translate-x-0.5 top-12 w-px h-8 bg-gradient-to-b from-white/40 to-white/10"></div>
              </div>
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3 mb-3 justify-between">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{t.how.step2.title}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-white bg-white/10 ring-1 ring-white/20 rounded-full">02</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {t.how.step2.desc}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 ring-1 ring-emerald-400/20 flex items-center justify-center shadow-lg">
                  <Rocket className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="absolute left-1/2 -translate-x-0.5 top-12 w-px h-8 bg-gradient-to-b from-emerald-400/60 to-emerald-400/10"></div>
              </div>
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3 mb-3 justify-between">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{t.how.step3.title}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 ring-1 ring-emerald-400/20 rounded-full">03</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {t.how.step3.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product mockup */}
        <div className="lg:col-span-7">
          <div className="relative">
            {/* Soft glow */}
            <div className="absolute inset-0 -m-8 pointer-events-none rounded-3xl blur-sm bg-[radial-gradient(60%_50%_at_70%_30%,_rgba(45,212,191,0.12),_transparent_60%)]"></div>

            <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-teal-400"></div>
                  <span className="text-sm text-white font-medium">{t.how.console.title}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Settings className="h-4 w-4" />
                  <Sidebar className="h-4 w-4" />
                </div>
              </div>

              {/* Top actions */}
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <button className="group w-full text-left bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl p-4 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-teal-400/20 ring-1 ring-teal-400/30 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{t.how.console.action_create}</div>
                        <div className="text-xs text-slate-400">{t.how.console.action_create_desc}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </button>

                <div className="w-full bg-white/5 ring-1 ring-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                        <LayoutDashboard className="h-4 w-4 text-slate-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{t.how.console.action_template}</div>
                        <div className="text-xs text-slate-400">{t.how.console.action_template_desc}</div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 ring-1 ring-white/10">{t.how.console.tag_starter}</span>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="px-6 py-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-medium text-white">{t.how.console.analytics}</span>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{t.how.console.period}</span>
                    <span className="h-1 w-1 rounded-full bg-teal-400"></span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-2">{t.how.console.stat_views}</div>
                    <div className="text-2xl font-semibold text-white mb-1">403</div>
                    <div className="text-xs text-emerald-400">+13.2%</div>
                  </div>
                  <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-2">{t.how.console.stat_build}</div>
                    <div className="text-2xl font-semibold text-white mb-1">2m 04s</div>
                    <div className="text-xs text-emerald-400">‑9%</div>
                  </div>
                  <div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-2">{t.how.console.stat_deploys}</div>
                    <div className="text-2xl font-semibold text-white mb-1">58</div>
                    <div className="text-xs text-emerald-400">+4</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="w-full h-24 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="flex items-end justify-between gap-1 h-full">
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '35%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '55%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '70%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '45%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '85%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '60%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '92%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '75%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '65%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '50%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '80%'}}></div>
                    <div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '68%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;