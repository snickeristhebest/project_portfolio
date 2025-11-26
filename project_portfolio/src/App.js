import './App.css';
import faceImage from './assets/images/face.jpeg';
import batmanAudio from './assets/audio/Classic Batman Transition - QuickSounds.com.mp3';
import { useRef, useState } from 'react';
import Confetti from 'react-confetti';

function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startSite = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} src={batmanAudio} />
      
      {!started ? (
        <div className="start-screen">
          <button className="start-button" onClick={startSite}>
            Enter Site
          </button>
        </div>
      ) : (
      <>
        <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
          />
        <header className="App-header">
          <img src={faceImage} className="App-logo growing" alt="face" />
          <script src="https://app.embed.im/confetti.js" defer></script>
        </header>
      </>  
      )}
    </div>
  );
}

export default App;