import Image from "next/image";

interface WeatherCardProps {
  name: string;
  country: string;
  condition: string;
  icon: string;
  feelsLike: number;
  temp_c: number;
  feelslike_c: number;
  temp_f: number;
  feelslike_f: number;
  isCelcius: boolean;
  currentTime: string;
}

export const WeatherCard = ({
  name,
  country,
  condition,
  icon,
  temp_c,
  temp_f,
  feelslike_c,
  feelslike_f,
  currentTime,
  isCelcius,
}: WeatherCardProps) => {
  return (
    <div className="glassmorphism w-full md:w-3/4 px-2 py-5 text-center">
      <div className="text-center">
        <div>
          <h1 className="sm:text-4xl text-3xl sm:font-bold font-semibold text-white">
            {name}, {country}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={icon} alt={condition} width={100} height={100} />
          <p className="text-2xl sm:text-3xl text-white font-semibold">
            {isCelcius ? <span>{temp_c} &deg;C</span> : <span>{temp_f} &deg;F</span>}
          </p>
          <p className="text-xl sm:text-2xl text-white font-medium">{condition}</p>
          <p className="text-lg sm:text-xl text-white font-medium">
            Feels like{" "}
            {isCelcius ? <span>{feelslike_c} &deg;C</span> : <span>{feelslike_f} &deg;F</span>}
          </p>
          <p className="text-4xl sm:text-6xl py-10 text-white ">{currentTime}</p>
        </div>
      </div>
    </div>
  );
};
