import React from 'react';
import './SkillsCard.scss';
import CREATIVE_T from '../../assets/CREATIVE_t.svg';
import DEVELOPMENT_T from '../../assets/DEVELOPMENT_t.svg';
import SOFTSKILLS_T from '../../assets/SOFTSKILLS_t.svg';
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeaftereffects, 
  SiAdobepremierepro,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiSass
} from "react-icons/si";
import { 
  IoCodeSlash, 
  IoVideocamOutline,
  IoColorPaletteOutline,
  IoPhonePortraitOutline
} from "react-icons/io5";
import { 
  MdGroups, 
  MdManageAccounts,
  MdAssignment,
  MdCreateNewFolder,
  MdPsychology,
  MdQuestionAnswer,
  MdAccessTime,
  MdDevices
} from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";

function SkillsCard({ category, data }) {
  const getTitleImage = (category) => {
    switch(category) {
      case 'design':
        return CREATIVE_T;
      case 'development':
        return DEVELOPMENT_T;
      case 'management':
        return SOFTSKILLS_T;
      default:
        return null;
    }
  };
  const getSkillIcon = (skill) => {
    const lowerSkill = skill.toLowerCase();
    
    //Icons
    if (lowerSkill.includes('photoshop')) return <SiAdobephotoshop className="skill-icon" />;
    if (lowerSkill.includes('illustrator')) return <SiAdobeillustrator className="skill-icon" />;
    if (lowerSkill.includes('after effects')) return <SiAdobeaftereffects className="skill-icon" />;
    if (lowerSkill.includes('premiere pro')) return <SiAdobepremierepro className="skill-icon" />;
    if (lowerSkill.includes('figma')) return <SiFigma className="skill-icon" />;
    if (lowerSkill.includes('graphics design')) return <BiPalette className="skill-icon" />;
    if (lowerSkill.includes('video editing')) return <IoVideocamOutline className="skill-icon" />;
    if (lowerSkill.includes('motion graphics')) return <IoColorPaletteOutline className="skill-icon" />;
    if (lowerSkill.includes('ui/ux design')) return <IoPhonePortraitOutline className="skill-icon" />; 

    if (lowerSkill.includes('html/css')) return <SiHtml5 className="skill-icon" />;
    if (lowerSkill.includes('javascript')) return <SiJavascript className="skill-icon" />;
    if (lowerSkill.includes('react')) return <SiReact className="skill-icon" />;
    if (lowerSkill.includes('node.js')) return <SiNodedotjs className="skill-icon" />;
    if (lowerSkill.includes('git/github')) return <AiOutlineGithub className="skill-icon" />;
    if (lowerSkill.includes('responsive design')) return <MdDevices className="skill-icon" />;
    if (lowerSkill.includes('scss/sass')) return <SiSass className="skill-icon" />;
    if (lowerSkill.includes('web development')) return <IoCodeSlash className="skill-icon" />;
    
    if (lowerSkill.includes('media management')) return <MdManageAccounts className="skill-icon" />;
    if (lowerSkill.includes('project management')) return <MdAssignment className="skill-icon" />;
    if (lowerSkill.includes('team collaboration')) return <MdGroups className="skill-icon" />;
    if (lowerSkill.includes('content creation')) return <MdCreateNewFolder className="skill-icon" />;
    if (lowerSkill.includes('problem solving')) return <MdPsychology className="skill-icon" />;
    if (lowerSkill.includes('communication')) return <MdQuestionAnswer className="skill-icon" />;
    if (lowerSkill.includes('time management')) return <MdAccessTime className="skill-icon" />;
    
    return;
  };

  return (
    <div className="skills-panel">
      <div className="card-container skills-card">
        <div className="skills-card-content">
          <div className="skills-card-header">
            <img src={getTitleImage(category)} alt={data.title} />
          </div>
          <div className="skills-grid">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                {getSkillIcon(skill)}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
