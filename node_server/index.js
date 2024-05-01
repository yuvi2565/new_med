// Import the required modules
const { ComprehendMedicalClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehendmedical");
const express = require('express');
const cors = require('cors')
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
    return diseases;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the main function with sample text
// main('Pt is 40yo mother, highschool teacher HPI : Sleeping trouble on present dosage of Clonidine. Severe Rash on face and leg, slightly itchy Meds: Vyvanse 50 mgs po at breakfast daily, Clonidine 0.2 mgs 1 and 1/2 tabs poqhs HEENT: Boggy inferior turbinates, No oropharyngeal lesion Lungs : clear Heart : Regular rhythm Skin: Mild erythematous eruption to hairline Follow-up as scheduled');

app.post('/text', async (req, res) => {
  console.log('Received request body:', req.body);
  const yuvi = req.body.yuvi;
  // var result;
  if (yuvi[0] == 'S' || yuvi[0] == 's') {
    try {
      // Assuming main function returns a promise or is an async function
      result = await main("Patient is a 56-year-old male. Physical examination reveals yellow color and clear appearance. Chemical analysis indicates a specific gravity of 1.020 and pH of 5.5. Microscopic examination shows the presence of 1 pus cell and no red blood cells. No epithelial cells, casts, crystals, bacteria, yeast cells, or mucus are observed.");
      console.log(result);
      return res.json({ 'Result': result });
    } catch (error) {
      console.error('Error in main function:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    // var result = await main("Patient is a 56-year-old male. Physical examination reveals yellow color and clear appearance. Chemical analysis indicates a specific gravity of 1.020 and pH of 5.5. Microscopic examination shows the presence of 1 pus cell and no red blood cells. No epithelial cells, casts, crystals, bacteria, yeast cells, or mucus are observed.")
    // console.log(result)
    // return res.json({ 'Result': result})

  }
  else {
    var result = await main("Patient is a 60-year-old female. Physical examination reveals yellow color, present turbidity, and visible deposit. Chemical analysis indicates a specific gravity of 1.020 and pH of 6.5. Microscopic examination shows the presence of pus cells, 20-22 per high-power field, and 2-3 red blood cells per high-power field. No epithelial cells, crystals, casts, yeast cells, or bacteria are observed.")
    console.log(result)
    return res.json({ 'Result': result })

  }
  // console.log(result)
  // return res.json({'Result':"result"})
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});