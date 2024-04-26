import React from "react";
import { Link } from "react-router-dom";

const Privacy_Policy = () => {
  return (
    <div className="font-normal text-white">
      <h1 className=" font-bold mt-2" >Privacy Policy</h1>
      <br />
      <p className="leading-6">
        At Paul/Kioshi Hompage, accessible from{" "}
        <Link
          to="/"
          target="_blank"
          rel="noopener "
          className="hover:text-secondary font-semibold"
        >
          www.paulokh.de
        </Link>
        <span className="hover:text-secondary font-semibold">
          {" "}
          <Link to="https://paulokh.com" target="_blank" rel="noopener noreferrer">{"[.com "}</Link> / <Link to="https://paulokh.org" target="_blank" rel="noopener noreferrer"> {" .org]"}</Link>
        </span>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by paulokh.com and how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>
      <h2 className=" font-bold underline mb-2 mt-2">Log Files</h2>
      <p className="leading-6">
        These files log visitors when they visit websites. All hosting companies
        do this and are a part of hosting services' normal analytics. The
        information collected by log files include internet protocol {"(IP)"}{" "}
        addresses, browser type, Internet Service Provider {"(ISP)"}, date and
        time stamp, referring/exit pages, and possibly the number of clicks.
        These are not linked to any personally identifiable information. The
        purpose of the information is for analyzing trends, administering the
        site, tracking users' movement on the website, and gathering demographic
        information.
      </p>
      <h2 className=" font-bold underline mb-2 mt-2">Cookies and Web Beacons</h2>
      <p className="leading-6">
        Like any other website, Paul/Kioshi Hompage uses 'cookies'. These are
        used to store information including visitors' preferences, and the
        pagesthat the visitor accessed or visited. The information is used to
        optimize the users' experience by customizing our web page content based
        on visitors' browser type and/or other information.
      </p>
      <h2 className=" font-bold underline mb-2 mt-2">Online Privacy Policy Only</h2>
      <p className="leading-6">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Paul/Kioshi Hompage. This policy is not
        applicable to any information collected offline or via channels other
        than this website.
      </p>
      <h2 className=" font-bold underline mb-2 mt-2">Consent</h2>
      <p className="leading-6">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
      <h2 className=" font-bold underline mb-2 mt-2">Update</h2>
      <p className="leading-6">
        Should we update, amend or make any changes to our Privacy Policy, those
        changes will be posted here. 
      </p>
      <p><span className=" ml-10 mt-5 font-bold italic"> • 24.04.2024</span></p>
    </div>
  );
};

export default Privacy_Policy;
