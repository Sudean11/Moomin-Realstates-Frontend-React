/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <img src="moomin.jpg" className="rounded-full w-6 h-6" />
              <h1 className="hidden md:block">Moomin Homes</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Get new updates on the houses available in the market
              </p>
              <div className="gap-5 my-6 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>

              <li className="my-3 text-muted">
                <a href="#">Terms of use</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact support</a>
              </li>

            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>

              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="my-3 flex items-center">
              <input
                type="text"
                className="px-4 py-2 card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark mr-2"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary px-4">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Created By <span className="text-primary">Moomin Homes</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
