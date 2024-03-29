"use client";

import LocationInput from "@/components/LocationInput";
import OtherData from "@/components/OtherData";
import { WeatherCard } from "@/components/WeatherCard";
import { airQualityLevel } from "@/utils/airQualityLevel";
import { defaultWeather } from "@/utils/defaultWeather";
import { parseRequestBody } from "@/utils/parseRequestBody";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { Commet } from "react-loading-indicators";

export default function Home() {
  const [weatherData, setWeatherData] = useState<Weather>(defaultWeather);
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCelcius, setIsCelcius] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>("Waiting for input");
  const [airQualityText, setAirQualityText] = useState<string>("");

  const apiKey = process.env.WEATHER_API_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage(null);

    const requestLocation = parseRequestBody(location);

    await axios
      .get("/api/weather", {
        params: {
          location: requestLocation,
        },
      })
      .then(async (res) => {
        const data = res.data;
        const airQuality = airQualityLevel(data?.current?.air_quality["us-epa-index"]);
        setAirQualityText(airQuality?.toString());
        setCurrentTime(data?.location?.localtime.toString().slice(11));
        setWeatherData(data);
      })
      .catch((err: AxiosError) => {
        // @ts-ignore
        if (err.response?.data.error.code === 1003) {
          setErrorMessage("Please provide an input");
        } else {
          // @ts-ignore
          setErrorMessage(err.response?.data.error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChangeUnits = () => {
    setIsCelcius((prev) => !prev);
  };

  return (
    <div className=" h-screen flex flex-col px-2 py-10">
      <LocationInput location={location} setLocation={setLocation} handleSubmit={handleSubmit} />
      {weatherData?.location.name !== "" ? (
        <div className=" flex items-center justify-around flex-col">
          <WeatherCard
            name={weatherData?.location.name}
            country={weatherData?.location.country}
            condition={weatherData?.current.condition.text}
            icon={`http:${weatherData?.current.condition.icon}`}
            feelsLike={weatherData?.current.feelslike_c}
            temp_c={weatherData?.current.temp_c}
            feelslike_c={weatherData?.current.feelslike_c}
            temp_f={weatherData?.current.temp_f}
            feelslike_f={weatherData?.current.feelslike_f}
            isCelcius={isCelcius}
            currentTime={currentTime}
          />
          <OtherData airQualityText={airQualityText} />
        </div>
      ) : (
        <div className={`text-5xl text-center text-white`}>
          {isLoading ? <Commet color="#ffffff" size="medium" text="" textColor="" /> : errorMessage}
        </div>
      )}

      <button
        type="button"
        className="fixed bottom-0 right-0 sm:h-20 sm:w-20 h-10 w-10 rounded-full sm:m-10 m-4 
          bg-black hover:bg-gray-900 text-white text-lg sm:text-3xl"
        onClick={handleChangeUnits}
      >
        {isCelcius ? "C" : "F"}
      </button>
    </div>
  );
}
