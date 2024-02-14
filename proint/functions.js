import fs from 'fs';

function appendToJsonArray(newObject) {
  const filePath = 'output.json';

  try {
    let jsonArray;

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Read the JSON data from file
      jsonArray = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } else {
      // Initialize an empty array if the file doesn't exist
      jsonArray = [];
    }

    // Append new object to the array
    jsonArray.push(newObject);

    // Write the updated array back to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonArray, null, 2));

    console.log('Object appended to JSON array successfully.');
  } catch (error) {
    console.error('Error appending object to JSON array:', error);
  }
}
export { appendToJsonArray }