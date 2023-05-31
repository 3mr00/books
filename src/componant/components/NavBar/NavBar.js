import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import "./NavBar.css";
import Media from "react-media";


import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  //open or close nav mobile-v
  const [expanded, setExpaned] = useState(false);

  //navbar when scroll
  const [marginTopNav, setmarginTopNav] = useState("");
  const [boxshadow, setBoxshadow] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, [expanded]);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setmarginTopNav("-8%") : setmarginTopNav("8%");
    window.scrollY > 10
      ? setBoxshadow(
          "0 0.5rem 1rem rgb(0 0 0 / 15%), inset 0 -1px 0 rgb(0 0 0 / 15%)"
        )
      : setBoxshadow("unset");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {/* frist nav */}
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <nav
            style={{ boxShadow: expanded === true ? "none" : boxshadow }}
            className={`
            pt frist_nav flex justify-around py-8 mx-auto
             bg-white ${expanded== true ?'padding_nav_mobile':""}`
            }
          >
          <div className="flex items-center">
            <h3 className="font-bold text-2xl  text-black-500">
              <a href="/">Booksy</a>
            </h3>
          </div>
            {/* <!-- left nav section --> */}
            {matches.large && (
              <div className="items-center  space-x-8 lg:flex">
                <div className="searchBar">
                  <input
                    className="font-bold searchQueryInput xl:p-"
                    type="text"
                    name="searchQueryInput"
                    placeholder="Search by author, title, name"
                  />
                  <button
                    className=" searchQuerySubmit"
                    type="submit"
                    name="searchQuerySubmit"
                  >
                    <FiSearch />
                  </button>
                </div>
              </div>
            )}

            {/* <!-- right nav section --> */}
            <div className="right_nav  flex items-center space-x-2">
              <FiHeart />
              <a className="smGlobalBtn font-bold" href="#">
                0
              </a>
              <h3 className="font-bold text-slate-400">EN</h3>
            </div>
            <div className="icon_nav_mob" 
            onClick={() => setExpaned(!expanded)}>☰</div>
          </nav>
        )}
      </Media>

      {/* sec nav */}
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <nav
            style={{
              marginTop: matches.medium ? "none" : marginTopNav,
            }}
            className={`sec_nav flex justify-around py-0 mx-auto bg-white ${
              expanded === true ? "displayBlockSidebar" : " "
            }`}
            data-aos="fade-top"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300"
            data-aos-duration="300"
          >
            {/* <!-- left header section --> */}
            <div
              className={`gap_sec_nav font-bold items-center  lg:flex ${
                matches.medium && "mobile"
              }`}
            >
              <a className="nav_links text-slate-400" href="#">
                Home
              </a>

              <a className="nav_links text-slate-400" href="#">
                Bestseller
              </a>

              <a className="nav_links text-slate-400" href="#">
                Find a store
              </a>
              <a className="nav_links text-slate-400" href="#">
                Blog
              </a>
              {matches.medium && (
                <div className="searchBar search_mobile_padding ">
                  <input
                    className="font-bold searchQueryInput xl:p-"
                    type="text"
                    name="searchQueryInput"
                    placeholder="Search by author, title, name"
                  />
                  <button
                    className=" searchQuerySubmit"
                    type="submit"
                    name="searchQuerySubmit"
                  >
                    <FiSearch />
                  </button>
                </div>
              )}
            </div>
          </nav>
        )}
      </Media>
    </>
  );
};

export default NavBar;
