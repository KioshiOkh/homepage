import React from "react";
import {Link} from "react-router-dom"

const Impressum = () => {
  return (
    <div className="font-normal text-white ">
      <h1>Impressum</h1>
      <p className="text-[12px]">
        Responsible for the content according to § 5 TMG (Telemediengesetz):
      </p>
      <br/>
      <p className="font-semibold">
        Paul A. Buchwald
        <br />
        Email: <a href="mailto:info@paulokh.com" className="hover:text-secondary ">info@paulokh.com</a>
        <br />
        Website: <Link to="/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline">www.paulokh.com</Link>
        <br />
      </p>
      <br />
      <div className="leading-7 sm:w-[500px] md:w-[700px]">
        <p className=" first-line:underline">
          Disclaimer:
          <br />
          This is a personal website created by Paul A. Buchwald. The content
          provided on this website is for informational purposes only. Paul A.
          Buchwald assumes no responsibility for errors or omissions in the
          contents of this website. In no event shall Paul A. Buchwald be liable
          for any special, direct, indirect, consequential, or incidental
          damages or any damages whatsoever, whether in an action of contract,
          negligence or other tort, arising out of or in connection with the use
          of the website or the contents of the website. Paul A. Buchwald
          reserves the right to make additions, deletions, or modification to
          the contents on the website at any time without prior notice. Paul A.
          Buchwald does not warrant that the website is free of viruses or other
          harmful components.
        </p>
        <br/>
        <p>
          The website may contain links to external websites that are not
          provided or maintained by or in any way affiliated with Paul A.
          Buchwald. Please note that Paul A. Buchwald does not guarantee the
          accuracy, relevance, timeliness, or completeness of any information on
          these external websites.
        </p>
        <p>
          Please note that this Impressum only applies to this website. If you
          have any questions or concerns about this Impressum, please contact
          Paul A. Buchwald at the contact information provided above.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
