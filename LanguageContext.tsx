
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  header: {
    features: string;
    pricing: string;
    docs: string;
    start: string;
  };
  hero: {
    badge: string;
    title_start: string;
    title_highlight: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    stat_apps: string;
    stat_uptime: string;
    stat_build_time: string;
    chat_user: string;
    chat_status_gen: string;
    chat_status_complete: string;
    chat_input: string;
    chat_progress_1: string;
    chat_progress_2: string;
    chat_progress_3: string;
    chat_responses: string[];
  };
  features: {
    badge: string;
    title_start: string;
    title_highlight: string;
    description: string;
    f1: { title: string; desc: string; comment: string; };
    f2: { title: string; desc: string; };
    f3: { title: string; desc: string; label_perf: string; label_resp: string; label_users: string; };
    f4: { title: string; desc: string; label_status: string; label_protected: string; label_ssl: string; label_2fa: string; label_enc: string; val_active: string; val_enabled: string; };
    f5: { title: string; desc: string; label_repo: string; commit_1: string; commit_2: string; commit_3: string; time_1: string; time_2: string; time_3: string; };
    f6: { title: string; desc: string; label_deploy: string; label_live: string; label_build: string; label_ssl: string; label_cdn: string; val_complete: string; val_active: string; val_global: string; };
  };
  how: {
    badge: string;
    title_start: string;
    title_highlight: string;
    description: string;
    step1: { title: string; desc: string; };
    step2: { title: string; desc: string; };
    step3: { title: string; desc: string; };
    console: {
      title: string;
      action_create: string;
      action_create_desc: string;
      action_template: string;
      action_template_desc: string;
      tag_starter: string;
      analytics: string;
      period: string;
      stat_views: string;
      stat_build: string;
      stat_deploys: string;
    };
  };
  pricing: {
    badge: string;
    title_start: string;
    title_highlight: string;
    description: string;
    toggle_annual: string;
    toggle_monthly: string;
    save_badge: string;
    per_month: string;
    per_year: string;
    billed_monthly: string;
    get_started: string;
    want_to_know_more: string;
    most_popular: string;
    labels: {
        challenge: string;
        solution: string;
        result: string;
    };
    basic: { 
        title: string; 
        price: string; 
        desc: string; 
        features: string[];
        details: { challenge: string; solution: string; result: string; };
    };
    pro: { 
        title: string; 
        price: string; 
        desc: string; 
        features: string[];
        details: { challenge: string; solution: string; result: string; };
    };
    enterprise: { 
        title: string; 
        price: string; 
        desc: string; 
        features: string[];
        details: { challenge: string; solution: string; result: string; };
    };
  };
  booking: {
    badge: string;
    title: string;
    description: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    prod_links: { features: string; pricing: string; examples: string; docs: string; };
    comp_links: { about: string; blog: string; careers: string; contact: string; };
    rights: string;
    privacy: string;
    terms: string;
    cookie: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      features: "Why AI",
      pricing: "Results",
      docs: "Process",
      start: "Schedule Diagnosis"
    },
    hero: {
      badge: "AI is no longer optional. It's the new Business OS.",
      title_start: "Scale Without Limits.",
      title_highlight: "Intelligent Automation.",
      description: "The era of 'curiosity' is over. Either your company is AI-native, or it's becoming obsolete. You have reached the limit of what manual processes can deliver. We build the machine that ensures your leadership for the next decade.",
      cta_primary: "Schedule AI Diagnosis",
      cta_secondary: "Get Checklist",
      stat_apps: "Efficiency",
      stat_uptime: "ROI",
      stat_build_time: "Implementation",
      chat_user: "Analyze sales friction and automate follow-ups",
      chat_status_gen: "Mapping bottlenecks...",
      chat_status_complete: "Automation active",
      chat_input: "How can we reduce operational waste?",
      chat_progress_1: "Connecting to ERP & CRM...",
      chat_progress_2: "Identifying manual tasks...",
      chat_progress_3: "Deploying autonomous agents...",
      chat_responses: [
        "Analysis complete. 60% of manual data entry eliminated.",
        "Bottleneck found. Sales copilot deployed for instant replies.",
        "Optimization ready. Operational friction reduced by 45%.",
        "System update: Profit margin increased by 6 points."
      ]
    },
    features: {
      badge: "Operational Reality",
      title_start: "Accelerate and evolve",
      title_highlight: "or get left behind",
      description: "Business doesn't fail due to strategy, but operational friction. We replace manual bottlenecks with intelligent automation.",
      f1: { title: "Autonomous Workflows", desc: "Processes running 24/7 without human intervention. Your team focuses on strategy while our agents handle execution.", comment: "// Workflow running autonomously" },
      f2: { title: "Frictionless Operation", desc: "Eliminate repetitive errors and delays. We build systems that increase profit and reduce costs—automatically." },
      f3: { title: "Data-Driven Decisions", desc: "Stop guessing. Make decisions based on facts, real metrics, and clear direction provided by AI dashboards.", label_perf: "Efficiency", label_resp: "Response Time", label_users: "Tasks Automated" },
      f4: { title: "Enterprise Architecture", desc: "We don't just install tools; we build a secure OS. GDPR compliant, data encryption, and robust authorization baked in.", label_status: "Security Status", label_protected: "Protected", label_ssl: "SSL Certificate", label_2fa: "Two-Factor Auth", label_enc: "Data Encryption", val_active: "Active", val_enabled: "Enabled" },
      f5: { title: "Process Control", desc: "Complete audit trails of every automated action. Track changes, optimize flows, and maintain full control of your operation.", label_repo: "Audit Log", commit_1: "bot: Resolved customer ticket", commit_2: "sys: Optimized ad spend", commit_3: "audit: Monthly report generated", time_1: "2 mins ago", time_2: "15 mins ago", time_3: "1 hour ago" },
      f6: { title: "Scalable Infrastructure", desc: "An operation that scales without hiring more people. Automation replaces manual effort so you grow revenue, not headcount.", label_deploy: "Status", label_live: "Live", label_build: "Automation", label_ssl: "Security", label_cdn: "Availability", val_complete: "Optimized", val_active: "Active", val_global: "Global" }
    },
    how: {
      badge: "The Methodology",
      title_start: "From diagnosis to",
      title_highlight: "autonomous growth",
      description: "A simple, ROI-focused process. We identify where you're losing money and build the system to fix it.",
      step1: { title: "Operational Diagnosis", desc: "We map bottlenecks, losses, and profit potential. You receive a clear plan with projected financial impact." },
      step2: { title: "Quick Wins & Automation", desc: "In the first 30 days, we automate critical tasks and fix bottlenecks. Immediate results while we build the advanced architecture." },
      step3: { title: "Evolution & Scale", desc: "Continuous optimization. We continually refine flows, data integration, and copilots to ensure your margin keeps growing." },
      console: {
        title: "Sogion OS",
        action_create: "New Workflow",
        action_create_desc: "Automate process",
        action_template: "View Insights",
        action_template_desc: "Real-time ROI",
        tag_starter: "Active",
        analytics: "Performance",
        period: "Last 30 days",
        stat_views: "Tasks Saved",
        stat_build: "Hours Saved",
        stat_deploys: "Cost Reduction"
      }
    },
    pricing: {
      badge: "Real Results",
      title_start: "No hype. Just",
      title_highlight: "mathematical ROI",
      description: "We don't sell empty promises. We sell operational growth based on concrete metrics.",
      toggle_annual: "Impact",
      toggle_monthly: "ROI",
      save_badge: "Proven",
      per_month: "saved/mo",
      per_year: "/year",
      billed_monthly: "Billed monthly",
      get_started: "See Full Case Study",
      want_to_know_more: "I Want to Know More",
      most_popular: "Health & Beauty",
      labels: {
        challenge: "The Challenge",
        solution: "The Solution",
        result: "The Result"
      },
      basic: {
        title: "Logistics Company",
        price: "-47%",
        desc: "Reduction in rework and manual errors.",
        features: ["+32% team efficiency", "R$ 38k/month savings", "Eliminated manual data entry", "ROI in 3 months"],
        details: {
            challenge: "High volume of manual data entry for shipments caused frequent billing errors and tracking delays. The backoffice team was overwhelmed.",
            solution: "Implemented end-to-end automation connecting the WMS to the ERP. AI agents now handle tracking updates and invoice generation autonomously.",
            result: "Manual data entry was effectively eliminated. Rework dropped by 47%, and the company scaled shipment volume by 30% without hiring additional staff."
        }
      },
      pro: {
        title: "Aesthetic Clinic",
        price: "24h",
        desc: "Hours saved per week through automation.",
        features: ["+29% opportunity conversion", "Automated scheduling", "Zero lead leakage", "ROI in 49 days"],
        details: {
            challenge: "Reception staff could not handle peak inquiry times, resulting in lost leads and slow scheduling responses. Follow-ups were inconsistent.",
            solution: "Deployed a WhatsApp-integrated AI Copilot for 24/7 scheduling and triage. The system qualifies leads, answers FAQs, and books appointments directly into the calendar.",
            result: "Zero lead leakage. Conversion rates increased by 29% due to instant response times, saving the team 24 hours of manual administrative work per week."
        }
      },
      enterprise: {
        title: "Financial Sector",
        price: "+6pt",
        desc: "Direct margin growth in 6 months.",
        features: ["Reorganized operation", "Predictable scaling", "24/7 AI Customer Support", "Data-driven strategy"],
        details: {
            challenge: "Customer support costs were growing linearly with revenue. The operation lacked predictability, and strategic decisions were delayed by manual reporting.",
            solution: "Reorganized the operational architecture with a data lake and AI-driven dashboards. Launched a Tier-1 AI Support Agent to handle 80% of routine queries.",
            result: "Profit margins grew by 6 points in 6 months. The operation is now predictable, scalable, and data-driven, with support available 24/7."
        }
      }
    },
    booking: {
      badge: "Contact Us",
      title: "Schedule a Diagnosis",
      description: "Choose a time to speak with our team."
    },
    footer: {
      tagline: "AI. Automation. Operational Architecture. Faster, more profitable, and more predictable business.",
      product: "Solutions",
      company: "Company",
      prod_links: { features: "Diagnosis", pricing: "Results", examples: "Case Studies", docs: "Methodology" },
      comp_links: { about: "About", blog: "Blog", careers: "Careers", contact: "Contact" },
      rights: "© 2025 Sogion. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy"
    }
  },
  pt: {
    header: {
      features: "Por que IA",
      pricing: "Resultados",
      docs: "Processo",
      start: "Agendar Diagnóstico"
    },
    hero: {
      badge: "IA não é mais opcional. É o novo sistema operacional.",
      title_start: "Escale sem Limites.",
      title_highlight: "Automação Inteligente.",
      description: "A era da 'curiosidade' acabou. Ou sua empresa é nativa em IA, ou ela está ficando obsoleta. Você atingiu o limite do que processos manuais podem entregar. Construímos a máquina que garantirá sua liderança na próxima década.",
      cta_primary: "Agendar Diagnóstico",
      cta_secondary: "Baixar Checklist",
      stat_apps: "Eficiência",
      stat_uptime: "ROI",
      stat_build_time: "Implementação",
      chat_user: "Analise gargalos de vendas e automatize follow-ups",
      chat_status_gen: "Analisando fluxos...",
      chat_status_complete: "Automação ativa",
      chat_input: "Como podemos reduzir custos operacionais?",
      chat_progress_1: "Conectando CRM & Dados...",
      chat_progress_2: "Identificando fricção...",
      chat_progress_3: "Implantando agentes autônomos...",
      chat_responses: [
        "Análise completa. Automatizei 60% da entrada manual de dados.",
        "Gargalo identificado. Implantando copilot para triagem de leads.",
        "Otimização pronta. Fricção operacional reduzida em 45%.",
        "Update: Tempo de resposta ao cliente reduzido para segundos."
      ]
    },
    features: {
      badge: "Realidade Operacional",
      title_start: "Acelere e evolua",
      title_highlight: "ou fique para trás",
      description: "Seu negócio não cresce porque sua operação está travando você. Substituímos processos manuais e ineficientes por automação inteligente.",
      f1: { title: "Sua empresa funciona sozinha", desc: "Processos rodando 24/7 sem intervenção humana. Sua equipe foca na estratégia enquanto nossos agentes cuidam da execução.", comment: "// Fluxo rodando autonomamente" },
      f2: { title: "Conversão aumenta", desc: "Velocidade é dinheiro. Respondemos mais rápido para converter mais. Eliminamos o atrito que faz você perder vendas." },
      f3: { title: "Decisões baseadas em fatos", desc: "Pare de decidir com base em sensações. Tenha dados reais, métricas claras e direção óbvia com dashboards de IA.", label_perf: "Eficiência", label_resp: "Tempo de Resposta", label_users: "Tarefas Automatizadas" },
      f4: { title: "Arquitetura Operacional", desc: "Não apenas instalamos ferramentas; construímos um OS seguro. LGPD, criptografia e autorização robusta nativas.", label_status: "Status de Segurança", label_protected: "Protegido", label_ssl: "Certificado SSL", label_2fa: "Auth de Dois Fatores", label_enc: "Criptografia de Dados", val_active: "Ativo", val_enabled: "Habilitado" },
      f5: { title: "Equipe trabalha melhor", desc: "Tiramos 60% do peso operacional das costas do seu time. Menos tarefas repetitivas, mais inteligência estratégica.", label_repo: "Log de Auditoria", commit_1: "bot: Resolveu ticket #402", commit_2: "sys: Otimizou budget de ads", commit_3: "audit: Relatório mensal gerado", time_1: "2 min atrás", time_2: "15 min atrás", time_3: "1 hora atrás" },
      f6: { title: "Lucro cresce, time não", desc: "Uma operação que cresce sem contratar mais gente. A automação substitui o esforço manual para você escalar lucro, não problemas.", label_deploy: "Status", label_live: "No Ar", label_build: "Automação", label_ssl: "Segurança", label_cdn: "Disponibilidade", val_complete: "Otimizado", val_active: "Ativo", val_global: "Global" }
    },
    how: {
      badge: "A Metodologia",
      title_start: "Do diagnóstico à",
      title_highlight: "operação autônoma",
      description: "Um processo simples, focado em ROI. Mapeamos onde você perde dinheiro e construímos o sistema para resolver.",
      step1: { title: "Diagnóstico Operacional", desc: "Mapeamos gargalos, perdas e potencial de lucro. Você recebe um plano claro com impacto financeiro projetado." },
      step2: { title: "Quick Wins & Automação", desc: "Nos primeiros 30 dias, automatizamos tarefas críticas e corrigimos gargalos. Resultados imediatos enquanto construímos a arquitetura avançada." },
      step3: { title: "Evolução e Escala", desc: "Otimização contínua. Refinamos fluxos, integração de dados e copilots para garantir que sua margem continue crescendo mês a mês." },
      console: {
        title: "Sogion OS",
        action_create: "Novo Fluxo",
        action_create_desc: "Automatizar processo",
        action_template: "Ver Insights",
        action_template_desc: "ROI em tempo real",
        tag_starter: "Ativo",
        analytics: "Performance",
        period: "Últimos 30 dias",
        stat_views: "Tarefas Salvas",
        stat_build: "Horas Salvas",
        stat_deploys: "Redução Custo"
      }
    },
    pricing: {
      badge: "Resultados Reais",
      title_start: "Sem hype. Apenas",
      title_highlight: "matemática operacional",
      description: "Não vendemos promessas vazias. Vendemos crescimento operacional baseado em métricas concretas.",
      toggle_annual: "Impacto",
      toggle_monthly: "ROI",
      save_badge: "Comprovado",
      per_month: "economizados/mês",
      per_year: "/ano",
      billed_monthly: "Cobrado mensalmente",
      get_started: "Ver Case Completo",
      want_to_know_more: "Quero Saber Mais",
      most_popular: "Saúde & Estética",
      labels: {
        challenge: "O Desafio",
        solution: "A Solução",
        result: "O Resultado"
      },
      basic: {
        title: "Companhia de Logística",
        price: "-47%",
        desc: "Redução de retrabalho e erros manuais.",
        features: ["+32% eficiência do time", "Economia de R$ 38k/mês", "Fim da entrada de dados manual", "ROI em 3 meses"],
        details: {
            challenge: "Alto volume de entrada manual de dados causava erros frequentes de faturamento e atrasos no rastreio. A equipe de backoffice estava sobrecarregada.",
            solution: "Implementamos automação ponta a ponta conectando WMS ao ERP. Agentes de IA agora cuidam de atualizações de rastreio e emissão de notas autonomamente.",
            result: "Entrada manual de dados foi eliminada. O retrabalho caiu 47% e a empresa escalou o volume de envios em 30% sem novas contratações."
        }
      },
      pro: {
        title: "Clínica de Estética",
        price: "24h",
        desc: "Horas economizadas por semana via automação.",
        features: ["+29% conversão de oportunidades", "Agendamento automático", "Zero perda de leads", "ROI em 49 dias"],
        details: {
            challenge: "A recepção não dava conta do volume de mensagens nos horários de pico, resultando em perda de leads e agendamento lento. Follow-ups eram inconsistentes.",
            solution: "Implantamos um Copilot de IA integrado ao WhatsApp para agendamento 24/7. O sistema qualifica leads, tira dúvidas e agenda diretamente no calendário.",
            result: "Zero perda de leads. A conversão aumentou 29% devido à resposta instantânea, economizando 24h de trabalho administrativo por semana."
        }
      },
      enterprise: {
        title: "Setor Financeiro",
        price: "+6pt",
        desc: "Crescimento direto na margem em 6 meses.",
        features: ["Operação reorganizada", "Escala previsível", "Suporte 24/7 via IA", "Estratégia baseada em dados"],
        details: {
            challenge: "Os custos de suporte cresciam na mesma proporção da receita. A operação carecia de previsibilidade e relatórios manuais atrasavam decisões.",
            solution: "Reorganização da arquitetura operacional com Data Lake e dashboards de IA. Lançamento de Agente de Suporte Nível 1 para 80% das demandas.",
            result: "A margem de lucro cresceu 6 pontos em 6 meses. Operação previsível, escalável e baseada em dados, com suporte 24/7."
        }
      }
    },
    booking: {
      badge: "Fale Conosco",
      title: "Agende um Diagnóstico",
      description: "Escolha um horário para falar com nossa equipe."
    },
    footer: {
      tagline: "IA. Automação. Arquitetura Operacional. Negócios mais rápidos, mais lucrativos e mais previsíveis.",
      product: "Soluções",
      company: "Empresa",
      prod_links: { features: "Diagnóstico", pricing: "Resultados", examples: "Cases", docs: "Metodologia" },
      comp_links: { about: "Sobre", blog: "Blog", careers: "Carreiras", contact: "Contato" },
      rights: "© 2025 Sogion. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookie: "Política de Cookies"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = window.navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        return 'pt';
      }
    }
    return 'en';
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
