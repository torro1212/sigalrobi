import { ArrowLeft, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764241177724/gen-0-hero_background.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:from-white/80 md:via-white/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
            מטפלת מוסמכת ברפואה סינית
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black text-sage-900 leading-[1.1] mb-6 drop-shadow-sm">
            להחזיר את השקט <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-sage-600 to-sage-400">
              לבית ולגוף
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
            טיפול טווינא מקצועי לנשים, ילדים ותינוקות בהוד השרון. 
            שילוב ייחודי של רפואה סינית עתיקה עם גישה רגשית עוטפת ומכילה.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="https://wa.me/972506244159" 
              className="bg-sage-600 hover:bg-sage-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              תיאום טיפול בוואטסאפ
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-sage-50 text-sage-900 border-2 border-sage-200 text-lg font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              השארת פרטים
              <ArrowLeft className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-sage-200 pt-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-1">10+</div>
              <div className="text-gray-600 text-sm font-medium">שנות ניסיון</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-1">500+</div>
              <div className="text-gray-600 text-sm font-medium">מטופלים מרוצים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-1">5.0</div>
              <div className="text-gray-600 text-sm font-medium">דירוג בגוגל</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;