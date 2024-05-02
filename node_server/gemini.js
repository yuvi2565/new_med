const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require('axios');
const fetch = require('node-fetch');
// import fetch from 'node-fetch';
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Patient is a 56-year-old male. Physical examination reveals yellow color and clear appearance. Chemical analysis indicates a specific gravity of 1.020 and pH of 5.5. Microscopic examination shows the presence of 1 pus cell and no red blood cells. No epithelial cells, casts, crystals, bacteria, yeast cells, or mucus are observed.";

  const result = await model.generateContent(prompt);
  const response = await result.response;

  // Use fetch from axios to extract text
  const text = response.fetch().text();
  console.log(text);
}

run();
