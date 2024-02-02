import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Axis Weather',
	description: 'Uses free weather API from weatherapi.com to display weather data',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gradient-to-r from-lapis_lazuli-700 to-indigo-500 h-screen flex flex-col px-10 pt-10 pb-5`}
			>
				<h1 className='text-3xl sm:text-5xl text-white font-bold'>Axis Weather</h1>
				{children}
				<footer className='flex justify-center items-end text-sm sm:text-lg text-white font-semibold'>
					Powered by&nbsp;
					<Link
						className='cursor-pointer text-white hover:text-gray-400'
						href='https://www.weatherapi.com/'
						target='blank'
					>
						WeatherAPI.com
					</Link>
				</footer>
			</body>
		</html>
	);
}
