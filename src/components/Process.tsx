import { MessageCircle, Stethoscope, Sparkles, Smile } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "שיחת היכרות",
      desc: "נבין יחד את הצורך, הרקע הרפואי והמטרות של הטיפול בשיחה קצרה ונעימה."
    },
    {
      number: "02",
      icon: <Stethoscope className="w-8 h-8" />,
      title: "אבחון מעמיק",
      desc: "במפגש הראשון נבצע אבחון מלא לפי עקרונות הרפואה הסינית להתאמת הטיפול המדויק."
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8" />,
      title: "הטיפול עצמו",
      desc: "טיפול במגע (טווינא) באווירה רגועה, המשלב טכניקות להקלה על כאב ואיזון."
    },
    {
      number: "04",
      icon: <Smile className="w-8 h-8" />,
      title: "שיפור והקלה",
      desc: "נצא לדרך חדשה של בריאות, עם כלים לשימור התוצאות בבית."
    }
  ];

  return (
    <section className="py-24 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-900 mb-4">איך זה עובד?</h2>
          <p className="text-xl text-gray-600">תהליך הטיפול בקליניקה פשוט, ברור ומותאם אישית לקצב שלכם</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage-100 h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-4 right-4 text-6xl font-black text-sage-50 opacity-50 font-display">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-500 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 relative z-10">
                  {step.desc}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-sage-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;