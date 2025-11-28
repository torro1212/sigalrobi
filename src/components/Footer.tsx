import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-50 pt-16 pb-8 border-t border-sage-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/logos/logo-1764241746580/logo-generated-1764241727659-3.jpeg" 
              alt="שרון חן-גופר" 
              className="h-16 w-auto rounded-full mb-6"
            />
            <p className="text-gray-600 max-w-sm mb-6">
              מטפלת מוסמכת בטווינא ורפואה סינית. מתמחה בטיפול בנשים, ילדים ותינוקות. 
              מביאה ריפוי טבעי ושקט לגוף ולנפש.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/search/top?q=Sharon%20Chen-Goffer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sage-600 shadow-sm hover:bg-sage-600 hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sage-600 shadow-sm hover:bg-sage-600 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sage-900 mb-6">קישורים מהירים</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-600 hover:text-sage-600 transition-colors">ראשי</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-sage-600 transition-colors">שירותים</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-sage-600 transition-colors">אודות</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-sage-600 transition-colors">המלצות</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-sage-600 transition-colors">צור קשר</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-sage-900 mb-6">פרטי התקשרות</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone size={18} className="text-sage-500" />
                <span>050-624-4159</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="text-sage-500" />
                <span>sharon.chen.goffer@example.com</span>
              </li>
              <li className="text-gray-600">
                יהושע בן גמלא 33, הוד השרון
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} שרון חן-גופר - מטפלת טווינא. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;