import Image from 'next/image';
import './globals.css';

const CardContainer = ({
	bgUrl,
	level,
	star,
	title,
	duration,
	topic,
	author,
	price,
	reviewCount,
	authorUrl,
}) => {
	return (
		<div className='rounded-lg bg-[#20256f] w-[250px]  text-sm font-light'>
			<Image src={bgUrl} width={250} height={220} alt={'course'} className='rounded-lg' />
			<div className='p-4'>
				<div className='flex justify-between mb-4'>
					<p className='bg-bg-primary rounded-md p-1'>{level}</p>
					<p className='flex text-yellow-400 font-bold gap-1'>
						<i className='ri-star-fill'></i>
						{star}
						<span className='text-white font-normal'>({reviewCount})</span>
					</p>
				</div>
				<h1 className='mb-12'>{title}</h1>
				<div className='flex justify-between mb-4'>
					<p>
						<i className='ri-time-line'></i> {duration}
					</p>
					<p>
						<i className='ri-book-line'></i> {topic}
					</p>
				</div>
				<div className='flex justify-between items-center'>
					<p>{author}</p>
					<p className='text-[#22c55f] text-xl font-bold'>₮{price}</p>
				</div>
			</div>
		</div>
	);
};

const categories = [
	'Дизайн',
	'Маркетинг',
	'Хөгжүүлэлт',
	'Мэдээлэл технологи',
	'Хувь хүнийй хөгжил',
	'Хөгжим',
	'Бизнес',
	'Фотограф',
	'Эрүүл мэнд',
	'Санхүү',
];

export default function Home() {
	return (
		<main>
			<div className='bg-hero bg-cover bg-no-repeat  lg:h-[620px] h-[200px]  rounded-b-3xl mb-16'>
				<div className='bg-gradient-to-b from-[#151847] bg-cover px-2 py-4 lg:px-8 lg:py-20'>
					<h1 className='text-base lg:text-6xl font-bold uppercase mb-2'>
						Онцлох мэдлэгт <br />
						онлайнаар суралц
					</h1>
					<p className='text-sm lg:text-lg font-bold mb-8 lg:mb-5'>
						Хамгийн хүчтэй зэвсэг бол мэдлэг, боловсрол юм
					</p>
					<div className='flex gap-4 lg:mb-6'>
						<button className='bg-[#3c82f6] text-white text-sm lg:text-xl p-4 rounded-xl'>
							Бидний тухай
						</button>
						<button className='bg-white text-black text-sm lg:text-xl p-4 rounded-xl'>
							Сурагчдын Сэтгэгдэл
						</button>
					</div>
					<ul className=' gap-2 hidden lg:block'>
						<li>
							<i className='ri-check-line ri-xl text-[#3c82f6] text-bold'></i>Шалгалт болон
							дүгнэлттэй
						</li>
						<li>
							<i className='ri-check-line ri-xl text-[#3c82f6] text-bold'></i>Хэзээ ч хаанаас
							ч суралцах боломжтой
						</li>
						<li>
							<i className='ri-check-line ri-xl text-[#3c82f6] text-bold'></i>Дижитал
							баталгаа олгодог
						</li>
						<li>
							<i className='ri-check-line ri-xl text-[#3c82f6] text-bold'></i>Нэг л удаа
							төлбөр төлнө
						</li>
					</ul>
				</div>
			</div>
			<div className='flex lg:justify-center overflow-x-scroll  hide-scroll-bar gap-4 lg:gap-16 mx-5 mb-10 lg:mb-16'>
				<CardContainer
					bgUrl={'https://api.meborny.mn/uploads/courses/img_1_1682758877.png'}
					level={'Дунд шат'}
					star={'5.00'}
					reviewCount={0}
					title={'Крипто ертөнцийн үндэс'}
					duration={'00 цаг 00 минут'}
					topic={4}
					author={'Ireedui'}
					price={'99,000'}
					authorUrl={
						'https://api.meborny.mn/uploads/users/user_1682758881_249201184073631.jpg'
					}
				/>
				<CardContainer
					bgUrl={'https://api.meborny.mn/uploads/courses/img_1_1682758877.png'}
					level={'Дунд шат'}
					star={'5.00'}
					reviewCount={0}
					title={'Крипто ертөнцийн үндэс'}
					duration={'25 цаг 22 минут'}
					topic={4}
					author={'Ireedui'}
					price={'99,000'}
					authorUrl={
						'https://api.meborny.mn/uploads/users/user_1682758881_249201184073631.jpg'
					}
				/>
				<CardContainer
					bgUrl={'https://api.meborny.mn/uploads/courses/img_1_1682758877.png'}
					level={'Дунд шат'}
					star={'5.00'}
					reviewCount={0}
					title={'Крипто ертөнцийн үндэс'}
					duration={'00 цаг 00 минут'}
					topic={4}
					author={'Ireedui'}
					price={'99,000'}
					authorUrl={
						'https://api.meborny.mn/uploads/users/user_1682758881_249201184073631.jpg'
					}
				/>
				<CardContainer
					bgUrl={'https://api.meborny.mn/uploads/courses/img_1_1682758877.png'}
					level={'Дунд шат'}
					star={'5.00'}
					reviewCount={0}
					title={'Крипто ертөнцийн үндэс'}
					duration={'00 цаг 00 минут'}
					topic={4}
					author={'Ireedui'}
					price={'99,000'}
				/>
			</div>
			<div className='flex flex-col px-6 lg:items-center mb-16'>
				<p className='font-bold text-sm lg:text-xl'>
					Өөрийгөө хөгжүүлж, илүү зүйлд өөрийгөө бэлд
				</p>
				<p className='font-bold text-4xl lg:text-6xl mb-10'>Нийт хичээлийн ангилалууд</p>
				<div className='flex overflow-x-scroll hide-scroll-bar mb-10'>
					<div className='flex gap-4 flex-nowrap'>
						{categories.map((c) => (
							<div className='bg=[#20256f] '>{c}</div>
						))}
					</div>
				</div>
				<button className='bg-[#003bff]  font-bold uppercase rounded-md px-6 lg:px-10 py-3 lg:py-4'>
					Бүх ангилалыг харах
					<span className='p-2'>
						<i className='ri-arrow-right-line'></i>
					</span>
				</button>
			</div>
			<p className='font-bold text-sm uppercase  text-center mb-4'>Meborny LLC</p>
			<div className='text-center mb-5 lg:mb-10'>
				<span className='bg-bg-primary font-bold text-xl lg:text-4xl mb-4 lg:mb-10  text-center px-8'>
					ТООН СТАТИСТИК
				</span>
			</div>
			<div className='grid lg:grid-cols-3 space-y-4 lg:space-y-0 mb-24 lg:mb-40'>
				<div className='flex flex-col justify-center items-center'>
					<p className='text-3xl lg:text-6xl font-bold'>246</p>
					<p className='text-xl lg:text-2xl  font-bold text-gray-500'>СУРАГЧИД</p>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<p className='text-3xl lg:text-6xl font-bold'>4</p>
					<p className='text-xl lg:text-2xl  font-bold text-gray-500'>БАГШ</p>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<p className='text-3xl lg:text-6xl font-bold'>89%</p>
					<p className='text-xl lg:text-2xl  font-bold text-gray-500'>АМЖИЛТТАЙ ТӨГСӨГЧИД</p>
				</div>
			</div>
		</main>
	);
}
