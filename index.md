# Sensor Data Logger(index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sensor Data Management</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Sensor Data</h1>

  <!-- Sensor Form -->
  <form id="sensor-form">
    <label for="sensor-type">Sensor Type:</label>
    <input type="text" id="sensor-type" required>

    <label for="sensor-value">Sensor Value:</label>
    <input type="number" id="sensor-value" required>

    <button type="submit">Save Sensor Data</button>
  </form>

  <!-- Sort Options -->
  <div id="sort-options">
    <label for="sort-by">Sort By:</label>
    <select id="sort-by">
      <option value="timestamp">Timestamp</option>
      <option value="value">Value</option>
    </select>
  </div>

  <!-- Display Sensors -->
  <div id="sensor-list"></div>

  <script src="app.js"></script>
</body>
</html>

