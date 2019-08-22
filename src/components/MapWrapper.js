import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import utils from '../utils';

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
      userId: 10,
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
          </Marker>
          {
            this.props.interviews.map((interview) => {
              return (
                <Marker
                  key={interview.id}
                  position={[interview.latitude, interview.longitude]}
                >
                  <Popup>
                    <Typography variant="h6">
                      {interview.title}
                    </Typography>
                    {`${utils.truncate(interview.description, 200)}...`}
                    <p><strong>
                      {
                        interview.slots &&
                        `${utils.formatDateTime(interview.slots[0].startDateTime)} to ${utils.formatTime(interview.slots[0].endDateTime)}`
                      }
                    </strong></p>
                    <Grid container
                      direction="column"
                      justify="space-between"
                      spacing={1}
                    >
                      <Grid item>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            console.log('User wants more info.');
                          }}
                        >
                          More information / interviews
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            this.props.onMakeInterviewAppointmentClick(interview.id, interview.slots[0].id, this.state.userId);
                          }}
                        >
                          Make an interview appointment
                        </Button>
                      </Grid>
                    </Grid>
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
