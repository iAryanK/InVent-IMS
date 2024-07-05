import { ArrowDownToLine } from "lucide-react";
import React from "react";

type Props = {};

const StepGuide = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-5">
      <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-center select-none tracking-wide">
        How to Use ?
      </h2>

      <div className="flex items-center justify-center mt-10">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 font-bold">
              1
            </span>
            <h3 className="flex items-center mb-1 text-xl sm:text-2xl font-semibold">
              LogIn on Web Or Download the App{" "}
              <span className="bg-blue-100 text-blue-800 text-sm sm:text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 hidden sm:flex">
                App Recommended
              </span>
            </h3>
            <time className="block mb-2 text-sm sm:text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              Login with your Google Account
            </time>
            <p className="mb-4 text-base sm:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              Allow the app to access your google drive so that all your data
              can be stored right in your drive.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-lg gap-1 tracking-wide font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <ArrowDownToLine size={18} />
              Download App
            </a>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 font-bold">
              2
            </span>
            <h3 className="mb-1 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Create a Database
            </h3>
            <time className="block mb-2 text-sm sm:text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              Home screen allows you to create your database
            </time>
            <p className="text-base sm:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              The database is stored in the form of sheets in your google drive.
              You can create as well as manage your data in your drive in an
              organized manner from the IMS.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 font-bold">
              3
            </span>
            <h3 className="mb-1 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Grant Access to Users
            </h3>
            <time className="block mb-2 text-sm sm:text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
              Share your data on IMS with others, securely
            </time>
            <p className="text-base sm:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              You can give Admin or User level access to your database. Where
              admin has all the rights to read and write into the database, a
              user can only view limited data.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default StepGuide;
