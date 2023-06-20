import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="CartoonColin.png" alt="Colin" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Colin Huber</h2>
      <p>
        Hi I am Colin Huber. I am a Software Tester, Data Scientist, Full Stack
        Web Developer, and Geomatics Engineer with GNSS Expertise! I like
        traveling to Vietnam and eating and socializing there.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.text}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill text="HTML+CSS 💪" color="red" />
      <Skill text="Software Testing 💪" color="blue" />
      <Skill text="Geomatics Engineering 💪" color="green" />
      <Skill text="React 💪" color="yellow" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
