import Diabetes from "../assets/Diabetes.png";
import tumor from "../assets/tumor.png";
import pneumonia from "../assets/pneumonia.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import extractText from "../Tessdata/script.cjs";
import urine from "../assets/urine.png";
export default function Services() {
  const [allHooks] = useOutletContext();
  const handlePneumoFunction = allHooks[7];
  const handleBrainFunction = allHooks[6];
  const handleDiabetesFunction = console.log(allHooks);
  const file = allHooks[0];
  const setFile = allHooks[1];
  const data = allHooks[13];
  const setData = allHooks[14];
  return (
    <div className="bg-white py-20">
      <div
        className="mx-auto w-7xl
       "
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Supported Diseases
          </h2> */}
          <p className="mt-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Currently supported diseases
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're committed to empowering you with clear explanations of your
            medical reports. We currently offer in-depth analysis for two
            prevalent conditions:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-3 lg:gap-y-12">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <img
                    src={tumor}
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </div>
                Brain Tumor
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We understand brain tumor reports can be daunting. Our analysis
                breaks down complex medical terms and explains findings related
                to potential tumor presence, location, and type.
              </dd>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <label
                  htmlFor="brain-tumor"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Upload Report
                  <input
                    type="file"
                    id="brain-tumor"
                    name="brain-tumor"
                    accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                    onChange={handleBrainFunction}
                  />
                </label>
                <NavLink
                  to="/results"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Result
                </NavLink>
              </div>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <img
                    src={pneumonia}
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </div>
                Pneumonia
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                MedInsight analyzes your report for signs and symptoms
                suggestive of pneumonia, including chest X-ray findings, white
                blood cell count, and other relevant data. Upload report for
                detailed analysis.
              </dd>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <label
                  htmlFor="pneumonia"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Upload Report
                  <input
                    type="file"
                    id="pneumonia"
                    name="pneumonia"
                    accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                    onChange={handlePneumoFunction}
                  />
                </label>
                <NavLink
                  to="/results"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Result
                </NavLink>
              </div>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <img
                    src={Diabetes}
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </div>
                Diabetes
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Managing diabetes often involves interpreting blood sugar levels
                and other test results. MedInsight simplifies these reports,
                explaining key metrics and their implications.
              </dd>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <label
                  htmlFor="diabetes"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Upload Report
                  <input
                    type="file"
                    id="diabetes"
                    name="diabetes"
                    accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                    onChange={handleDiabetesFunction}
                  />
                </label>
                <NavLink
                  to="/results"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Result
                </NavLink>
              </div>
            </div>
            <div className="relative pl-16 ">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <img
                    src={urine}
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </div>
                Urine Report
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                The tool highlights potential abnormalities in your urine
                composition, like high levels of protein or white blood cells.
              </dd>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <label
                  htmlFor="Urine"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Upload Report
                  <input
                    type="file"
                    id="Urine"
                    name="Urine"
                    accept=".pdf, .doc, .docx, .webp, .jpeg, .jpg"
                    onChange={async function (e) {
                      // await setFile(e.target.files[0]);
                      const data = await extractText(e.target.files[0]);
                      console.log(data);
                      try {
                        console.log(data.Result);
                        const response = await fetch(
                          "http://localhost:3000/text",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ yuvi: data }),
                          }
                        );

                        if (response.ok) {
                          // Handle response from backend if needed
                          const responseData = await response.json();
                          console.log(responseData);
                          await setData({ content: responseData.Result });
                          console.log(
                            "Response from backend:",
                            responseData.Result
                          );
                        } else {
                          console.error("Failed to send data to backend");
                        }
                      } catch (error) {
                        console.error(
                          "Error sending data to backend:",
                          error.message
                        );
                      }
                    }}
                  />
                </label>
                <NavLink
                  to="/results"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Result
                </NavLink>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
