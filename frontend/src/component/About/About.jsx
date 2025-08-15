import styles from "./About.module.css";
import ProfileImg from "../../assets/Prakash.jpg";
    import BgImg from "../../assets/2nd.jpg";


function About() {
  return (
    <div id="About" className={styles.About}  style={{ backgroundImage:`url(${BgImg})` }} >
      <div className={styles.left}>
        <h1  className={styles.heading}>About Me</h1>
        <p className={styles.para}>
          Hi, I'm Prakash Mishra, a passionate Full-Stack Developer skilled in
          building responsive, user-friendly applications. My tech stack
          includes React, JavaScript, HTML, CSS, Node.js, Express, and MongoDB.
          I enjoy turning ideas into reality with clean and efficient code, and
          I'm always exploring new technologies to improve my craft.
        </p>
      </div>
            <div className={styles.right}>
              <div className={styles.imgDiv}>
            <img src={ProfileImg} alt="profilePic"  className={styles.img}></img>
      </div>
      </div>
    </div>
  );
}

export default About;