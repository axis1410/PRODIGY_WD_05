interface OtherData {
	airQualityText: string;
}

export default function OtherData({ airQualityText }: OtherData) {
	return (
		<div className='glassmorphism mt-2 text-center w-full md:w-3/4 px-5 py-20'>
			<h1 className='text-white text-2xl font-semibold'>Air Quality Level: {airQualityText}</h1>
		</div>
	);
}
