import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div
      className="w-full grid grid-cols-[100px_.5fr_minmax(auto,.5fr)_minmax(auto,150px)]
    max-md:grid-cols-[100px_auto_minmax(auto,.75fr)_auto] items-center bg-white"
    >
      <div className="">
        <Link to="/">
          <img
            className=" h-16"
            src="https://images.indianexpress.com/2021/01/myntra.png"
            alt=""
          />
        </Link>
      </div>
      <div className="">
        <div className="flex justify-evenly  max-md:hidden px-8">
          <div className="">
            <Link to="/shop/Men">Men</Link>
          </div>
          <div className="">
            <Link to="/shop/Women">Women</Link>
          </div>
          <div className="">
            <Link to="/shop/Child">Child</Link>
          </div>
          <div className="">
            <Link to="/shop/Beauty">Beauty</Link>
          </div>
        </div>
        <div className="md:hidden">Hel</div>
      </div>
      <div className="px-8">
        <input
          className="border border-black rounded-md bg-gray-300 w-full"
          type="text"
        />
      </div>
      <div className="">
        <div className="flex justify-evenly max-md:hidden gap-2">
          <div className="flex flex-col items-center">
            <Link to="Profile">
              <svg
                className="text-5xl"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="0.4"
                    d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="0.34"
                    d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>

              <p className=" leading-3 text-center text-[0.7rem]  font-semibold">
                profile
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/Wishlist">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#000000"
                    strokeWidth="0.648"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </Link>
            <p className=" leading-3 text-center text-[0.7rem] font-semibold">
              wishlist
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/Cart">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                    stroke="#000000"
                    strokeWidth="1.368"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <p className=" leading-3 text-center text-[0.7rem] font-semibold">
                cart
              </p>
            </Link>
          </div>
        </div>
        <div className="md:hidden">s</div>
      </div>
    </div>
  );
}

export default Header;
