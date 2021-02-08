import ApiInputInterface from "@/types/interfaces/ApiInputInterface";

function composeUrl({ apiKey, location }: ApiInputInterface) {
  return (
    "https://api.openweathermap.org/data/2.5/weather" +
    `?q=${location}` +
    `&APPID=${apiKey}`
  );
}

export default composeUrl;
