import React, { useState } from "react";
import "../App.css";
import extractText from "../Tessdata/script.cjs";

function MedicalForm() {
  const [file, setFile] = useState(null);
  const [brainfile, setbrainFile] = useState(null);
  const[pneumonia,setpneumonia] = useState(null);

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
    file: null
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
  const handlePeumo =(e) =>{
    setpneumonia(e.target.files[0]);  
  }
  const handleBrain = (e) => {
    setbrainFile(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let my_data = 0;
    // if(pneumonia != null){
    //   console.log("Pneumo")
    //   const formData = new FormData();
    //   formData.append('image', pneumonia);
    //   try {        
    //     const response = await fetch('http://127.0.0.1:5000/pneumo', {
    //       method: 'POST',
    //       body: formData,
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log('Response from server:', data);
    //     } else {
    //       console.error('Error:', response.status);
    //     }
    //   }
    //   catch (error) {
    //     console.error('Error uploading image:', error);
    //   }
    // }
    // if (brainfile != null) {
    //   console.log("BRAIN");
    //   const formData = new FormData();
    //   formData.append('image', brainfile);
    //   try {
    //     const response = await fetch('http://127.0.0.1:5000/brain', {
    //       method: 'POST',
    //       body: formData,
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log('Response from server:', data);
    //     } else {
    //       console.error('Error:', response.status);
    //     }
    //   }
    //   catch (error) {
    //     console.error('Error uploading image:', error);
    //   }
    // }

    if (file) {
      console.log("OKAYYY");
      let yuvi;
      try {
        yuvi = await extractText(file);
        // console.log(yuvi);
      } catch (error) {
        console.error('Error extracting text:', error.message);
        return;
      }

      try {
        console.log({yuvi});
        const response = await fetch('http://localhost:3000/text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ yuvi: yuvi })
        });

        if (response.ok) {
          // Handle response from backend if needed
          const responseData = await response.json();
          console.log('Response from backend:', responseData);
        } else {
          console.error('Failed to send data to backend');
        }
      } catch (error) {
        console.error('Error sending data to backend:', error.message);
      }
    }
    else {
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

  return (
    <div class="container">
      <form class="medical-form ">
        <div className="border-b pb-12 ">
          <h1 className="text-center font-bold leading-7 text-black">
            Medical Report Summariser
          </h1>
          <p className="mt-1 text-center leading-6 text-gray-600">
            Enter details from the report
          </p>

          <div className="mt-10 grid grid-cols-10 gap-x-6 gap-y-8 sm:grid-cols-4 ">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleInputChange}
                  autocomplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autocomplete="country-name"
                  required
                  onChange={handleInputChange}
                  defaultValue={"Choose"}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label
                htmlFor="pregnancies"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pregnancies:
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="pregnancies"
                  name="pregnancies"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="glucose"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Glucose level : (in mg/dL)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  id="glucose"
                  name="glucose"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bloodPressure"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Blood Pressure: (in mm Hg)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  id="bloodPressure"
                  name="bloodPressure"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="skinThickness"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Skin Thickness: (in mm)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  id="skinThickness"
                  name="skinThickness"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="insulin"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Insulin: (in IU/ml)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  id="insulin"
                  name="insulin"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bmi"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                BMI:
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  step="0.01"
                  id="bmi"
                  name="bmi"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age: (in years)
              </label>
              <div class="mt-2">
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 self-center">
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload Medical Report:
              </label>
              <div class="mt-2">
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                  onChange={handleFileChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload Brain Tumor Report Here:
              </label>
              <div class="mt-2">
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                  onChange={handleBrain}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload Pneumonia Report Here:
              </label>
              <div class="mt-2">
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                  onChange={handlePeumo}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="submit-btn">
            <button
              type="submit"
              className=" bg-black text-white  rounded-md border-0 py-1.5 px-2 text-center mt-5  " onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MedicalForm;