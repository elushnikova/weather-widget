import WeatherApiInterface from "@/interfaces/WeatherApiInterface";
import WeatherInterface from "@/interfaces/WeatherInterface";

import CelsiusTemperature from "@/classes/CelsiusTemperature";
import Humidity from "@/classes/Humidity";
import Pressure from "@/classes/Pressure";
import Sentence from "@/classes/Sentence";
import Temperature from "@/classes/Temperature";
import Visibility from "@/classes/Visibility";
import WeatherIconUrl from "@/classes/url/WeatherIconUrl";
import WindSpeed from "@/classes/WindSpeed";

import TemperatureUnit from "@/assets/units/TemperatureUnit";

class Weather implements WeatherInterface {
  cityId: number;
  location: string;
  image: string;
  name: string;
  description: string;
  temperature: CelsiusTemperature;
  feelsLike: CelsiusTemperature;
  wind: {
    speed: WindSpeed;
    degree: number;
  };
  pressure: Pressure;
  humidity: Humidity;
  visibility: Visibility;

  constructor(item: WeatherApiInterface) {
    const u = new WeatherIconUrl(item.weather[0].icon);

    this.cityId = item.id;
    this.location = item.name + ", " + item.sys.country;
    this.image = u.fullUrl();
    this.name = item.weather[0].main;

    const descriptionSentence = new Sentence(item.weather[0].description);
    this.description = descriptionSentence.toSentenceCase([]);

    this.temperature = new CelsiusTemperature(item.main.temp);
    this.temperature.round(0);

    this.feelsLike = new CelsiusTemperature(item.main.feels_like);
    this.feelsLike.round(0);

    this.wind = {
      speed: new WindSpeed(item.wind.speed),
      degree: item.wind.deg,
    };
    this.wind.speed.round(1);

    this.pressure = new Pressure(item.main.pressure);
    this.humidity = new Humidity(item.main.humidity);
    this.humidity.round(0);

    this.visibility = new Visibility(item.visibility);
    this.visibility.convertToKilometres();
    this.visibility.round(1);
  }

  summary(): string {
    const items = [
      "Feels like " + this.feelsLike.toString(),
      this.description,
      this.wind.speed.toBeaufort(),
    ];
    return items.join(". ");
  }

  dewPoint(): CelsiusTemperature {
    let t: CelsiusTemperature;

    if (this.humidity.value > 50) {
      t = this.useSimpleApproximation();
    } else {
      t = this.useMagnusFormula();
    }

    t.round(0);
    return t;
  }

  private useSimpleApproximation(): CelsiusTemperature {
    const dewPoint = this.temperature.value - (100 - this.humidity.value) / 5;
    return new Temperature(
      dewPoint,
      TemperatureUnit.DegreeCelsius
    ) as CelsiusTemperature;
  }

  /**
   * @todo Implement actual Magnus formula,
   * if need more accurate dew point temperature calculation
   */
  private useMagnusFormula(): CelsiusTemperature {
    return this.useSimpleApproximation();
  }
}

export default Weather;
