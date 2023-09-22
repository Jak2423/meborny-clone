export default function Footer() {
	return (
		<footer className='relative bg-[#181c60]'>
			<div className='flex flex-col lg:flex-row justify-between items-center w-full lg:w-[50%]  bg-[#444fe3] lg:absolute lg:-top-24 lg:left-[25%] mx-auto lg:rounded-[40px] mb-6 px-4 py-8 lg:py-0 lg:space-x-4 space-y-4'>
				<div className='flex items-center gap-2'>
					<i className='ri-customer-service-2-line ri-2x'></i>
					<p className='lg:text-sm text-xs lg:py-14 font-bold'>
						Манай системийг ашиглахад хүндрэлтэй зүйлс гарч байгаа бол бидэнд мэдэгдэнэ үү
					</p>
				</div>
				<div className='relative w-full'>
					<input
						type='text'
						className='h-10 text-xs lg:text-sm text-black w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
						placeholder='Meborny support'
						data-ddg-inputtype='unknown'
					></input>
					<button className='absolute top-2 right-2 h-6 w-32 text-white rounded-lg bg-orange-500 hover:bg-orange-600 font-bold text-xs'>
						Илгээх
					</button>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row lg: space-y-4 lg:justify-evenly items-start lg:mt-16 py-10 lg:py-20 px-4 lg:px-8'>
				<div>
					<h1 className='text-2xl font-bold text-white mb-8 uppercase'>МИБОРНИ ХХК</h1>
					<ul>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Бидний тухай
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Үйлчилгээний нөхцөл
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Түгээмэл асуулт
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Санал хүсэлт илгээх
						</li>
					</ul>
				</div>
				<div>
					<h1 className='text-2xl font-bold text-white mb-8 uppercase'>ТӨСЛҮҮД</h1>
					<ul>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Mefoxy NFT Club
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							IZC TOKEN
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							KEYS.MN
						</li>
						<li className=' text-xs lg:text-md font-bold text-white mb-1.5 dark:text-[#434ee0] uppercase'>
							Roi management
						</li>
					</ul>
				</div>
				<div>
					<h1 className='text-2xl font-bold text-white mb-8 uppercase'>АПП ТАТАХ</h1>
					<img
						src='https://meborny.mn/static/appstore.png'
						alt='appstore'
						className='w-[160px] h-auto mb-2'
					/>
					<img
						src='https://meborny.mn/static/googleplay.png'
						alt='googleplay'
						className='w-[160px] h-auto'
					/>
				</div>
				<div className='border-l-2 flex flex-col gap-4 pl-4'>
					<p>
						<span className='text-blue-700 mr-2'>
							<i className='ri-map-pin-2-line'></i>
						</span>
						1013 тоот, Central tower, Улаанбаатар хот
					</p>
					<p>
						<span className='text-blue-700 mr-2'>
							<i className='ri-phone-line'></i>
						</span>
						7728-2222
					</p>
					<p>
						<span className='text-blue-700 mr-2'>
							<i className='ri-mail-line'></i>
						</span>
						info@meborny.mn
					</p>
					<p>
						<span className='text-blue-700 mr-2'>
							<i className='ri-earth-line'></i>
						</span>
						info@meborny.mn
					</p>
				</div>
			</div>
			<p className='uppercase text-center text-md lg:text-2xl font-bold dark:text-[#434ee0] text-white pb-8'>
				МИБОРНИ ХХК 2014-{new Date().getFullYear()} ОН ©
			</p>
		</footer>
	);
}
