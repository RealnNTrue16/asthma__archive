import "./Home.css";
import home__image from "../../assets/asthma__image.jpeg";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="home__title">So You Want To Talk About Asthma?</h1>

      <img
        src="https://littlespurspedi.com/wp-content/uploads/2023/11/AdobeStock_30420827-1170x600.jpeg"
        className="home__image"
        alt="asthma meds"
      />

      <button
        className="home__button"
        type="button"
        onClick={() => navigate("/about")}
      >
        Let's Talk
      </button>
    </>
  );
}

export default Home;
