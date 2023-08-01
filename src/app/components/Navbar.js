'use client';

import Link from 'next/link';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='sticky top-0 z-40'>
			<div className='bg-bg-primary flex justify-between lg:hidden px-2 py-4'>
				<button onClick={() => setIsOpen(!isOpen)}>
					{!isOpen ? <i className='ri-menu-line'></i> : <i className='ri-close-fill'></i>}
				</button>
				<h1 className='text-xl font-semibold'>meborny</h1>
				<Link href='/cart'>
					<i className='ri-shopping-cart-2-line'></i>
				</Link>
			</div>
			<ul
				className={`top-15 left-0 w-[55vw] bg-[#20256f] text-base text-white fixed h-full space-y-4 z-40 ease-in-out duration-300 lg:hidden  p-4  ${
					isOpen ? 'translate-x-0' : 'translate-x-[-55vw]'
				}`}
			>
				<li>
					<span className='mr-2'>
						<i className='ri-home-line'></i>
					</span>
					Нүүр
				</li>
				<li className='bg-[#3c82f6] rounded-md px-2 w-4/6'>
					<span className='mr-2'>
						<i className='ri-facebook-circle-line'></i>
					</span>
					Нэвтрэх
				</li>
				<li>
					<span className='mr-2'>
						<i className='ri-book-open-line'></i>
					</span>
					Хичээлүүд
				</li>
				<li>
					<span className='mr-2'>
						<i className='ri-information-line'></i>
					</span>
					Бидний тухай
				</li>
				<li>
					<span className='mr-2'>
						<i className='ri-phone-line'></i>
					</span>
					Холбоо барих
				</li>
			</ul>

			<div className='hidden lg:block'>
				<div className='bg-white text-black font-light text-xs justify-between  items-center px-4 py-2 hidden lg:flex'>
					<p>
						Холбоо барих <i className='ri-phone-line'></i>
						+(976) 7728-2222 <i className='ri-mail-line'></i> info@meborny.com
					</p>
					<div className='flex items-center gap-4'>
						<button className='bg-[#3c82f6] text-white text-base p-1 rounded-md'>
							Нэвтрэх
						</button>
						<i className='ri-facebook-circle-line ri-xl'></i>
						<i className='ri-instagram-line ri-xl'></i>
					</div>
				</div>
				<nav className='flex justify-between bg-bg-primary p-4 drop-shadow-md'>
					<Link href='/'>
						<p className='text-3xl font-semibold'>meborny</p>
					</Link>
					<div className='flex gap-6 uppercase'>
						<Link href='/' className=' hover:underline underline-offset-2'>
							Нүүр
						</Link>
						<Link href='/about' className='hover:underline underline-offset-2'>
							Бидний Тухай
						</Link>
						<Link href='/projects' className='hover:underline underline-offset-2'>
							Хичээлүүд
						</Link>
						<Link href='/contact' className='hover:underline underline-offset-2'>
							Холбоо барих
						</Link>
						<Link href='/cart'>
							<i className='ri-shopping-cart-2-line'></i>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}
