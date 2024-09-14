import DanyloAva from "../../images/Danylo.jpg";
import cssAboutMe from "./AboutMe.module.css";
const AboutMe = props => {
  return (
    <div className={cssAboutMe.container}>
      <img className={cssAboutMe.avatar} src={DanyloAva} alt='Avatar' />

      <div className={cssAboutMe.textContainer}>
        <h2 className={cssAboutMe.tytleText}>About Me</h2>
        <ul className={cssAboutMe.list}>
          <li>Hello, my name is Danylo</li>
          <li>I am 20 years old</li>
          <li>I am a frontend developer and IT support specialist</li>
          <li>I have a junior bachelor's degree in Computer Science</li>
          <li>
            My hobby is music (I write beats), and I go to shooting classes
          </li>
          <li>
            In my free time, I study new technologies because I really like IT
          </li>
        </ul>
      </div>
      <div className={cssAboutMe.myPresent}>
        <h3 className={cssAboutMe.myPresentTytle}>My acquaintance with IT</h3>
        <p className={cssAboutMe.pText}>
          When I was 10, I encountered a computer for the first time. After
          starting to play games, I became interested in how they are created. I
          am lucky because I have there was a group at school where children
          were taught how to use a computer, me I worked there until I realized
          that I don't have the usual use of a PC enough
        </p>
        <p className={cssAboutMe.pText}>
          I found specialized computer school where he studied for 2 years.
          During this time, I fully mastered HTML and CSS, also learned
          additionally use Photoshop, Word, Excel and many other standard ones
          programs
        </p>
        <p className={cssAboutMe.pText}>
          After that, in 2017, I joined the "Step" computer academy. While
          studying there, I gained basic knowledge of cyber security and took
          courses from Cisco Networking Academy (introduction to cyber security
          and Cybersecurity Essentials) and learned the basics of Python.
        </p>
        <p className={cssAboutMe.pText}>
          In 2021, he entered the Mechnikov University in Odesa, Ukraine in
          Computer Science, received many fundamental knowledge in the field of
          programming, mathematics, discrete mathematics, system analysis and
          much more. During his studies he mastered JavaScript gained even
          greater knowledge of HTML/CSS, performed a tutorial practice in the C#
          programming language (wrote the Flappy Bird game in Russian Unity). In
          2024, he graduated from the university and received a junior degree
          bachelor's degree in the field of information technologies, namely
          computer of science
        </p>
        <p className={cssAboutMe.pText}>
          Outside the university, he received Google certificates (Bits and
          bytes of a computer networking and Basics of IT support). During the
          time I fell in love with JavaScript and continued to learn in this
          direction by going to Frontend developer title. Now I'm fluent in
          HTML/CSS a lot their methodologies and preprocessors, JavaScript
          (React, React-router-dom, Redux, React-redux).
        </p>
      </div>
      <div className={cssAboutMe.mainInfo}>
        <h3 className={cssAboutMe.myPresentTytle}>Important information</h3>
        <div className={cssAboutMe.mainLists}>
          <ul className={cssAboutMe.langList}>
            <h4>Skils:</h4>
            <li>Cyber ​​security consulting</li>
            <li>IT support</li>
            <li>
              Development of web applications using JavaScript <br />
              (React, Redux, etc.), HTML, CSS
              <br /> and third-party tools and technologies
            </li>
            <li>Python is the basic level</li>
            <li>Consulting on networks</li>
            <li>Photoshop and Illustrator</li>
            <li>Reading and compiling documentation</li>
            <li>Reading and compiling documentation</li>
            <li>Solving basic engineering problems</li>
          </ul>
          <ul className={cssAboutMe.langList}>
            <h4>Languages:</h4>
            <li>English B1</li>
            <li>Polish B2</li>
            <li>Ukrainian Native speaker</li>
            <li>Russian C2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
