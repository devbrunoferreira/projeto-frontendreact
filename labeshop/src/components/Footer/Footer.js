// STYLED
import { FooterContainer, Github, LinkedIn } from './styled';

// ICONS
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <Github>
        <a href="https://github.com/devbrunoferreira">
          <FaGithub size={30} color="#f1f1f1"/>
        </a>
        <span>devbrunoferreira</span>
      </Github>
      <LinkedIn>
        <a href="https://www.linkedin.com/in/brunos-ferreira/">
          <FaLinkedin size={30}/>
        </a>
        <span>brunos-ferreira</span>
      </LinkedIn>
    </FooterContainer>
  );
};

export default Footer;