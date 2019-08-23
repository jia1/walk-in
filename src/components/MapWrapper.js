import React from 'react';
import {
  Link
} from 'react-router-dom';
import L from 'leaflet';
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Tooltip
} from 'react-leaflet';
import {
  Button,
  ButtonGroup,
  Snackbar,
  Typography
} from '@material-ui/core';

import utils from '../utils';

import 'leaflet/dist/leaflet.css';
import './MapWrapper.scss';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import redLeafletIcon from '../assets/markers/leaf-red.png';
import leafletShadowIcon from '../assets/markers/leaf-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

let RedLeafletIcon = L.icon({
  iconUrl: redLeafletIcon,
  shadowUrl: leafletShadowIcon,
  iconSize: [38, 95],
	shadowSize: [50, 64],
	iconAnchor: [22, 94],
	shadowAnchor: [4, 62],
	popupAnchor: [-3, -76]
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
// const mapUrl = 'https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png';
// const mapAttribution = '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>';

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      position: [1.2959, 103.8555],
      shouldSnackbarOpen: false,
      snackbarTimeoutId: -1,
      geolocationWatchId: -1
    };
  }

  componentDidMount() {
    /*
    if (navigator.geolocation) {
      const geolocationWatchId = navigator.geolocation.watchPosition((position) => {
        this.setState({
          position: [
            position.coords.latitude,
            position.coords.longitude
          ]
        }, () => {
          this._logPosition();
        });
      });
      this.setState({
        geolocationWatchId
      });
    }
    */
  }

  componentWillUnmount() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.state.geolocationWatchId);
    }
    if (this.state.snackbarTimeoutId) {
      clearTimeout(this.state.snackbarTimeoutId);
    }
  }

  _handleSnackbarClose() {
    this.setState({
      open: false
    });
  }

  _logPosition() {
    console.log(this.state.position);
  }

  _scheduleInterview(interview) {
    this.props.onMakeInterviewAppointmentClick(
      interview.id,
      interview.slots[0],
      this.state.userId
    );
    // Oops, no promise!
    this.setState({
      shouldSnackbarOpen: true
    }, () => {
      const snackbarTimeoutId = setTimeout(() => {
        this._handleSnackbarClose();
      }, 3000);
      this.setState({
        snackbarTimeoutId
      });
    });
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
          <Marker
            icon={RedLeafletIcon}
            position={this.state.position}
          >
            <Tooltip>
              You are here.
            </Tooltip>
          </Marker>
          {
            Object.values(this.props.interviews).map((interview) => {
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
                        interview.slots.length &&
                        `${utils.formatDateTime(this.props.slots[interview.slots[0]].startDateTime)} to ${utils.formatTime(this.props.slots[interview.slots[0]].endDateTime)}`
                      }
                    </strong></p>
                    <ButtonGroup
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      <Button
                        component={Link} to={{
                          pathname: `/schedule/${interview.id}`,
                          state: {
                            interviews: this.props.interviews,
                            slots: this.props.slots
                          }
                        }}
                      >
                        More information
                      </Button>
                      <Button
                        onClick={() => {
                          this._scheduleInterview(interview);
                        }}
                      >
                        Make an appointment
                      </Button>
                    </ButtonGroup>
                    <p>
                      For more interview slots, see "More information".
                    </p>
                  </Popup>
                  <Tooltip>
                    Interview here. Click to view.
                  </Tooltip>
                </Marker>
              );
            })
          }
        </Map>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={this.state.shouldSnackbarOpen}
          onClose={() => {
            this._handleSnackbarClose();
          }}
          ContentProps={{
            'aria-describedby': 'schedule-success-message',
          }}
          message={<span id="schedule-success-message">Interview scheduled.</span>}
        />
      </div>
    );
  }
};

export default MapWrapper;
