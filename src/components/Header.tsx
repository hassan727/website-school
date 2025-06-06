
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">مدرسة الجيل الواعد الخاصة</h1>
              <p className="text-sm text-muted-foreground">رؤية مستقبلية لتعليم متميز</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-reverse space-x-4">
            <Button className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90">
              <Phone className="h-4 w-4" />
              01204452332
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
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
      </div>
    </header>
  );
};

export default Header;
