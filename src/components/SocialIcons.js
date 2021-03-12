import { FaEnvelope, FaPhone, FaYoutube, FaBehance, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';




const SocialIcons = () => {
  


  return (
    <div className="p-1">
     
     <a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="mailto:james.gerhold@mediavelocity.com"><FaEnvelope /></a>

{' '}
<a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="tel:+14175974439"><FaPhone /></a>
{' '}
<a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="https://www.linkedin.com/in/jamesgerhold/"><FaLinkedin /></a>
{' '}
<a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="https://www.behance.net/jamesgerhold"><FaBehance /></a>
{' '}

<a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="https://www.facebook.com/Mediavelocity/"><FaFacebook /></a>

{/* <a rel="noopener noreferrer" className="SocialStyle ml-1 mr-1" target="_blank" href="https://www.instagram.com/compactfamilyservices/"><FaInstagram /></a> */}

{/* <a rel="noopener noreferrer" className="SocialStyle mr-1" target="_blank" href="https://twitter.com/COMPACTfamily"><FaTwitter /></a> */}

{/* <a rel="noopener noreferrer" className="SocialStyle" target="_blank" href="https://www.youtube.com/channel/UC7LHU70Uou3e8DsrNj6CnNA/"><FaYoutube /></a> */}

    
    </div>
  );
};
 export default SocialIcons;
