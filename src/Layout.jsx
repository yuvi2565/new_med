import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { RussianRuble } from "lucide-react";
import { data } from "autoprefixer";
function Layout() {
  const [file, setFile] = useState(null);
  const [brainfile, setbrainFile] = useState(null);
  const [pneumonia, setpneumonia] = useState(null);
  const [Data, setData] = useState({});
  // const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    pregnancies: 3.845052,
    glucose: 120.894531,
    bloodPressure: 69.105469,
    skinThickness: 20.536458,
    insulin: 79.799479,
    bmi: 31.992578,
    dpf: 0.471876,
    age: 33.240885,
    file: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let roundedValue = value;

    // Round numeric values to the nearest integer, excluding BMI field
    if (
      name !== "bmi" &&
      name !== "name" &&
      name !== "email" &&
      name !== "gender" &&
      !isNaN(value) &&
      value !== ""
    ) {
      roundedValue = Math.round(parseFloat(value));
    }

    setFormData({
      ...formData,
      [name]: roundedValue,
    });
    // console.log(formData);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFormData({
      ...formData,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let my_data = 0;

    if (file) {
      console.log("OKAYYY");
      let yuvi;
      try {
        yuvi = await extractText(file);
        // console.log(yuvi);
      } catch (error) {
        console.error("Error extracting text:", error.message);
        return;
      }

      try {
        console.log({ yuvi });
        const response = await fetch("http://localhost:3000/text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ yuvi: yuvi }),
        });

        if (response.ok) {
          // Handle response from backend if needed
          const responseData = await response.json();
          console.log("Response from backend:", responseData);
        } else {
          console.error("Failed to send data to backend");
        }
      } catch (error) {
        console.error("Error sending data to backend:", error.message);
      }
    } else {
      // try {
      //   console.log("sending data");
      //   console.log(formData);
      //   const response = await fetch("http://127.0.0.1:5000/", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log("Received data from backend:", data);
      //     // Display an alert with the received data
      //     my_data = JSON.stringify(data);
      //     my_data *= 100;
      //     my_data = Math.floor(my_data);
      //     if (my_data <= 25) {
      //       alert(
      //         "Percentage of you having diabetes is : " +
      //         my_data +
      //         "% \n Maintain a healthy lifestyle by incorporating regular exercise and a balanced diet rich in fruits, vegetables, and whole grains. Schedule regular check-ups with your healthcare provider to monitor your health status and discuss any concerns or changes in symptoms."
      //       );
      //     } else if (my_data > 25 && my_data <= 50) {
      //       alert(
      //         "Percentage of you having diabetes is : " +
      //         my_data +
      //         "% \n Increase awareness about diabetes symptoms and risk factors. Consider lifestyle modifications such as weight loss (if overweight), reducing sugar intake, and avoiding sedentary behaviors. Consult with a healthcare professional for personalized advice and screening tests."
      //       );
      //     } else if (my_data > 50 && my_data <= 75) {
      //       alert(
      //         "Percentage of you having diabetes is : " +
      //         my_data +
      //         "% \n Take proactive steps to manage and reduce risk factors associated with diabetes, such as controlling blood sugar levels, maintaining a healthy weight, and managing stress.Monitor blood glucose levels regularly, especially if there's a family history of diabetes or other risk factors present.Discuss with a healthcare provider about starting preventive measures or medications to lower the risk of developing diabetes."
      //       );
      //     } else {
      //       alert(
      //         "Percentage of you having diabetes is : " +
      //         my_data +
      //         "% \n Prioritize comprehensive diabetes prevention strategies, including close monitoring of blood sugar levels, adherence to a diabetic-friendly diet, regular exercise, and weight management.Work closely with healthcare professionals, including endocrinologists, dietitians, and diabetes educators, to develop a personalized management plan.Consider genetic counseling to understand the hereditary risk factors and potential preventive measures."
      //       );
      //     }
      //   } else {
      //     console.error("Failed to send form data");
      //   }
      // } catch (error) {
      //   console.error("Error sending form data:", error);
      // }
    }
  };

  const handlePneumo = async function (e) {
    console.log("running pneu");
    await setpneumonia(e.target.files[0]);
    console.log(pneumonia);

    console.log("Pneumo");
    const formData = await new FormData();
    await formData.append("image", pneumonia);
    try {
      const response = await fetch("http://127.0.0.1:5000/pneumo", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data1 = await response.json();

        const resultent = data1.Result;
        let finalreport;
        if (resultent >= 0 && resultent <= 25) {
          finalreport =
            "Practice good hygiene by washing hands regularly with soap and water, especially before eating and after coughing or sneezing.Avoid close contact with individuals who are sick, and maintain a healthy distance from anyone exhibiting symptoms of respiratory illness.Stay up to date with vaccinations, including the pneumonia vaccine if recommended by your healthcare provider.";
        } else if (resultent >= 26 && resultent <= 50) {
          finalreport =
            "Be vigilant for symptoms of pneumonia such as persistent cough, fever, difficulty breathing, chest pain, and fatigue.Seek medical attention promptly if you experience symptoms suggestive of pneumonia, especially if you are in a high-risk group such as the elderly or those with chronic health conditions.";
        } else if (resultent >= 51 && resultent <= 75) {
          finalreport =
            "Follow through with medical evaluation and diagnostic tests as recommended by healthcare professionals if pneumonia symptoms persist or worsen.Adhere to prescribed treatment plans, which may include antibiotics, rest, plenty of fluids, and over-the-counter medications for symptom relief.";
        } else {
          finalreport =
            "Seek immediate medical attention if symptoms of pneumonia become severe, such as high fever, rapid breathing, confusion, or bluish skin color.Hospitalization may be necessary for intensive treatment, especially for individuals with compromised immune systems or underlying health conditions.Follow post-treatment care instructions provided by healthcare professionals to support recovery and prevent complications.";
        }
        console.log(finalreport);
        await setData({
          prob: resultent,
          content: finalreport,
        });
        console.log("Response from server:", data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleBrain = async (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setbrainFile(e.target.files[0]);
    if (brainfile != null) {
      const formData = new FormData();
      formData.append("image", brainfile);
      try {
        const response = await fetch("http://127.0.0.1:5000/brain", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data2 = await response.json();
          setData(data2);
          const resultent = data2.Result;
          let finalreport;
          if (resultent >= 0 && resultent <= 25) {
            finalreport =
              "Maintain a healthy lifestyle with regular exercise and a balanced diet.Stay mentally active by engaging in stimulating activities like reading, puzzles, or learning new skills. Prioritize regular check-ups with your healthcare provider to monitor your overall health";
          } else if (resultent >= 26 && resultent <= 50) {
            finalreport =
              "Increase vigilance for any unusual symptoms such as persistent headaches, changes in vision, seizures, or cognitive difficulties.Keep a journal to track any symptoms and their frequency or severity.Discuss your concerns with a healthcare professional and consider scheduling a brain imaging scan for further evaluation.";
          } else if (resultent >= 51 && resultent <= 75) {
            finalreport =
              "Seek prompt medical attention if you experience any concerning symptoms, without delay.Follow through with recommended diagnostic tests and imaging studies as advised by healthcare professionals.Consider consulting with specialists such as neurologists or neurosurgeons for specialized evaluation and management.";
          } else {
            finalreport =
              "Immediately consult with a neurologist or neurosurgeon for a comprehensive evaluation and treatment plan.Prepare emotionally and practically for potential treatment options, which may include surgery, radiation therapy, or chemotherapy.Engage in a strong support network of family and friends to help navigate through diagnosis, treatment, and recovery processes.";
          }
          console.log("before final report");
          console.log(finalreport);
          setData({
            prob: Math.round(resultent * 100) / 100,
            content: finalreport,
          });
          console.log("Response from server:", data2);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const allHooks = [
    file, //0
    setFile, //1
    brainfile, //2
    setbrainFile, //3
    pneumonia, //4
    setpneumonia, //5
    handleBrain, //6
    handlePneumo, //7
    handleFileChange, //8
    handleInputChange, //9
    handleSubmit, //10
    formData, //11
    setFormData, //12
    Data, //13
    setData, //14
  ];
  return (
    <>
      <Navbar />

      <Outlet context={[allHooks]} />
      <Footer />
    </>
  );
}

export default Layout;
