import { useRef } from 'react';
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../../css/cards/TeamMemberCard.css";
import { ITeamMember } from '../../types/cards/ITeamMember';
  
const TeamMemberCard: React.FC<ITeamMember> = ({ imageSrc, name, role, color, fondator }) => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, { rotation: 360, duration: 1, ease: 'power1.inOut' });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, { rotation: 125, duration: 1, ease: 'power1.inOut' });
    gsap.killTweensOf(dotRef.current);
  };

  return (
    <motion.div
      className='team-member-card'
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="round-image-container relative">
        <div className="image-circle bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
          <div className="circle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={circleRef}>
            <div className={`image-dot bg-${color}`} ref={dotRef}></div>
          </div>
        </div>
        <div className={`image-circle-border absolute border-${color}`}>
          <div className="circle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="dot" ref={dotRef}></div>
          </div>
        </div>
      </div>

      <h5 className="name">{name}</h5>
      <h6 className="role">{role}{fondator && ', fondator'}</h6>
    </motion.div>
  );
};

export default TeamMemberCard;