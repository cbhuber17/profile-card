import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "red",
  },
  {
    skill: "Software Testing",
    level: "advanced",
    color: "grey",
  },
  {
    skill: "Geomatics Engineering",
    level: "advanced",
    color: "green",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Data Science",
    level: "intermediate",
    color: "pink",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "brown",
  },
  {
    skill: "GNSS",
    level: "advanced",
    color: "cyan",
  },
];

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

function Skill({ text, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          text={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
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
