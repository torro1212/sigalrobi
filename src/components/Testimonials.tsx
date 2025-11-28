import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "שרון מדהימה, הגישה שלה לילדים פשוט קסומה והטיפול עזר לנו מאוד עם בעיות השינה של הקטן. ממליצה בחום לכל אמא עייפה!",
      name: "יעל לוי",
      role: "אמא לתינוק",
      image: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764241177724/gen-5-testimonial_1.jpeg"
    },
    {
      text: "הגעתי עם כאבי גב חזקים ואחרי שני טיפולים הרגשתי הקלה משמעותית. הידיים של שרון זהב, והלב שלה ענק. המקום הכי מרגיע בהוד השרון.",
      name: "מיכל כהן",
      role: "מטופלת",
      image: "https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764241177724/gen-6-testimonial_2.jpeg"
    },
    {
      text: "לא האמנתי שהבת שלי תסכים לשכב בטיפול, אבל שרון הצליחה ליצור איתה חיבור מדהים. הטיפול עזר מאוד לכאבי הבטן.",
      name: "דנה שחר",
      role: "אמא לילדה",
      image: null
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center text-sage-900 mb-16">מה הלקוחות אומרים</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream-50 p-8 rounded-3xl relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 text-sage-200 w-10 h-10" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-sage-300" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center text-sage-700 font-bold text-xl">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-sage-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;