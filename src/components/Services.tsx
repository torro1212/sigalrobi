import { Zap, Shield, Heart, Star, Baby, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "טווינא לנשים",
      description: "טיפול בכאבי גב, צוואר, מפרקים ומתח נפשי, מותאם במיוחד למבנה ולצרכים של גוף האישה."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "טווינא לילדים ותינוקות",
      description: "טיפול עדין ויעיל לבעיות עיכול (גזים), שינה, חיזוק מערכת החיסון והרגעה."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "איזון גוף-נפש",
      description: "שילוב של מגע ושיחה להפחתת סטרס, חרדות ועומס רגשי, להחזרת השקט הפנימי."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "חיזוק מערכת החיסון",
      description: "טיפול מונע ותומך לחיזוק הגוף, במיוחד בעונות המעבר ולפני החורף."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "ליווי רגשי",
      description: "מרחב בטוח ומכיל לעיבוד רגשות ותחושות דרך הגוף והמגע המרפא."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "טיפול בכאב כרוני",
      description: "פתרונות טבעיים להקלה על כאבים מתמשכים ושיפור איכות החיים היומיומית."
    }
  ];

  return (
    <section id="services" className="py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">השירותים בקליניקה</h2>
          <p className="text-xl text-gray-600">מגוון טיפולים המותאמים אישית לכל מטופל ומטופלת, מתינוקות בני יומם ועד נשים בכל שלבי החיים.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-sage-100 group"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;