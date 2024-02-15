import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import {
  skillsData,
  skillsData_ai_ml,
  skillsData_appdev,
  skillsData_contentwriting,
  skillsData_dataAnalytics,
  skillsData_databases,
  skillsData_design,
  skillsData_management,
  skillsData_operatingsystems,
  skillsData_programmingLanguages,
  skillsData_versioncontrolsystem,
  skillsData_webdev,
} from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const { theme } = useContext(ThemeContext);
  const skillset = {
    "Data Analytics": skillsData_dataAnalytics,
    "Programming Languages": skillsData_programmingLanguages,
    "Web Development": skillsData_webdev,
    "Application Development": skillsData_appdev,
    Databases: skillsData_databases,
    Designing: skillsData_design,
    "Project & Data Management": skillsData_management,
    "Operating Systems": skillsData_operatingsystems,
    "Version Control Systems": skillsData_versioncontrolsystem,
    "Content Writing": skillsData_contentwriting,
  };

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      {Object.entries(skillset).map(([content, value]) => (
        <>
          <div className="skillsHeader">
            <h3 style={{ color: theme.primary }}>{content}</h3>
          </div>
          <div className="skillsContainer">
            <div className="skill--scroll">
              <Marquee
                gradient={false}
                speed={value.length > 5 ? 100 : 0}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {value.map((skill, id) => (
                  <div className="skill--box" key={id} style={skillBoxStyle}>
                    <img src={skillsImage(skill)} alt={skill} />
                    <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </>
      ))}
      {/* <div className="skillsHeader">
        <h3 style={{ color: theme.primary }}>Tech Stacks</h3>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
