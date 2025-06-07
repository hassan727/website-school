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
      <div className="w-full max-w-7xl mx-auto px-4">
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
