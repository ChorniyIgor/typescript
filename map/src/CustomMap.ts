//Instruction for an argument for addMarker method
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private mapContainer: Element;
  private customMap: google.maps.Map;

  constructor(mapContainer) {
    this.mapContainer = mapContainer;
    this.customMap = new google.maps.Map(mapContainer, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapker: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: mapker.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapker.markerContent(),
      });

      infoWindow.open(this.customMap, marker);
    });
  }
}
