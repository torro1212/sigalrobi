import { Check } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: "טיפול ראשון",
      price: "350-400 ₪",
      description: "מפגש היכרות מעמיק הכולל תשאול רפואי, אבחון וטיפול מלא.",
      features: [
        "משך הטיפול: 60-75 דקות",
        "תשאול רפואי מקיף",
        "אבחון דופק ולשון",
        "טיפול טווינא מותאם אישית",
        "המלצות להמשך הדרך"
      ],
      highlight: true
    },
    {
      title: "טיפול המשך",
      price: "300 ₪",
      description: "טיפול תחזוקה שוטף לשמירה על האיזון ומניעת חזרת הכאב.",
      features: [
        "משך הטיפול: 45-50 דקות",
        "מעקב אחר התקדמות",
        "טיפול ממוקד בבעיה",
        "חיזוק מערכות הגוף",
        "גמישות בקביעת תורים"
      ],
      highlight: false
    },
    {
      title: "סדרת טיפולים",
      price: "מחיר מיוחד",
      description: "תהליך טיפולי מעמיק לפתרון בעיות כרוניות וכאבים מתמשכים.",
      features: [
        "סדרה של 5-10 מפגשים",
        "בניית תוכנית טיפול ארוכת טווח",
        "ליווי צמוד לאורך התהליך",
        "הנחה ברכישת סדרה",
        "מתאים לבעיות כרוניות"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-sage-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">חבילות ומחירים</h2>
          <p className="text-sage-200 text-xl">השקעה משתלמת בבריאות ובשקט הנפשי שלך ושל ילדך</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 flex flex-col ${pkg.highlight ? 'bg-cream-50 text-gray-900 ring-4 ring-sage-400/50 transform md:-translate-y-4' : 'bg-white/10 backdrop-blur-sm border border-white/10'}`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  מומלץ להתחלה
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <div className={`text-4xl font-bold mb-4 ${pkg.highlight ? 'text-sage-600' : 'text-sage-300'}`}>
                {pkg.price}
              </div>
              <p className={`mb-8 ${pkg.highlight ? 'text-gray-600' : 'text-sage-200'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.highlight ? 'bg-sage-100 text-sage-600' : 'bg-sage-800 text-sage-300'}`}>
                      <Check size={14} />
                    </div>
                    <span className={pkg.highlight ? 'text-gray-700' : 'text-sage-100'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${pkg.highlight ? 'bg-sage-600 hover:bg-sage-700 text-white' : 'bg-white hover:bg-cream-100 text-sage-900'}`}
              >
                אני רוצה לקבוע תור
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;