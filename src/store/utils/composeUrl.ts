function composeUrl(location: string, apiKey: string) {
  return (
    "https://api.openweathermap.org/data/2.5/weather" +
    `?q=${location}` +
    `&APPID=${apiKey}`
  );
}

export default composeUrl;
