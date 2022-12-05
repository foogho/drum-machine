import React from 'react';

export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyDownListener: (e) => {
        if (e.key.toLowerCase() === this.props.padKey.toLowerCase()) {
          this.playAudio();
        }
      },
      isPlaying: false,
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

  async playAudio() {
    this.setState({ isPlaying: true });
    this.props.onPlay(this.props.song.name);
    const audioEl = this.state.audioEl;
    if (!audioEl.ended) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
    try {
      await audioEl.play();
    } catch (error) {
    } finally {
      this.setState({ isPlaying: false });
    }
  }
  render() {
    const { padKey, song } = this.props;
    return (
      <button
        className="drum-pad btn btn-secondary p-4 border rounded text-center shadow-lg fw-semibold"
        onClick={this.playAudio}
        disabled={this.state.isPlaying}
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
