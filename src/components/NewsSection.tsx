import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const newsImages = [
	{
		src: '/egypt/1.jpg',
		alt: 'مشاركة الطلاب في بنك الطعام المصري - صورة 1',
	},
	{
		src: '/egypt/2.jpg',
		alt: 'مشاركة الطلاب في بنك الطعام المصري - صورة 2',
	},
	{
		src: '/egypt/3.jpg',
		alt: 'مشاركة الطلاب في بنك الطعام المصري - صورة 3',
	},
];

const NewsSection = () => {
	const news = [
		{
			icon: Award,
			title: 'زيارة بنك الطعام المصري',
			date: 'يونيو 2025',
			description:
				'شارك طلاب المدرسة في فعالية مجتمعية مميزة ضمن برنامج المشاركة المجتمعية، حيث قاموا بزيارة بنك الطعام المصري والمساهمة في دعم الأسر المحتاجة، مما عزز لديهم قيم العطاء والمسؤولية الاجتماعية.',
			category: 'مشاركة مجتمعية',
			images: [
				'/epypt-food/1.jpg',
				'/epypt-food/2.jpg',
				'/epypt-food/3.jpg',
				'/epypt-food/4.jpg',
			],
		},
		{
			icon: Users,
			title: 'يوم في حب مصر',
			date: 'مارس 2025',
			description:
				'نظمت المدرسة فعالية "يوم في حب مصر" لتعزيز روح الانتماء والوطنية لدى الطلاب، حيث شارك الطلاب في أنشطة متنوعة احتفالية وثقافية واجتماعية، وتضمنت الفعالية عروضًا فنية وزيارات ميدانية لتعريف الطلاب بتاريخ مصر العظيم.',
			category: 'فعاليات وطنية',
			images: [
				'/egypt/1.jpg',
				'/egypt/2.jpg',
				'/egypt/3.jpg',
			],
		},
		{
			icon: Award,
			title: 'بطولات رياضية دولية ومحلية',
			date: '2024-2025',
			description:
				'حقق طلاب المدرسة إنجازات رياضية مميزة على المستويين المحلي والدولي، حيث فازوا بعدة بطولات في ألعاب القوى وكرة القدم والجمباز، ورفعوا اسم المدرسة عاليًا في المحافل الرياضية.',
			category: 'إنجازات رياضية',
			images: [
				'/gym/1.jpg',
				'/gym/2.jpg',
				'/gym/3.jpg',
				'/gym/4.jpg',
				'/gym/5.jpg',
				'/gym/6.jpg',
			],
		},
		{
			icon: BookOpen,
			title: 'يوم في حب الرياضيات',
			date: 'أبريل 2025',
			description:
				'نظمت المدرسة فعالية "يوم في حب الرياضيات" لتعزيز التفكير المنطقي والإبداعي لدى الطلاب، حيث شارك الطلاب في مسابقات وأنشطة رياضية ذهنية وعروض تفاعلية ممتعة، مما ساهم في تنمية مهاراتهم الحسابية وحبهم لمادة الرياضيات.',
			category: 'فعاليات علمية',
			images: [
				'/math/1.jpg',
				'/math/2.jpg',
				'/math/3.jpg',
				'/math/4.jpg',
			],
		},
		{
			icon: Calendar,
			title: 'بداية السنة الدراسية الجديدة',
			date: 'سبتمبر 2025',
			description:
				'احتفلت المدرسة ببداية السنة الدراسية الجديدة في أجواء مليئة بالحماس والتفاؤل، حيث استقبلت الطلاب بالترحيب والأنشطة الترفيهية والتوعوية، مع التأكيد على أهمية الانضباط والاجتهاد لتحقيق عام دراسي ناجح.',
			category: 'فعاليات مدرسية',
			images: [
				'/newyear/1.jpg',
				'/newyear/2.jpg',
				'/newyear/3.jpg',
				'/newyear/4.jpg',
				'/newyear/5.jpg',
				'/newyear/6.jpg',
			],
		},
		{
			icon: BookOpen,
			title: 'تدريب التحول الرقمي وأهمية الذكاء الاصطناعي في التدريس',
			date: 'مايو 2025',
			description:
				'نظمت المدرسة تدريبًا متقدمًا للمعلمين حول التحول الرقمي في التعليم، مع التركيز على أهمية الذكاء الاصطناعي في تطوير أساليب التدريس وتحفيز الإبداع لدى الطلاب. شمل التدريب ورش عمل تطبيقية وعروض تفاعلية.',
			category: 'تطوير مهني',
			images: [
				'/التحول الرقمي/1.jpg',
				'/التحول الرقمي/2.jpg',
				'/التحول الرقمي/3.jpg',
			],
		},
		{
			icon: Users,
			title: 'حفلة نهاية العام الدراسي',
			date: 'يونيو 2025',
			description:
				'أقامت المدرسة حفلة نهاية العام الدراسي في أجواء مليئة بالفرح والإنجاز، حيث تم تكريم الطلاب المتفوقين وتقديم عروض فنية ومسابقات ترفيهية، وسط حضور أولياء الأمور والمعلمين.',
			category: 'فعاليات مدرسية',
			images: [
				'/الحفله/1.jpeg',
				'/الحفله/2.jpeg',
				'/الحفله/3.jpeg',
			],
		},
		{
			icon: BookOpen,
			title: 'مسابقة القرآن الكريم',
			date: 'مايو 2025',
			description:
				'نظمت المدرسة مسابقة القرآن الكريم لتشجيع الطلاب على حفظ وتلاوة كتاب الله، حيث شارك عدد كبير من الطلاب في أجواء روحانية مميزة وتم تكريم الفائزين بجوائز قيمة.',
			category: 'أنشطة دينية',
			images: [
				'/القراءن الكريم/WhatsApp Image 2025-06-05 at 12.43.21 PM.jpeg',
				'/القراءن الكريم/WhatsApp Image 2025-06-05 at 12.44.04 PM.jpeg',
				'/القراءن الكريم/WhatsApp Image 2025-06-05 at 12.44.10 PM (1).jpeg',
				'/القراءن الكريم/WhatsApp Image 2025-06-05 at 12.44.10 PM.jpeg',
			],
		},
		{
			icon: Award,
			title: 'تكريم المعلمين',
			date: 'يونيو 2025',
			description:
				'أقامت المدرسة حفل تكريم للمعلمين تقديرًا لجهودهم المتميزة طوال العام الدراسي، حيث تم توزيع شهادات تقدير وهدايا رمزية في أجواء من المحبة والامتنان.',
			category: 'فعاليات مدرسية',
			images: [
				'/تكريم المعلمين/WhatsApp Image 2025-06-05 at 1.18.20 PM.jpeg',
				'/تكريم المعلمين/WhatsApp Image 2025-06-05 at 1.18.21 PM.jpeg',
				'/تكريم المعلمين/WhatsApp Image 2025-06-05 at 1.19.02 PM.jpeg',
			],
		},
		{
			icon: BookOpen,
			title: 'صور مرافق المدرسة',
			date: 'يونيو 2025',
			description:
				'تستعرض هذه المجموعة صور مرافق المدرسة الحديثة، بما في ذلك الفصول الدراسية، معامل الحاسب، معامل العلوم، ومكتبة المدرسة، والتي توفر بيئة تعليمية متكاملة ومحفزة للطلاب.',
			category: 'مرافق المدرسة',
			images: [
				'/صور المرافق/الفصول الحديثه.jpg',
				'/صور المرافق/معمل الحاسب.jpg',
				'/صور المرافق/معمل العلوم.png',
				'/صور المرافق/مكتبه المدرسه.jpg',
			],
		},
		{
			icon: Users,
			title: 'زيارة إدارة المرور',
			date: 'مايو 2025',
			description:
				'نظم طلاب المدرسة زيارة تعليمية إلى إدارة المرور للتعرف على قواعد المرور والسلامة المرورية، وشملت الزيارة جولات ميدانية وورش توعوية لتعزيز ثقافة الالتزام بقوانين الطريق.',
			category: 'زيارات ميدانية',
			images: [
				'/مرور/1.jpeg',
				'/مرور/2.jpeg',
				'/مرور/3.jpeg',
				'/مرور/4.jpeg',
			],
		},
	];

	return (
		<section id="news" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl font-bold text-primary mb-4">
						الأخبار والفعاليات
					</h2>
					<p className="text-xl text-muted-foreground">
						تابع آخر الأخبار والفعاليات والإنجازات في مدرسة الجيل الواعد
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{news.map((item, index) => (
						<Card
							key={index}
							className="bg-white shadow-lg rounded-xl overflow-hidden"
						>
							<div className="p-0">
								<Carousel interval={4000} indicators={true} controls={true}>
									{item.images.map((img, idx) => (
										<Carousel.Item key={idx}>
											<img
												src={img}
												alt={item.title}
												className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
												style={{ maxWidth: '100%' }}
											/>
										</Carousel.Item>
									))}
								</Carousel>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-primary mb-2">
									{item.title}
								</h3>
								<p className="text-base text-muted-foreground mb-4">
									{item.description}
								</p>
							</div>
						</Card>
					))}
				</div>

			</div>
		</section>
	);
};

export default NewsSection;
