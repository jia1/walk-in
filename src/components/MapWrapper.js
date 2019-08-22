import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './MapWrapper.scss';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapUrl = 'https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png';
const mapAttribution = '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>';

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 'hidden',
      position: [51.505, -0.09],
      watchId: -1
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition((position) => {
        this.setState({
          position: [
            position.coords.latitude,
            position.coords.longitude
          ]
        });
      });
      this.setState({
        watchId
      });
    }
  }

  componentWillUnmount() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.state.watchId);
    }
  }

  render() {
    return (
      <div className="MapWrapper">
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
          {
            this.props.interviews.map((interview) => {
              return (
                <Marker
                  key={interview.id}
                  position={[interview.latitude, interview.longitude]}
                >
                  <Popup>
                    <p>{interview.title}</p>
                    <p>{interview.description}</p>
                  </Popup>
                </Marker>
              );
            })
          }
        </Map>
      </div>
    );
  }
};

export default MapWrapper;
