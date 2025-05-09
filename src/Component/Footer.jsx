import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Top companies choose <span className="highlight">Udemy Business</span> to build in-demand career skills.</p>
      </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h4>In-demand Careers</h4>
          <ul>
            <li>Data Scientist</li>
            <li>Full Stack Web Developer</li>
            <li>Cloud Engineer</li>
            <li>Project Manager</li>
            <li>Game Developer</li>
            <li className="see-all">See all Career Accelerators</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Web Development</h4>
          <ul>
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Angular</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>IT Certifications</h4>
          <ul>
            <li>Amazon AWS</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Certifications by Skill</h4>
          <ul>
            <li>Cybersecurity Certification</li>
            <li>Project Management Certification</li>
            <li>Cloud Computing Certification</li>
            <li>Data Analytics Certification</li>
            <li>HR Management Certification</li>
            <li className="see-all">See all Certifications</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Data Science</h4>
          <ul>
            <li>Data Science</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>ChatGPT</li>
            <li>Deep Learning</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Communication</h4>
          <ul>
            <li>Communication Skills</li>
            <li>Presentation Skills</li>
            <li>Public Speaking</li>
            <li>Writing</li>
            <li>PowerPoint</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Leadership</h4>
          <ul>
            <li>Leadership</li>
            <li>Management Skills</li>
            <li>Project Management</li>
            <li>Personal Productivity</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Business Analytics & Intelligence</h4>
          <ul>
            <li>Microsoft Excel</li>
            <li>SQL</li>
            <li>Microsoft Power BI</li>
            <li>Data Analysis</li>
            <li>Business Analysis</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h5>About</h5>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <h5>Discover Udemy</h5>
            <ul>
              <li>Get the app</li>
              <li>Teach on Udemy</li>
              <li>Udemy for Business</li>
              <li>Pricing</li>
              <li>Affiliate</li>
              <li>Help and Support</li>
            </ul>
          </div>
          <div>
            <h5>Legal & Accessibility</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Accessibility statement</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        <div className="footer-copy">
          <p>© 2025 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
