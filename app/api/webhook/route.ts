import { NextRequest } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY!;

interface DialogflowRequest {
  queryResult: {
    intent: {
      displayName: string;
    };
    parameters: {
      ["geo-city"]?: string;
      location?: string;
    };
  };
}

interface Place {
  name: string;
  formatted_address: string;
}

interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as DialogflowRequest;
  const intent = body.queryResult.intent.displayName;
  const city = body.queryResult.parameters["geo-city"] || body.queryResult.parameters["location"];

  if (!city) {
    return Response.json({ fulfillmentText: "Which city or location are you asking about?" });
  }

  if (intent === "AccommodationQuery") {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${city}+Mongolia&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = (await response.json()) as { results: Place[] };

    const results = data.results.slice(0, 3);
    const hotels = results.map((place, i) => `${i + 1}. ${place.name} – ${place.formatted_address}`);
    const reply = `${city}-д байрлах зочид буудлууд:\n` + hotels.join("\n");

    return Response.json({ fulfillmentText: reply });

  } else if (intent === "WeatherQuery") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = (await response.json()) as WeatherResponse;

    const temp = data.main?.temp;
    const desc = data.weather?.[0]?.description;
    const reply = `${city}-д одоогоор ${temp}°C, ${desc} байна.`;

    return Response.json({ fulfillmentText: reply });

  } else {
    return Response.json({ fulfillmentText: "Би энэ асуултад одоохондоо хариулахгүй байна." });
  }
}
