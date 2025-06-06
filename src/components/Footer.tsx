
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-reverse space-x-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ج</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">مدرسة الجيل الواعد الخاصة</h3>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              مؤسسة تعليمية رائدة تسعى لإعداد جيل مبدع ومتميز قادر على المساهمة في بناء المستقبل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">نبذة عنا</a></li>
              <li><a href="#stats" className="text-blue-100 hover:text-white transition-colors">الإحصائيات</a></li>
              <li><a href="#gallery" className="text-blue-100 hover:text-white transition-colors">المعرض</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3 text-blue-100">
              <p>📍 شارع الصفا والمروة، طوابق، فيصل، الجيزة، مصر</p>
              <p>📞 01204452332</p>
              <p>✉️ aalgelalwad@gmail.com</p>
              <p>🕐 الأحد - الخميس: 7:30 ص - 2:00 م</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 مدرسة الجيل الواعد الخاصة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
