import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { MAPS_API_KEY } from "../../../../shared/constants/map.const";

const MapComponent = ({ google, addressInfo }) => {
  return (
    <Map
      google={google}
      zoom={12}
      style={{ width: "100%", height: "55%" }}
      initialCenter={{
        lat: addressInfo.location.lat,
        lng: addressInfo.location.lng,
      }}
      onClick={() => window.open(`${addressInfo.url}`, "_blank")}
    >
      <Marker
        position={{
          lat: addressInfo.location.lat,
          lng: addressInfo.location.lng,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY,
})(MapComponent);
