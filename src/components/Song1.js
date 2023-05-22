import React, { useEffect } from "react";
import '../App.css';
import AnimatedRoutes from "./AnimatedRoutes";

export default function Song1() {
  useEffect(() => {
    const audio1 = new Audio('/audio/FL-Voice1.mp3');
    const button1 = document.getElementById('button1');
    button1.addEventListener('click', function() {
      audio1.play().catch(error => {
        console.log('Error playing audio:', error.message);
      });
    });

    const audio2 = new Audio('/audio/FL-Voice2.mp3');
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {
      audio2.play().catch(error => {
        console.log('Error playing audio:', error.message);
      });
    });
  }, []);

  return (
    <AnimatedRoutes>

    <div class="song1-container">
      <div class="buttonDiv">
        <button id="button1" className="button1">Flashing</button>
        <button id="button2" className="button2">Lights</button>
      {/* </div> */}
      {/* <div className="playerDiv"> */}
        <audio controls>
          <source src="/audio/FL-Instrumental.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
    </AnimatedRoutes>

  );
}
