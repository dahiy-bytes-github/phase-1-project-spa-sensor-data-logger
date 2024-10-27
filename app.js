document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sensor-form');
  const sortBy = document.getElementById('sort-by');

  // Fetch and display all sensors
  function fetchAndDisplaySensors(sort = 'timestamp') {
    fetch('http://localhost:3000/sensorReadings')
      .then(response => response.json())
      .then(sensors => {
        // Sort sensors based on the selected criteria
        sensors.sort((a, b) => {
          if (sort === 'timestamp') {
            return new Date(b.timestamp) - new Date(a.timestamp);
          } else if (sort === 'value') {
            return b.value - a.value;
          }
        });
        displaySensors(sensors);
      });
  }
})