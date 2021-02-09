enum ErrorText {
  /** Avoid showing this message to the user. Identify problem and provide more specific feedback. */
  Stub = "Something is not working. Please, try again later.",

  // Class errors
  InvalidWindSpeed = "Invalid wind speed value",
  InvalidHumidity = "Invalid humidity value",

  // Component errors
  InvalidIconSlug = "Icon not found. Check IconSlug to see available icons.",

  // API call errors
  BadRequest = "Please, enter city name and, preferably, country code.",
  InvalidApiKey = "Your API key is invalid.",
  CityNotFound = "City not found. Please, provide its full name and country code.",
  ClientError = "Something happened with the widget. Please, contact its maintainer.",
  ServerError = "Something happened with OpenWeather server. Please, try again later.",
  OtherResponse = "Something changed in OpenWeather API. Please, contact widget maintainer to check this.",

  // Store errors
  ItemIsDuplicate = "Already in the list",
  ItemNotFound = "No such item in the list",
}

export default ErrorText;
