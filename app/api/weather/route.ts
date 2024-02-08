import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location");

  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await axios.get(apiUrl);

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Error occured" }, { status: 500 });
  }
}
