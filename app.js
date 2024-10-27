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
    // Function to display sensors
    function displaySensors(sensors) {
      const sensorList = document.getElementById('sensor-list');
      sensorList.innerHTML = '';  // Clear list before rendering new data

      sensors.forEach(sensor => {
        const sensorDiv = document.createElement('div');
        sensorDiv.innerHTML = `
          <p>${sensor.type}: ${sensor.value} (${sensor.timestamp})</p>
          <button class="edit-btn" data-id="${sensor.id}">Edit</button>
          <button class="delete-btn" data-id="${sensor.id}">Delete</button>
        `;
        sensorList.appendChild(sensorDiv);
      });
    }

})