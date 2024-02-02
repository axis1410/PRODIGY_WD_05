export const airQualityLevel = (usEpaIndex: number) => {
	if (usEpaIndex === 1) return 'Good';
	else if (usEpaIndex === 2) return 'Moderate';
	else if (usEpaIndex === 3) return 'Unhealthy for Sensitive Groups';
	else if (usEpaIndex === 4) return 'Unhealthy';
	else if (usEpaIndex === 5) return 'Very Unhealthy';
	else if (usEpaIndex === 6) return 'Hazardous';
	else return 'Unknown';
};
