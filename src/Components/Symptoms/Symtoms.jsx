import "./Symptoms.css";

function Symptoms() {
  return (
    <div className="symptoms">
      {/* <h2 className="about__symptoms">Symptoms</h2> */}
      <h2 className="about__symptoms_description">Symptoms Include </h2>
      <ul className="about__symptoms_list">
        <li className="about__symptom">
          Cough: Can be chronic, dry, mild, or severe, and may occur at night or
          during exercise.
        </li>
        <li className="about__symptom">
          Respiratory Symptoms: Include difficulty breathing, wheezing, mouth
          breathing, fast or rapid breathing, frequent respiratory infections,
          and shortness of breath at night.
        </li>
      </ul>
      <h2 className="about__other_symptoms">Other Symptoms Include:</h2>
      <ul className="about__other_symptoms-list">
        <li className="about__other_symptom">Chest Pressure</li>
        <li className="about__other_symptom">Anxiety</li>
        <li className="about__other_symptom">Fast Heart Rate</li>
      </ul>
    </div>
  );
}

export default Symptoms;
