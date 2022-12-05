import React from 'react';

import Display from './display';
import DrumPad from './drum-pad';

const DRUM_MACHINE_PADS = [
  {
    key: 'Q',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      name: 'Heater 1',
    },
  },
  {
    key: 'W',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      name: 'Heater 2',
    },
  },
  {
    key: 'E',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      name: 'Heater 3',
    },
  },
  {
    key: 'A',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      name: 'Heater 4',
    },
  },
  {
    key: 'S',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      name: 'Clap',
    },
  },
  {
    key: 'D',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      name: 'Open HH',
    },
  },
  {
    key: 'Z',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      name: "Kick-n'-Hat",
    },
  },
  {
    key: 'X',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      name: 'Kick',
    },
  },
  {
    key: 'C',
    song: {
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      name: 'Closed HH',
    },
  },
];

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: DRUM_MACHINE_PADS,
      currentSong: '',
      volume: '0.5',
    };
    this.updateCurrentSong = this.updateCurrentSong.bind(this);
  }
  updateCurrentSong(song) {
    this.setState({ currentSong: song });
  }
  render() {
    return (
      <div id="drum-machine" className="row gy-3">
        <div className="col-sm-6">
          <div className="row row-cols-3 g-2">
            {this.state.drumPads.map((pad, i) => (
              <DrumPad
                key={i}
                padKey={pad.key}
                song={pad.song}
                onPlay={this.updateCurrentSong}
                volume={this.state.volume}
              />
            ))}
          </div>
        </div>
        <div className="col-sm-6 text-center align-self-center">
          <div className="d-flex flex-column">
            <Display text={this.state.currentSong} />
            <label htmlFor="volume" className="form-label">
              Volume
            </label>
            <input
              type="range"
              className="form-range"
              min="0.1"
              max="1"
              step="0.1"
              id="volume"
              value={this.state.volume}
              onChange={({ target: { value } }) => {
                this.setState({ volume: value });
              }}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
