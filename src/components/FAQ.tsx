import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "מה זה בכלל טווינא ואיך זה שונה מעיסוי רגיל?",
      a: "טווינא היא פיזיותרפיה סינית מסורתית. בניגוד לעיסוי ספא רגיל שנועד בעיקר להרגעה, הטווינא היא שיטת טיפול רפואית המתמקדת בפתרון בעיות ספציפיות, הזרמת אנרגיה (צ'י) ושחרור חסימות, תוך שימוש בטכניקות מגוונות ולעיתים דינמיות על מסלולי המרידיאנים בגוף."
    },
    {
      q: "האם הטיפול מתאים לתינוקות בני יומם?",
      a: "כן, בהחלט. הטיפול בתינוקות הוא עדין מאוד, לא כואב, ומותאם במיוחד לרגישות ולגוף הקטן שלהם. הוא יעיל מאוד לבעיות נפוצות כמו גזים, קוליק, בעיות שינה ואי-שקט."
    },
    {
      q: "כמה טיפולים צריך כדי להרגיש שיפור?",
      a: "זה משתנה מאדם לאדם ומבעיה לבעיה. לעיתים חשים הקלה משמעותית כבר אחרי הטיפול הראשון. בבעיות כרוניות או עמוקות יותר, לרוב מומלצת סדרה של מספר מפגשים כדי להגיע לתוצאות ארוכות טווח ולשמר אותן."
    },
    {
      q: "האם הטיפול כואב?",
      a: "הטיפול מותאם תמיד לסף הכאב של המטופל. בילדים הטיפול עדין מאוד ונעים. בנשים, ייתכן לחץ מורגש בנקודות מסוימות לשחרור תקיעות שרירית או אנרגטית, אך תמיד נשמור על רמת נוחות סבירה ותקשורת פתוחה לאורך כל הטיפול."
    },
    {
      q: "האם יש החזרים מקופות החולים?",
      a: "כמטפלת פרטית, התשלום הוא פרטי ואינו מסובסד ישירות. עם זאת, מומלץ מאוד לבדוק מול הביטוח הפרטי שלכם לגבי אפשרות להחזרים על טיפולי רפואה משלימה, שכן פוליסות רבות מכסות טיפולים אלו."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center text-sage-900 mb-12">שאלות נפוצות</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-sage-100 shadow-sm"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-sage-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-gray-800">{faq.q}</span>
                {openIndex === index ? 
                  <ChevronUp className="text-sage-500 flex-shrink-0" /> : 
                  <ChevronDown className="text-sage-500 flex-shrink-0" />
                }
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-5 border-t border-sage-100' : 'max-h-0 py-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;