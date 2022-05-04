export default class View {
  constructor() {
    this.btnStart = document.getElementById("startAudio");
    this.btnStop = document.getElementById("stopAudio");
    this.audioElement = document.getElementById("audio");
  }

  onRecordClick(command) {
    return () => {
      command()
      this.toggleAudioElement({ visible: false });

    }
  }
  onStopRecordClick(command) {

    this.btnStop.classList.remove('hidden');
    return () => {
      command()
    }
  }
  configureStartRecordButton(command) {
    this.btnStart.addEventListener('click', this.onRecordClick(command));
  }
  configureStopRecordButton(command) {
    this.btnStop.addEventListener('click', this.onStopRecordClick(command));
  }

  toggleAudioElement({ visible }) {
    const classList = this.audioElement.classList;
    visible ? classList.remove('hidden') : classList.add('hidden');
  }

  playAudio(url) {
    console.log(url);
    const audio = this.audioElement;
    audio.src = url;
    audio.muted = false;
    this.toggleAudioElement({ visible: true });
    audio.addEventListener("loadedmetadata", _ => audio.play());

  }
}