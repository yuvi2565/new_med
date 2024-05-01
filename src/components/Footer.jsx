import { ChevronRight } from "lucide-react";
import React from "react";
import myicon from "../assets/icon.png";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="w-full mb-5 mt-5 pt-5 ">
      <hr className="mt-5 mb-5 " />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <li className="mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/team" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Goals
            </h2>
            <li className="mb-4">
              <Link to="/" className="hover:underline">
                Our Vision
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img src={myicon} height="30" width="30"></img>
          <span className="ml-4 text-lg font-bold">MedInsight</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 MedInsight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
