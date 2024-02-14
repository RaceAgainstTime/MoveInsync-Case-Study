import { MongoClient } from 'mongodb';
import fs from 'fs';

async function pushDataToDatabase() {
  console.log("sending request to mongodb..")
  const jsonData = fs.readFileSync('output.json', 'utf8');
const data = JSON.parse(jsonData);
  const mongoClient = new MongoClient("mongodb+srv://Divyansh-Chhabra:OaYviKce7VZxxz1z@employees.ggbd4rb.mongodb.net/?retryWrites=true&w=majority");

  try {
    await mongoClient.connect();
    const database = mongoClient.db("Profile_information"); 
    const collection = database.collection("Employee_Profile");

    await collection.insertMany(data);

    console.log("Data has been successfully pushed to the database.");
  } catch (error) {
    console.error("Error occurred while pushing data to the database:", error);
  } finally {
    await mongoClient.close();
  }
}


export {pushDataToDatabase}