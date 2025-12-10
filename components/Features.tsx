
import React from 'react';
import { Sparkles, Check, Activity, Shield, GitBranch, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-screen-2xl mx-auto pt-24 pb-24 px-6 lg:px-12" id="features">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
          <Sparkles className="h-3 w-3" />
          {t.features.badge}
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
          {t.features.title_start}<br />
          <span className="text-teal-400">{t.features.title_highlight}</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {t.features.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 xl:gap-10">
        {/* Feature 1: Automated Workflows (was Smart Code) */}
        <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(16,185,129,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f1.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f1.desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                  <span className="text-xs text-slate-300 font-medium">workflow_engine.ts</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-xs font-mono">
                <div className="text-emerald-300">{t.features.f1.comment}</div>
                <div className="text-slate-200">async function <span className="text-teal-400">runAutomation</span>() {'{'}</div>
                <div className="text-slate-200 pl-4">await <span className="text-purple-400">crm</span>.syncContacts();</div>
                <div className="text-slate-200 pl-4">await <span className="text-yellow-400">sales</span>.triggerSequence();</div>
                <div className="text-slate-200">{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Frictionless Operation (was Beautiful UI) */}
        <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(192,132,252,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f2.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f2.desc}
            </p>
          </div>

          <div className="relative">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
                <div className="h-8 w-8 rounded bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-white/50" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                     <div className="h-2 w-20 rounded bg-white/20"></div>
                     <span className="text-[10px] text-emerald-400">+45%</span>
                  </div>
                  <div className="h-1.5 w-full rounded bg-white/10 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
                <div className="h-8 w-8 rounded bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center">
                    <Server className="h-4 w-4 text-white/50" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                     <div className="h-2 w-24 rounded bg-white/20"></div>
                     <span className="text-[10px] text-emerald-400">-30% Cost</span>
                  </div>
                  <div className="h-1.5 w-full rounded bg-white/10 overflow-hidden">
                      <div className="h-full bg-blue-400 w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Data Driven Decisions (was Analytics) */}
        <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(244,114,182,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f3.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f3.desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white font-medium">{t.features.f3.label_perf}</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                  <span className="text-xs text-emerald-400">Optimized</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">{t.features.f3.label_resp}</span>
                  <span className="text-xs text-white font-medium">0.2s</span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/10">
                  <div className="h-1 rounded-full bg-gradient-to-r from-emerald-400 w-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">{t.features.f3.label_users}</span>
                  <span className="text-xs text-white font-medium">1,204</span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/10">
                  <div className="h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Enterprise Security */}
        <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(52,211,153,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f4.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f4.desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">{t.features.f4.label_status}</span>
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400">{t.features.f4.label_protected}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">{t.features.f4.label_ssl}</span>
                    </div>
                    <span className="text-xs text-emerald-400">{t.features.f4.val_active}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">{t.features.f4.label_2fa}</span>
                    </div>
                    <span className="text-xs text-emerald-400">{t.features.f4.val_enabled}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">{t.features.f4.label_enc}</span>
                    </div>
                    <span className="text-xs text-emerald-400">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Feature 5: Process Control (was Version Control) */}
         <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(96,165,250,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f5.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f5.desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white font-medium">{t.features.f5.label_repo}</span>
                <div className="flex items-center gap-1">
                  <GitBranch className="h-3 w-3 text-blue-400" />
                  <span className="text-xs text-blue-400">Audit</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-xs text-white font-medium">{t.features.f5.commit_1}</div>
                    <div className="text-xs text-slate-400">{t.features.f5.time_1}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-xs text-white font-medium">{t.features.f5.commit_2}</div>
                    <div className="text-xs text-slate-400">{t.features.f5.time_2}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-xs text-white font-medium">{t.features.f5.commit_3}</div>
                    <div className="text-xs text-slate-400">{t.features.f5.time_3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 6: Scalable Infrastructure (was Deploy) */}
        <div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(45,212,191,0.12),_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-white mb-4">{t.features.f6.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t.features.f6.desc}
            </p>
          </div>

          <div className="relative">
            <div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white font-medium">{t.features.f6.label_deploy}</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span className="text-xs text-teal-400">{t.features.f6.label_live}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-400" />
                    <span className="text-xs text-slate-300">{t.features.f6.label_build}</span>
                  </div>
                  <span className="text-xs text-teal-400">{t.features.f6.val_complete}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Check className="h-4 w-4 text-teal-400" />
                    <span className="text-xs text-slate-300">{t.features.f6.label_ssl}</span>
                  </div>
                  <span className="text-xs text-teal-400">{t.features.f6.val_active}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Check className="h-4 w-4 text-teal-400" />
                    <span className="text-xs text-slate-300">{t.features.f6.label_cdn}</span>
                  </div>
                  <span className="text-xs text-teal-400">{t.features.f6.val_global}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
