import { Card, CardContent } from '@/components/ui/card';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in"></div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">شاهد المزيد من أنشطتنا</h3>
            <p className="text-lg mb-6">
              تابعنا على وسائل التواصل الاجتماعي لمشاهدة آخر الأنشطة والفعاليات
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/pgsschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-2 rounded-full font-semibold block"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/promisinggenerationschool?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-2 rounded-full font-semibold block"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
