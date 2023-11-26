import React from 'react'
import Logo from '../Assets/4RF logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="box-border fixed z-50 flex w-screen py-2 space-x-40 at1030:px-8 xl:space-x-80 backdrop-blur-3xl">
      <div className="at1030:max-w-[250px] max-w-[150px] max-h-16 at1030:max-h-20">
        <Link to="/">
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center gap-x-8">
        {/* <Link
          className="pb-1 text-base font-semibold tracking-wider text-blue-500 link font-Titillium"
          to="/"
        >
          Home
        </Link> */}
        {/* <Link
          className="pb-1 text-base font-semibold tracking-wider text-blue-500 link font-Titillium"
          to="/insight"
        >
          Insight
        </Link>
        <Link
          className="pb-1 text-base font-semibold tracking-wider text-blue-500 link font-Titillium"
          to="/future"
        >
          Future Vision
        </Link>
        <Link
          className="pb-1 text-base font-semibold tracking-wider text-blue-500 link font-Titillium"
          to="/history"
        >
          Revolution History
        </Link>
        <Link
          className="pb-1 text-base font-semibold tracking-wider text-blue-500 link font-Titillium"
          to="/revolution"
        >
          4th Revolution
        </Link> */}
      </div>
    </div>
  );
}

export default Header