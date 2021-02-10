import GeolocationCoordinates from "@/interfaces/geo/GeolocationCoordinates";

interface GeolocationPosition {
  readonly coords: GeolocationCoordinates;
  readonly timestamp: number;
}

export default GeolocationPosition;
