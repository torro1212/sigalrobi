import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-sage-200 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/plan-1764241177724/gen-1-about_portrait.jpeg" 
              alt="שרון חן-גופר"
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-sage-600 font-bold tracking-wider uppercase mb-2 block">הסיפור שלי</span>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">נעים להכיר, שרון חן-גופר</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                אני מטפלת מוסמכת ברפואה סינית וטווינא, עם התמחות מיוחדת בטיפול בנשים ובילדים. המסע שלי בעולם הטיפול התחיל מתוך אהבה גדולה לאנשים ורצון אמיתי להביא מזור וכלי ריפוי טבעיים לחיים המודרניים העמוסים.
              </p>
              <p>
                בקליניקה שלי בהוד השרון, אני משלבת בין הידע העתיק של הרפואה הסינית לבין הבנה רגשית עמוקה. אני מאמינה שהגוף והנפש קשורים זה בזה בקשר בל ינתק, ושטיפול אמיתי חייב לגעת בשניהם.
              </p>
              <p>
                הגישה שלי היא רכה, מכילה וקשובה. בטיפול בילדים, אני משתמשת בטכניקות עדינות שמותאמות במיוחד לגופם הרך, ובטיפול בנשים אני מעניקה מרחב בטוח לשחרור מתחים, הקלה על כאבים והטענה באנרגיה חדשה.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['10+ שנות ניסיון', 'התמחות בילדים', 'גישה הוליסטית', 'יחס אישי ומכיל'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-sage-500 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;