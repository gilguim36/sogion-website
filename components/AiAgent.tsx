
import React, { useState, useEffect, useRef } from 'react';
import OpenAI from 'openai';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import { useAi } from '../AiContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAgent: React.FC = () => {
  const { t, language } = useLanguage();
  const { openBooking } = useBooking();
  const { isAiOpen, setAiOpen, externalMessage, clearExternalMessage } = useAi();

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize messages when language changes or first open
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'model',
          text: language === 'pt'
            ? "Olá! Sou a IA da Sogion. Como posso ajudar a escalar sua operação hoje? Posso tirar dúvidas sobre nossa metodologia ou agendar seu diagnóstico."
            : "Hello! I'm Sogion's AI. How can I help scale your operation today? I can answer questions about our methodology or schedule your diagnosis."
        }
      ]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiOpen]);

  // Handle external message from Hero section
  useEffect(() => {
    if (externalMessage) {
      handleSend(externalMessage);
      clearExternalMessage();
    }
  }, [externalMessage]);

  const handleSend = async (forcedMessage?: string) => {
    const textToSend = forcedMessage || inputValue.trim();
    if (!textToSend) return;

    // If coming from input, clear it
    if (!forcedMessage) {
      setInputValue('');
    }

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    try {
      // Safe access to process.env (mapped in vite.config.ts)
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;

      console.log("DEBUG: Checking API Key...", apiKey ? "Key exists (starts with " + apiKey.substring(0, 8) + "...)" : "KEY IS MISSING/UNDEFINED");

      if (!apiKey) {
        throw new Error("API Key not found in environment variables");
      }

      // Initialize OpenAI client pointing to OpenRouter
      const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: "https://openrouter.ai/api/v1",
        dangerouslyAllowBrowser: true, // Required for client-side usage
        defaultHeaders: {
          "HTTP-Referer": window.location.origin, // Required by OpenRouter
          "X-Title": "Sogion Website", // Optional
        }
      });

      const systemInstruction = language === 'pt'
        ? `Você é o Agente de IA da Sogion, uma empresa de Arquitetura Operacional e Automação.
           Seu objetivo é persuadir o visitante a agendar um "Diagnóstico Operacional".
           
           CONHECIMENTO SOBRE A SOGION:
           - O que fazemos: Transformamos operações manuais em sistemas autônomos usando IA.
           - Metodologia: 1. Diagnóstico, 2. Quick Wins (30 dias), 3. Evolução Contínua.
           - Resultados: Logística (-47% retrabalho), Clínica (+29% conversão), Financeiro (+6 pts margem).
           - Filosofia: "IA não é opcional. É o novo sistema operacional."
           
           REGRAS DE CONDUTA:
           1. JAMAIS fale preços específicos. Se perguntarem preço, diga que o investimento é proporcional ao impacto mapeado no diagnóstico.
           2. Seja conciso, profissional e persuasivo. Use tom tech/business.
           3. Sempre direcione a conversa para o agendamento do diagnóstico.
           4. Se o usuário quiser agendar, diga para ele clicar no botão "Agendar Diagnóstico" no menu ou que você pode destacar o botão (mas na prática, peça para ele clicar no botão disponível).
           
           Se o usuário perguntar sobre preços ou condições de pagamento, responda: "Nossos projetos são estruturados com base no ROI que podemos gerar para sua operação. O primeiro passo é o Diagnóstico Operacional, onde mapeamos o potencial financeiro exato. Vamos agendar?"`
        : `You are the AI Agent for Sogion, an Operational Architecture and Automation company.
           Your goal is to persuade the visitor to schedule an "Operational Diagnosis".
           
           KNOWLEDGE ABOUT SOGION:
           - What we do: Transform manual operations into autonomous systems using AI.
           - Methodology: 1. Diagnosis, 2. Quick Wins (30 days), 3. Continuous Evolution.
           - Results: Logistics (-47% rework), Clinic (+29% conversion), Finance (+6 pts margin).
           - Philosophy: "AI is no longer optional. It is the new operating system."
           
           CONDUCT RULES:
           1. NEVER discuss specific prices. If asked, say investment is proportional to the impact mapped in the diagnosis.
           2. Be concise, professional, and persuasive. Use a tech/business tone.
           3. Always steer the conversation towards scheduling the diagnosis.
           4. If the user wants to schedule, tell them to click the "Schedule Diagnosis" button in the menu.
           
           If the user asks about price, reply: "Our projects are structured based on the ROI we can generate for your operation. The first step is the Operational Diagnosis, where we map the exact financial potential. Shall we schedule?"`;

      const modelsToTry = [
        "meta-llama/llama-3.3-70b-instruct", // Proven working - Primary
        "google/gemini-pro-1.5", // High quality backup
        "deepseek/deepseek-chat", // Excellent value
        "google/gemini-2.0-flash-exp:free", // Fallback
        "meta-llama/llama-3.3-70b-instruct:free",
      ];

      let responseText: string | null = null;
      let lastError: any = null;

      for (const model of modelsToTry) {
        try {
          console.log(`[Attempt] Trying model: ${model}`);
          const completion = await openai.chat.completions.create({
            model: model,
            messages: [
              { role: "system", content: systemInstruction },
              ...messages.map(m => ({
                role: m.role === 'model' ? 'assistant' : 'user',
                content: m.text
              })),
              { role: "user", content: textToSend }
            ],
          });

          if (completion.choices[0]?.message?.content) {
            console.log(`[Success] Model ${model} responded!`);
            responseText = completion.choices[0].message.content;
            break; // Success, exit loop
          }
        } catch (err) {
          console.warn(`[Failure] Model ${model} failed. Reason:`, err);
          lastError = err;
          // Wait 1 second before trying the next model to be nice to the API (mitigate 429s)
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      if (!responseText) {
        console.error("FATAL: All models failed. Last error:", lastError);
        throw lastError || new Error("All models failed");
      }

      setMessages(prev => [...prev, { role: 'model', text: responseText! }]);
    } catch (error) {
      console.error("AI FATAL ERROR CATCH:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: language === 'pt'
          ? "Estou enfrentando uma instabilidade temporária na conexão neural. Por favor, utilize o botão de Agendar Diagnóstico para falar com um humano."
          : "I am experiencing temporary neural connection instability. Please use the Schedule Diagnosis button to speak with a human."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setAiOpen(!isAiOpen)}
        className={`fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${isAiOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-teal-400 text-slate-900'
          }`}
      >
        {isAiOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[350px] sm:w-[400px] max-h-[600px] h-[70vh] flex flex-col transition-all duration-300 transform origin-bottom-right ${isAiOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex-1 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-400/20 flex items-center justify-center border border-teal-400/30">
                <Bot className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Sogion AI Agent</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs text-slate-400">{language === 'pt' ? 'Online' : 'Online'}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setAiOpen(false)} className="text-slate-400 hover:text-white">
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-teal-400 text-slate-900 rounded-br-none'
                    : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-none p-3.5 border border-white/5 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            {messages.length > 2 && (
              <button
                onClick={() => {
                  openBooking();
                  setAiOpen(false);
                }}
                className="w-full mb-3 py-2 text-xs font-medium text-teal-300 bg-teal-400/10 border border-teal-400/20 rounded-lg hover:bg-teal-400/20 transition flex items-center justify-center gap-2"
              >
                <Sparkles className="h-3 w-3" />
                {language === 'pt' ? 'Agendar Diagnóstico Agora' : 'Schedule Diagnosis Now'}
              </button>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={language === 'pt' ? "Digite sua dúvida..." : "Type your question..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400/50 transition"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-400 text-slate-900 hover:bg-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAgent;
