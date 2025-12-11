import React from 'react';
import styles from './SkillsCard.module.scss';
import CREATIVE_T from '../../assets/icons/CREATIVE_t.svg';
import DEVELOPMENT_T from '../../assets/icons/DEVELOPMENT_t.svg';
import SOFTSKILLS_T from '../../assets/icons/SOFTSKILLS_t.svg';
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
    if (lowerSkill.includes('photoshop')) return <SiAdobephotoshop className={styles.skillIcon} />;
    if (lowerSkill.includes('illustrator')) return <SiAdobeillustrator className={styles.skillIcon} />;
    if (lowerSkill.includes('after effects')) return <SiAdobeaftereffects className={styles.skillIcon} />;
    if (lowerSkill.includes('premiere pro')) return <SiAdobepremierepro className={styles.skillIcon} />;
    if (lowerSkill.includes('figma')) return <SiFigma className={styles.skillIcon} />;
    if (lowerSkill.includes('graphics design')) return <BiPalette className={styles.skillIcon} />;
    if (lowerSkill.includes('video editing')) return <IoVideocamOutline className={styles.skillIcon} />;
    if (lowerSkill.includes('motion graphics')) return <IoColorPaletteOutline className={styles.skillIcon} />;
    if (lowerSkill.includes('ui/ux design')) return <IoPhonePortraitOutline className={styles.skillIcon} />; 

    if (lowerSkill.includes('html/css')) return <SiHtml5 className={styles.skillIcon} />;
    if (lowerSkill.includes('javascript')) return <SiJavascript className={styles.skillIcon} />;
    if (lowerSkill.includes('react')) return <SiReact className={styles.skillIcon} />;
    if (lowerSkill.includes('node.js')) return <SiNodedotjs className={styles.skillIcon} />;
    if (lowerSkill.includes('git/github')) return <AiOutlineGithub className={styles.skillIcon} />;
    if (lowerSkill.includes('responsive design')) return <MdDevices className={styles.skillIcon} />;
    if (lowerSkill.includes('scss/sass')) return <SiSass className={styles.skillIcon} />;
    if (lowerSkill.includes('web development')) return <IoCodeSlash className={styles.skillIcon} />;
    
    if (lowerSkill.includes('media management')) return <MdManageAccounts className={styles.skillIcon} />;
    if (lowerSkill.includes('project management')) return <MdAssignment className={styles.skillIcon} />;
    if (lowerSkill.includes('team collaboration')) return <MdGroups className={styles.skillIcon} />;
    if (lowerSkill.includes('content creation')) return <MdCreateNewFolder className={styles.skillIcon} />;
    if (lowerSkill.includes('problem solving')) return <MdPsychology className={styles.skillIcon} />;
    if (lowerSkill.includes('communication')) return <MdQuestionAnswer className={styles.skillIcon} />;
    if (lowerSkill.includes('time management')) return <MdAccessTime className={styles.skillIcon} />;
    
    return;
  };

  return (
    <div className={styles.skillsPanel}>
      <div className={styles.purpleAccent}></div>
      <div className={`${styles.cardContainer} ${styles.skillsCard}`}>
        <div className={styles.skillsCardContent}>
          <div className={styles.skillsCardHeader}>
            <img src={getTitleImage(category)} alt={data.title} />
          </div>
          <div className={styles.skillsGrid}>
            {data.skills.map((skill, idx) => (
              <div key={idx} className={styles.skillItem}>
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
