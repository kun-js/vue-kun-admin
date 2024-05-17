declare namespace BMapGL {
  class Map {
    constructor(container: string | HTMLElement);
    centerAndZoom(point: Point, zoom: number): void;
    addControl(control: Control): void;
    addOverlay(overlay: Overlay): void;
    openInfoWindow(infoWnd: InfoWindow, point: Point): void;
  }

  class Point {
    constructor(lng: number, lat: number);
  }

  class ScaleControl extends Control {}
  class ZoomControl extends Control {}
  class Marker extends Overlay {
    constructor(point: Point);
  }

  class InfoWindow {
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
  }

  interface Control {}
  interface Overlay {}
  interface InfoWindowOptions {
    width?: number;
    height?: number;
    title?: string;
  }
}
