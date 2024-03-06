/* eslint-disable react/prop-types */
import getImageUrl from "../utils/imageGet";
import { Link } from "react-router-dom";

function DropdownMobile(props) {
  return (
    <div id="dropdownMobile" className="w-screen font-mulish lg:hidden">
      <div
        className="fixed left-0 top-0  w-screen h-screen pt-4 px-5
            md:px-11 lg:px-11 bg-light"
      >
        <div className="mb-5 flex justify-between">
          <img
            src={getImageUrl("Cinematix", "svg")}
            alt="logo"
            className="w-20 h-10 md:w-28 md:h-14"
          />
          <button className="lg:hidden" onClick={() => props.isClick()}>
            <img
              src={getImageUrl("close-dark", "svg")}
              alt="x"
              className="w-6 h-6"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-y-2 w-full text-center">
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">Home</Link>
          </li>
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">Movie</Link>
          </li>
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">SignIn</Link>
          </li>
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMobile;
