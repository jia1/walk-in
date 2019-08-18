import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './MapContainer.scss';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapUrl = 'https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png';
const mapAttribution = '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [51.505, -0.09]
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          position: [
            position.coords.latitude,
            position.coords.longitude
          ]
        });
      });
    }
  }

  render() {
    return (
      <div className="MapContainer">
        <Map
          id="map"
          maxBounds={[[1.56073, 104.1147], [1.16, 103.502]]}
          center={this.state.position}
          zoom={18}
        >
          <TileLayer
            url={mapUrl}
            attribution={mapAttribution}
          />
          <Marker position={this.state.position}>
            <Popup>You are here.</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
};

export default MapContainer;
