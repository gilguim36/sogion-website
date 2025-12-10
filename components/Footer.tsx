import React, { useState } from 'react';
import { Github, Linkedin, ArrowRight, FileText, Users, Mail, TrendingUp, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import Modal from './Modal';

// Moved outside to fix type errors and improve performance
const ModalHeader = ({ title, icon: Icon }: { title: string, icon?: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-8 pr-12">
    {Icon && (
      <div className="p-2 rounded-lg bg-teal-400/10 ring-1 ring-teal-400/20">
        <Icon className="h-5 w-5 text-teal-400" />
      </div>
    )}
    <h3 className="text-2xl font-semibold text-white tracking-tight">{title}</h3>
  </div>
);

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = "" }) => (
  <div className={`p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 ${className}`}>
    {children}
  </div>
);

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, modalKey: string) => {
    e.preventDefault();
    setActiveModal(modalKey);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getModalContent = (key: string) => {
    const isPt = language === 'pt';

    switch (key) {
      case 'features': // Diagnóstico
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Diagnóstico Operacional" : "Operational Diagnosis"} icon={Sparkles} />
              
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {isPt ? "O ponto de partida para a transformação do seu negócio. Não operamos com 'achismos', operamos com dados." : "The starting point for your business transformation. We don't operate on guesses, we operate on data."}
                </p>
                
                <div className="space-y-3">
                  <Box className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-400/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-teal-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{isPt ? "Mapeamento de Fluxos" : "Flow Mapping"}</h4>
                      <p className="text-sm text-slate-400">{isPt ? "Análise completa de dados e processos manuais." : "Complete analysis of data flows and manual processes."}</p>
                    </div>
                  </Box>
                  
                  <Box className="flex items-start gap-4">
                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-400/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-teal-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{isPt ? "Caça aos Gargalos" : "Bottleneck Hunting"}</h4>
                      <p className="text-sm text-slate-400">{isPt ? "Identificação de onde você perde margem de lucro." : "Identification of where you are losing profit margin."}</p>
                    </div>
                  </Box>

                  <Box className="flex items-start gap-4">
                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-400/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-teal-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{isPt ? "Roadmap Técnico" : "Technical Roadmap"}</h4>
                      <p className="text-sm text-slate-400">{isPt ? "Plano de ação com ROI projetado e prazos claros." : "Action plan with projected ROI and clear deadlines."}</p>
                    </div>
                  </Box>
                </div>

                <button 
                  onClick={() => {
                    closeModal();
                    setTimeout(openBooking, 300);
                  }}
                  className="w-full py-3.5 mt-2 bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-teal-400/20 flex items-center justify-center gap-2"
                >
                  {isPt ? "Solicitar Diagnóstico Gratuito" : "Request Free Diagnosis"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
        );

      case 'pricing': // Resultados
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Resultados Comprovados" : "Proven Results"} icon={TrendingUp} />
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Box className="text-center py-6">
                    <div className="text-3xl font-bold text-white mb-2">+45%</div>
                    <div className="text-sm text-teal-400 font-medium">{isPt ? "Eficiência Média" : "Avg. Efficiency"}</div>
                  </Box>
                  <Box className="text-center py-6">
                    <div className="text-3xl font-bold text-white mb-2">-30%</div>
                    <div className="text-sm text-blue-400 font-medium">{isPt ? "Custo Operacional" : "Operational Cost"}</div>
                  </Box>
                </div>
                
                <Box>
                  <p className="text-slate-300 leading-relaxed">
                    {isPt 
                      ? "Nossos clientes não buscam apenas 'usar IA', eles buscam impacto financeiro direto. Transformamos ineficiência em caixa livre e escalabilidade previsível." 
                      : "Our clients don't just want to 'use AI', they seek direct financial impact. We turn inefficiency into free cash flow and predictable scalability."}
                  </p>
                </Box>

                 <button 
                  onClick={() => {
                    closeModal();
                    setTimeout(openBooking, 300);
                  }}
                  className="w-full py-3.5 mt-2 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {isPt ? "Ver como podemos ajudar" : "See how we can help"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
        );

      case 'examples': // Cases
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Cases de Sucesso" : "Success Stories"} icon={Users} />
              
              <div className="space-y-4">
                <div className="group p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-400/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-white group-hover:text-teal-400 transition">{isPt ? "Logística & Supply Chain" : "Logistics & Supply Chain"}</h4>
                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4">
                    {isPt ? "Automação de rastreio e emissão de notas reduziu equipe de backoffice em 60%." : "Tracking automation and invoicing reduced backoffice team by 60%."}
                  </p>
                </div>

                <div className="group p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-400/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-white group-hover:text-teal-400 transition">{isPt ? "Fintech & Serviços" : "Fintech & Services"}</h4>
                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                  </div>
                   <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4">
                    {isPt ? "Atendimento via IA aumentou retenção de clientes em 18% no primeiro trimestre." : "AI support increased customer retention by 18% in the first quarter."}
                  </p>
                </div>
              </div>
            </div>
        );

      case 'docs': // Metodologia
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Nossa Metodologia" : "Our Methodology"} icon={FileText} />
              
              <div className="space-y-6">
                <p className="text-slate-300">
                  {isPt ? "Ciclo ágil focado em entregas rápidas e evolução constante." : "Agile cycle focused on fast delivery and constant evolution."}
                </p>
                
                <div className="space-y-3">
                   <Box className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-teal-400/10">
                        <FileText className="h-5 w-5 text-teal-400" />
                      </div>
                      <div>
                          <div className="text-white font-medium">{isPt ? "1. Discovery" : "1. Discovery"}</div>
                          <div className="text-xs text-slate-400">{isPt ? "Entendimento profundo do negócio." : "Deep business understanding."}</div>
                      </div>
                   </Box>
                   <Box className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-purple-400/10">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                          <div className="text-white font-medium">{isPt ? "2. Build & Deploy" : "2. Build & Deploy"}</div>
                          <div className="text-xs text-slate-400">{isPt ? "Desenvolvimento modular e seguro." : "Modular and secure development."}</div>
                      </div>
                   </Box>
                   <Box className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-blue-400/10">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                          <div className="text-white font-medium">{isPt ? "3. Training & Handoff" : "3. Training & Handoff"}</div>
                          <div className="text-xs text-slate-400">{isPt ? "Sua equipe no controle." : "Your team in control."}</div>
                      </div>
                   </Box>
                </div>
              </div>
            </div>
        );

      case 'about': // Sobre
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title="Sogion" />
              
              <div className="space-y-6">
                <div className="text-lg text-slate-300 space-y-4">
                  <p>
                    {isPt 
                      ? "Somos uma empresa de Engenharia de Dados especializada em Inteligência Artificial e Automação." 
                      : "We are a Data Engineering company specializing in Artificial Intelligence and Automation."}
                  </p>
                  <p>
                    {isPt ? "Nossa missão é eliminar o trabalho repetitivo e liberar o potencial humano." : "Our mission is to eliminate repetitive work and unleash human potential."}
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-teal-400/10 to-transparent border border-teal-400/20 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Sparkles className="h-24 w-24 text-teal-400" />
                   </div>
                   <p className="text-teal-300 text-lg font-medium italic relative z-10">
                    {isPt ? "\"O futuro pertence a quem opera na velocidade da IA.\"" : "\"The future belongs to those who operate at AI speed.\""}
                   </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <a 
                    href="https://www.econodata.com.br/consulta-empresa/60828987000169-sogion-ltda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors"
                  >
                    Sogion Ltda • CNPJ: 60.828.987/0001-69
                  </a>
                </div>
              </div>
            </div>
        );

      case 'blog': // Blog
        return (
            <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px]">
               <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10">
                <FileText className="h-8 w-8 text-slate-400" />
              </div>
              <h4 className="text-xl font-medium text-white mb-3">{isPt ? "Em breve" : "Coming Soon"}</h4>
              <p className="text-slate-400 text-center max-w-sm">
                {isPt ? "Estamos preparando artigos técnicos profundos sobre automação, LLMs e arquitetura de dados." : "We are preparing deep technical articles on automation, LLMs, and data architecture."}
              </p>
            </div>
        );

      case 'careers': // Carreiras
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Carreiras" : "Careers"} icon={Users} />
              
              <div className="space-y-6">
                 <p className="text-slate-300">
                   {isPt ? "Buscamos mentes obcecadas por eficiência. Se você é engenheiro, queremos te conhecer." : "We seek minds obsessed with efficiency. If you are an engineer, we want to meet you."}
                 </p>
                 
                 <div>
                   <h5 className="text-white text-sm font-bold uppercase tracking-wider mb-4">{isPt ? "Vagas Abertas" : "Open Positions"}</h5>
                   <div className="space-y-3">
                      {['AI Engineer (Senior)', 'Automation Specialist', 'Growth Operations'].map((job, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                          <div className="flex items-center gap-3">
                             <div className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
                             <span className="text-slate-200 font-medium">{job}</span>
                          </div>
                          <span className="text-xs text-slate-500">{isPt ? "Remoto" : "Remote"}</span>
                        </div>
                      ))}
                   </div>
                 </div>

                 <button className="w-full py-3 rounded-xl border border-dashed border-white/20 text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm">
                    {isPt ? "Enviar currículo ->" : "Send resume ->"}
                 </button>
              </div>
            </div>
        );

      case 'contact': // Contato
        return (
            <div className="p-6 md:p-8">
              <ModalHeader title={isPt ? "Contato" : "Contact"} icon={Mail} />
              
              <div className="space-y-6">
                <p className="text-slate-300">
                  {isPt ? "Pronto para escalar sua operação? Fale com especialistas." : "Ready to scale your operation? Talk to experts."}
                </p>
                
                <div className="space-y-3">
                   <a href="#" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all">
                      <div className="p-2 rounded-lg bg-teal-400/10 group-hover:bg-teal-400/20 transition">
                        <Mail className="h-5 w-5 text-teal-400" />
                      </div>
                      <span className="text-white font-medium">hello@sogion.com</span>
                   </a>
                   <a href="#" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-all">
                      <div className="p-2 rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition">
                        <Linkedin className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-white font-medium">LinkedIn Sogion</span>
                   </a>
                </div>
              </div>
            </div>
        );

      default:
        return null;
    }
  };

  const modalContent = activeModal ? getModalContent(activeModal) : null;

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="max-w-screen-2xl mx-auto pt-20 pb-12 px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white tracking-tight mb-4">Sogion</h3>
            <p className="text-slate-300/80 max-w-md mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" onClick={handlePlaceholderClick} className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition group">
                {/* X Logo SVG */}
                <svg className="h-5 w-5 text-slate-300 group-hover:text-white transition" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" onClick={handlePlaceholderClick} className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <Github className="h-5 w-5 text-slate-300" />
              </a>
              <a href="#" onClick={handlePlaceholderClick} className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-normal text-white mb-4">{t.footer.product}</h4>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'features')} className="hover:text-white transition">{t.footer.prod_links.features}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-white transition">{t.footer.prod_links.pricing}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'examples')} className="hover:text-white transition">{t.footer.prod_links.examples}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'docs')} className="hover:text-white transition">{t.footer.prod_links.docs}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-normal text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition">{t.footer.comp_links.about}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-white transition">{t.footer.comp_links.blog}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'careers')} className="hover:text-white transition">{t.footer.comp_links.careers}</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-white transition">{t.footer.comp_links.contact}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">{t.footer.rights}</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" onClick={handlePlaceholderClick} className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" onClick={handlePlaceholderClick} className="hover:text-white transition">{t.footer.terms}</a>
            <a href="#" onClick={handlePlaceholderClick} className="hover:text-white transition">{t.footer.cookie}</a>
          </div>
        </div>
      </footer>

      {/* Modal Render */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={closeModal} 
        title="" // Pass empty title to trigger "Floating X" style from Modal.tsx
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default Footer;