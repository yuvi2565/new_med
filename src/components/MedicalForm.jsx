import React, { useState } from "react";
import "../App.css";
import extractText from "../Tessdata/script.cjs";

function MedicalForm() {
 
 
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
              className=" bg-black text-white  rounded-md border-0 py-1.5 px-2 text-center mt-5  "
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MedicalForm;
