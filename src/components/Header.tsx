import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'نبذة عنا' },
    { href: '#stats', label: 'الإحصائيات' },
    { href: '#why-choose-us', label: 'لماذا تختارنا' },
    { href: '#programs', label: 'البرامج والأنشطة' },
    { href: '#testimonials', label: 'آراء العملاء' },
    { href: '#news', label: 'الأخبار' },
    { href: '#gallery', label: 'المعرض' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="شعار المدرسة"
            className="h-10 w-10 rounded-lg shadow"
          />
          <span className="text-xl font-bold text-primary hidden xs:inline">
            مدرسة الجيل الواعد
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="ml-2">
            <Phone className="h-4 w-4 ml-2" />
            01204452332
          </Button>
        </nav>
        {/* Burger Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4 w-full">
              <Phone className="h-4 w-4 ml-2" />
              01204452332
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
