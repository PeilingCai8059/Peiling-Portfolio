import "./Skills.css";
import { SKILLS } from "../../Assets/data";
import { LuBadgeCheck } from "react-icons/lu";

export default function Skills() {
  return (
    <div>
      {SKILLS.map((skill, index) => (
        <div key={index}>
          <LuBadgeCheck className="skill-icon" />{" "}
          <nobr className="skill-title">{skill.skillName} : </nobr>
          {skill.skillContent.map((item, index) => (
            <nobr key={index} className="skill-info"> {item} &nbsp;</nobr>
          ))}
        </div>
      ))}
    </div>
  );
}
