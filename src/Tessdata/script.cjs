import { createWorker } from "tesseract.js";
const imgPath = "./report.jpeg";
async function extractText(imageData) {
  const worker = await createWorker("eng");
  console.log(imageData);

  return await (async () => {
    const {
      data: { text },
    } = await worker.recognize(imageData);
    console.log(text);
    
    await worker.terminate();
    return text
  })();
}
export default extractText;