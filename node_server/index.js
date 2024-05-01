// Import the required modules
const { ComprehendMedicalClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehendmedical");
const express = require('express');
const cors=require('cors')
const app = express();
const port = 3000; 

app.use(cors())
app.use(express.json());
require("dotenv").config();

// Initialize the ComprehendMedical client
const comprehendmedical = new ComprehendMedicalClient({ region: process.env['AWS_REGION'] });

async function getDetails(text) {
  // Create parameters for detect entities command
  const params = {
    Text: text
  };

  try {
    // Call the detect entities command
    const data = await comprehendmedical.send(new DetectEntitiesCommand(params));

    console.log("Success", data);
    // Extract medical conditions from the response
    const diseases = data.Entities.filter(entity => entity.Category === "MEDICAL_CONDITION").map(entity => entity.Text);

    return "Identified diseases are: " + diseases.join(", ");
  } catch (error) {
    console.error("Error detecting entities:", error);
    throw error;
  }
}

async function main(text) {
  try {
    // Get the identified diseases
    const diseases = await getDetails(text);
    console.log("Getting diseases...\n");
    console.log(diseases);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the main function with sample text
// main('Pt is 40yo mother, highschool teacher HPI : Sleeping trouble on present dosage of Clonidine. Severe Rash on face and leg, slightly itchy Meds: Vyvanse 50 mgs po at breakfast daily, Clonidine 0.2 mgs 1 and 1/2 tabs poqhs HEENT: Boggy inferior turbinates, No oropharyngeal lesion Lungs : clear Heart : Regular rhythm Skin: Mild erythematous eruption to hairline Follow-up as scheduled');

app.post('/text', (req, res) => {    
    console.log('Received request body:', req.body);
    const yuvi = req.body.yuvi;
    let result = main(yuvi)
    return res.json({result})
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});