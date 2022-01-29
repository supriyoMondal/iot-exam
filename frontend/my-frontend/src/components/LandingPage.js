import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Connector } from 'mqtt-react-hooks'

// const mqtt = require('mqtt')

function handleStart() {
  // Calling the api to start the sensor
  fetch('http://localhost:4000/start', {
    method: 'POST',
  });
}

// Called when trying to stop the sensor
function handleStop() {
  // Calling the api to stop the sensor
  fetch('http://localhost:4000/stop', {
    method: 'POST',
  });
}

// Creating the landing page
export default function LandingPage() {
  const [isLedOn, setIsLedOn] = useState(false);
  const [isSensorOn, setIsSensorOn] = useState(false);

  const fetchLedStatus = () => {
    axios
      .get('http://localhost:8000/status')
      .then((res) => {
        console.log({ res: res.data });
        setIsLedOn(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLedStatus();
    setInterval(() => {
      fetchLedStatus();
    }, 5 * 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
        }}
      >
        {'Temperature Sensor and Graph \n LED Switch'}
      </h1>

      <div>
        <button
          onClick={() => {
            setIsSensorOn(true);
            handleStart();
          }}
        >
          Start
        </button>

        <button
          onClick={() => {
            setIsSensorOn(false);
            handleStop();
          }}
        >
          Stop
        </button>
      </div>

      {isLedOn ? (
        <h1 style={{ color: 'white' }}>LED ON</h1>
      ) : (
        <h1 style={{ color: 'white' }}>LED OFF</h1>
      )}
    </div>
  );
}
