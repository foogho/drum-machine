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
    };
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.state.keyDownListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.state.keyDownListener);
  }

  playAudio() {
    this.setState({ isActive: true });
    const audioEl = document.querySelector(`#${this.props.padKey}`);
    audioEl.play().then(() => {
      this.props.onPlay(this.props.song.name);
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
