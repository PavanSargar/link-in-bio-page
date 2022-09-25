import React from "react";

import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const PROFILEPIC =
  "https://d1fdloi71mui9q.cloudfront.net/3xomovnpTEKm5c58nZBK_cbuQ8WVFnNV8RS3B";

const LinkCard = ({ title, link, icon }) => {
  return (
    <div className="link-card">
      <a target="_blank" href={link}>
        <h3>{title}</h3>
        {icon && (
          <span>
            <icon />
          </span>
        )}
      </a>
    </div>
  );
};

const BioLinks = () => {
  return (
    <div className="bio-links-container">
      <div className="about-content">
        <img src={PROFILEPIC} alt="Pawan Sargar" />
        <h1>Pawan Sargar</h1>
        <p>Hello there! I am a passionate web developer and blogger.</p>
        <div className="social-icons">
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pavan-sargar-775a3b174/"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a target="_blank" href="https://github.com/PavanSargar">
              <FaGithubSquare />
            </a>
          </span>
          <span>
            <a target="_blank" href="https://www.instagram.com/waystoweb">
              <FaInstagramSquare />
            </a>
          </span>
        </div>
      </div>

      <div className="links">
        <LinkCard
          title="Portfolio"
          link="http://pawansargar.herokuapp.com/"
          icon={false}
        />
        <LinkCard
          title="Waystoweb Blog"
          link="http://waystoweb.com/"
          icon={false}
        />
        <LinkCard
          title="Codingmasterweb Blog"
          link="http://codingmasterweb.com/blogs"
          icon={false}
        />
        <LinkCard
          title="Fiverr (hire me!)"
          link="https://www.fiverr.com/pavansargar"
          icon={false}
        />
        <LinkCard
          title="Buy Me a Coffee!"
          link="https://www.buymeacoffee.com/pawansargar"
          icon={false}
        />
      </div>

      <footer>
        <p>
          <span>Made with &#10084; by Pawan Sargar &#128519;</span>
        </p>
      </footer>
    </div>
  );
};

export default BioLinks;
