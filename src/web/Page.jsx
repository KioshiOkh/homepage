import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <div id="home">
        <Link to="/wetter">
          <button>WetterApp</button>
        </Link>
      </div>
    </>
  );
};

export default Page;
