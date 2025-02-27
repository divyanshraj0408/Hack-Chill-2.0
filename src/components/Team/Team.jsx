import { FaLinkedin } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <img src="/pics/ourteam.png" alt="OURTEAM" className="heading" />
      </div>

      <div className="grid-container">
        <div className="grid-item -my-[50px]">
          <img src="pics/ritika.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Ritika</h2>
            <h3>President</h3>
            <a
              href="https://www.linkedin.com/in/ritika-budhiraja-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/shivansh.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Shivansh</h2>
            <h3>Vice President</h3>
            <a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>

        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/rohit.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Rohit</h2>
            <h3>General Secretary</h3>
            <a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item">
          <img src="pics/sagar.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Sagar Kumar Jha</h2>
            <h3>Managenment Lead</h3>
            <a
              href="https://www.linkedin.com/in/sagar-kumar-jha-237405240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item ">
          <img src="pics/siddharth.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Siddharth</h2>
            <h3>AI/ML Lead</h3>
            <a
              href="https://www.linkedin.com/in/siddharth-upadhyay-b512a610b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/zishan.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Zishan</h2>
            <h3>CyberSecurity Lead</h3>
            <a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item">
          <img src="pics/kishan.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Kishan</h2>
            <h3>Creative Lead</h3>
            <a
              href="https://www.linkedin.com/in/kishan-kumar-00822428b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item ">
          <img src="pics/divyansh.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Divyansh</h2>
            <h3>Technical Lead</h3>
            <a
              href="https://www.linkedin.com/in/divyansh-raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src="pics/aaditya.jpeg" alt="Team Member" />
          <div className="details">
            <h2>Aaditya Sharma</h2>
            <h3>Content Lead</h3>
            <a
              href="https://www.linkedin.com/in/aadityasharma1094?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
