import "./About.css";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/backArrow.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about">
      {/*   <h2 className="about__title">About Asthma</h2> */}
      <h2 className="about__header">What is Asthma?</h2>
      <p className="about__header_description">
        Asthma is a condition in which a person's airways become inflamed,
        narrow and swell, and produce extra mucus, which makes it difficult to
        breathe. Asthma can be minor or it can interfere with daily activities.
        In some cases, it may lead to a life-threatening attack.{" "}
        {/* Asthma may
        cause difficulty breathing, chest pain, cough, and wheezing. The
        symptoms may sometimes flare-up. */}
      </p>

      <button
        className="about__back-button"
        src={backArrow}
        onClick={() => navigate(-1)}
      ></button>
    </div>
  );
}

export default About;
