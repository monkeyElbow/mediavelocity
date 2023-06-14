import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const SocialIcons = () => {
  


  return (
    <ul className="SocialStyle list-inline p-0">
    <li className="list-inline-item mx-2">
      <a rel="noopener noreferrer" href="mailto:james.gerhold@mediavelocity.com">
        <FaEnvelope />
        <span className="visually-hidden">Email</span>
      </a>
    </li>
    <li className="list-inline-item mx-2">
      <a rel="noopener noreferrer" href="tel:+14175974439">
        <FaPhone />
        <span className="visually-hidden">Phone</span>
      </a>
    </li>
    <li className="list-inline-item mx-2">
      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jamesgerhold/">
        <FaLinkedin />
        <span className="visually-hidden">LinkedIn</span>
      </a>
    </li>
    <li className="list-inline-item mx-2">
      <a rel="noopener noreferrer" href="https://www.facebook.com/Mediavelocity/">
        <FaFacebook />
        <span className="visually-hidden">Facebook</span>
      </a>
    </li>
  </ul>
);
};
 export default SocialIcons;
