import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-sage-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="p-12 bg-sage-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">בואו נדבר</h2>
                <p className="text-sage-200 mb-10 text-lg">
                  מוכנים לעשות את הצעד הראשון לבריאות טובה יותר? 
                  השאירו פרטים או צרו קשר ישירות.
                </p>

                <div className="space-y-8">
                  <a href="tel:0506244159" className="flex items-center gap-4 hover:text-sage-300 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-sage-300">טלפון</div>
                      <div className="text-xl font-bold">050-624-4159</div>
                    </div>
                  </a>

                  <a href="mailto:sharon.chen.goffer@example.com" className="flex items-center gap-4 hover:text-sage-300 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-sage-300">אימייל</div>
                      <div className="text-lg font-bold">sharon.chen.goffer@example.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-sage-300">כתובת הקליניקה</div>
                      <div className="text-lg font-bold">יהושע בן גמלא 33, הוד השרון</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-sage-300">שעות פעילות</div>
                      <div className="text-lg font-bold">א'-ה': 08:00-18:00, ו': 08:00-13:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">טלפון</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                    placeholder="050-0000000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">הודעה</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                    placeholder="היי שרון, אשמח לשמוע פרטים נוספים..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>שלח הודעה</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;