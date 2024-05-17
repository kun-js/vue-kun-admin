declare namespace TMap {
  class Map {
    constructor(container: string | HTMLElement, options: MapOptions);
    on(event: string, handler: (evt: any) => void): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    getLat(): number;
    getLng(): number;
  }

  interface MapOptions {
    center: LatLng;
    zoom: number;
  }

  class MarkerStyle {
    constructor(options: MarkerStyleOptions);
  }

  interface MarkerStyleOptions {
    width: number;
    height: number;
    src: string;
    anchor: { x: number; y: number };
  }

  class MultiMarker {
    constructor(options: MultiMarkerOptions);
  }

  interface MultiMarkerOptions {
    map: Map;
    styles: { [key: string]: MarkerStyle };
    geometries: Geometry[];
  }

  interface Geometry {
    id: string;
    styleId: string;
    position: LatLng;
    properties?: { [key: string]: any };
  }
}
