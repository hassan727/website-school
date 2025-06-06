import { Button } from '@/components/ui/button';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const heroImages = [
	{
		src: '/WhatsApp Image 2025-06-05 at 1.06.41 PM (1).jpeg',
		alt: 'حفل مدرسي - صورة 1',
	},
	{
		src: '/WhatsApp Image 2025-06-05 at 1.18.20 PM (1).jpeg',
		alt: 'حفل مدرسي - صورة 2',
	},
	{
		src: '/WhatsApp Image 2025-06-06 at 7.41.18 PM (1).jpeg',
		alt: 'حفل مدرسي - صورة 3',
	},
];

const HeroSection = () => {
	return (
		<section id="home" className="relative min-h-screen flex items-center gradient-bg">
			<div className="absolute inset-0 bg-black/20"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="text-white animate-fade-in">
						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
							مرحباً بكم في
							<span className="block text-yellow-300">مدرسة الجيل الواعد الخاصة</span>
						</h1>
						<p className="text-base md:text-lg mb-8 text-blue-100 leading-relaxed max-w-md mx-auto md:mx-0">
							نسعى لبناء جيل واعٍ ومتميز قادر على مواجهة تحديات المستقبل بثقة وإبداع
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
							>
								تعرف على المدرسة
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-primary font-semibold px-8 py-4 text-lg"
							>
								اتصل بنا
							</Button>
						</div>
					</div>

					<div className="animate-scale-in">
						<div className="relative w-[150%] max-w-none mx-auto" style={{ left: '50%', transform: 'translateX(-25%)' }}>
							<Carousel interval={4000} indicators={true} controls={true}>
								{heroImages.map((img, idx) => (
									<Carousel.Item key={idx}>
										<img
											src={img.src}
											alt={img.alt}
											className="rounded-2xl shadow-2xl w-full object-cover object-center transition-all duration-300"
											style={{ aspectRatio: '16/7', height: '70vh', maxWidth: '100%' }}
										/>
									</Carousel.Item>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
