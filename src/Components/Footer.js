import React from "react";
import Logo from "../Assets/4RF logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#F9F9F6] px-10">
      <div className="flex flex-col mx-auto py-28 max-w-7xl">
        <div className="flex flex-row flex-wrap justify-between w-full gap-4 py-10 border-t-2 xxs:max-at622:gap-9 xxs:max-at622:justify-center">
          <div className="max-w-[150px] max-h-16">
            <img className="object-cover w-full h-full" src={Logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-4 xxs:max-at622:items-center xxs:max-at622:w-full">
            <h1 className="text-lg font-semibold text-gray-600 font-Titillium xxs:max-at460:text-center">
              Partners
            </h1>
            <div className="flex flex-col items-center gap-2 at622:items-start">
              <a
                className="text-base font-normal font-Titillium"
                href="https://pravin223047.github.io/purplerock/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                PurpleRock
              </a>
              <a
                className="text-base font-normal font-Titillium"
                href="https://www.domainmarket.com/buynow/federalpreserve.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                FederalPreserve.com
              </a>
              <a
                className="text-base font-normal font-Titillium"
                href="https://en.unicorn.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unicorn.org
              </a>
              <a
                className="text-base font-normal font-Titillium"
                href="https://dia.wiki/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Decentralized Intelligence Agency
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 xxs:max-at622:items-center">
            <h1 className="text-lg font-semibold text-gray-600 font-Titillium">
              Get News From Us
            </h1>
            <div>
              <input
                className="py-4 pl-2 pr-5 text-base font-normal font-Titillium focus:outline-none xxs:max-at622:placeholder:text-center"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap-reverse justify-center gap-20 at622:flex-wrap xxs:max-at622:gap-2 at622:justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="text-xs font-Titillium ">
              @2023 Fourth Revolution Fund.{"  "}All Rights Reserved
            </p>
          </div>

          <div className="flex gap-2">
            <p className="text-base font-Titillium">Get In Touch: </p>
            <a
              className="text-base font-Titillium"
              href="mailto:Partnerships@FourthRevolutionFund.com"
            >
              Partnerships@FourthRevolutionFund.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
