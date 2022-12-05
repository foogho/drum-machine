import React from 'react';

export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyDownListener: (e) => {
        if (e.key === this.props.padKey.toLowerCase()) {
          this.playAudio();
        }
      },
      isActive: false,
      audioEl: {},
    };
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.state.keyDownListener);
    this.setState({ audioEl: document.querySelector(`#${this.props.padKey}`) });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.state.keyDownListener);
  }

  playAudio() {
    this.props.onPlay(this.props.song.name);
    this.setState({ isActive: true });
    const audioEl = this.state.audioEl;
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.play().then(() => {
      this.setState({ isActive: false });
    });
  }
  render() {
    const { padKey, song } = this.props;
    return (
      <button
        className="drum-pad btn btn-secondary p-4 border rounded text-center shadow-lg fw-semibold"
        onClick={this.playAudio}
        disabled={this.state.isActive}
        id={song.name}
      >
        {padKey}
        <audio src={song.url} className="clip" id={padKey}></audio>
      </button>
    );
  }
}
DrumPad.defaultProps = {
  onPlay: () => {},
};
