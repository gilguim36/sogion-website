
import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const BookingSection: React.FC = () => {
  const { t } = useLanguage();

  // Calendly URL with customization parameters to match the site theme
  // background_color=020617 matches Tailwind slate-950
  // text_color=ffffff matches white text
  // primary_color=2dd4bf matches Tailwind teal-400
  const calendlyUrl = "https://calendly.com/gilbertofilho/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=020617&text_color=ffffff&primary_color=2dd4bf";

  return (
    <section id="booking-section" className="max-w-screen-2xl mx-auto pt-24 pb-24 px-6 lg:px-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
          <Calendar className="h-3 w-3" />
          {t.booking.badge}
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
          {t.booking.title}
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {t.booking.description}
        </p>
      </div>

      <div className="w-full flex justify-center rounded-2xl overflow-hidden bg-slate-950 ring-1 ring-white/10 shadow-2xl">
        <iframe
          src={calendlyUrl}
          width="100%"
          height="1000"
          frameBorder="0"
          title="Agendar Diagnóstico"
          allowTransparency={true}
        ></iframe>
      </div>
    </section>
  );
};

export default BookingSection;
