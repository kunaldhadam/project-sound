import React, { useEffect, useRef, useState } from 'react';

const SoundVisualizer = () => {
  const canvasRef = useRef(null);
  const [audioElement, setAudioElement] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  let audioContext, analyser, dataArray, canvasCtx;

  useEffect(() => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    if (!audioElement) {
      const audio = audioContext.createOscillator(); // Replace with actual path
      audio.crossOrigin = "anonymous"; // Necessary for certain servers
      setAudioElement(audio);
    }

    canvasCtx = canvasRef.current.getContext('2d');

    // Render loop
    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray); // Get waveform data

      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasCtx.beginPath();
      const sliceWidth = (canvasRef.current.width * 1.0) / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvasRef.current.height) / 2;
        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      canvasCtx.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
      canvasCtx.stroke();
    };

    // Play audio on user interaction
    const playAudio = () => {
      if (audioElement && !isPlaying) {
        audioElement.play();
        setIsPlaying(true);
      }
    };

    // Listen for user interaction event (e.g., click) to start playing audio
    document.addEventListener('click', playAudio);

    // Start rendering
    draw();

    // Cleanup function
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, [audioElement, isPlaying]);

  return <canvas ref={canvasRef} />;
};

export default SoundVisualizer;
