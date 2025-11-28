import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'שירותים', href: '#services' },
    { name: 'אודות', href: '#about' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'שאלות נפוצות', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2">
            <img 
              src="https://oeitonzscptlisblqtoc.supabase.co/storage/v1/object/public/project-assets/logos/logo-1764241746580/logo-generated-1764241727659-3.jpeg" 
              alt="שרון חן-גופר - מטפלת טווינא לנשים וילדים" 
              className="h-12 w-auto rounded-full"
            />
            <span className="hidden sm:block font-display font-bold text-xl text-sage-900">
              שרון חן-גופר
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sage-800 hover:text-sage-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:0506244159" 
            className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
          >
            <Phone size={18} />
            <span>התקשרו עכשיו</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sage-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-display font-bold text-sage-900 hover:text-sage-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="tel:0506244159" 
          className="mt-4 bg-sage-500 text-white px-8 py-3 rounded-full text-xl font-bold"
          onClick={() => setIsMenuOpen(false)}
        >
          התקשרו עכשיו
        </a>
      </div>
    </header>
  );
};

export default Header;