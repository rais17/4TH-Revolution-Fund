import React from "react";

const GetInTouch = () => {
  return (
    <div className="relative flex items-center w-full h-[85vh] bg-center bg-cover bg-no-repeat bg-pattern">

      <div className="flex flex-col w-full px-4 sm:px-20 lg:pl-20 lg:w-1/2 gap-y-4">
        <h1 className="text-6xl font-normal text-gray-300 font-Titillium">
          Join The Revolution
        </h1>
        <p className="mt-4 text-xl font-normal text-gray-300 font-Titillium">
          Ready to engage with the Fourth Revolution Fund ? <br className="xxs:max-at602:hidden" /> Share your
          email here, and we'll reach out to you. We're
          excited to hear from you and explore possibilities together. Your
          input is crucial in shaping a future driven by innovation and
          collaboration.
          <br />
        </p>
        <span className="text-xl font-normal text-gray-300 font-Titillium">
          Let's start the conversation!
        </span>
        <div className="flex w-full">
          <input
            className="w-full sm:w-1/2 pl-2 py-2  font-Titillium text-base font-normal placeholder:text-[#000000] focus:outline-none"
            type="text"
            placeholder="Drop your email"
          />
          <button className="px-10 py-2 text-lg font-medium text-gray-300 border border-emerald-900 font-Titillium bg-emerald-900">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
