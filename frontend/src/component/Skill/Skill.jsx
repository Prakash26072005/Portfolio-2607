import styles from "./Skill.module.css";
import BgImg from "../../assets/3rd.jpg";


function Skills() {
  return (
    <div id="Skills" className={styles.body} style={{ backgroundImage:`url(${BgImg})` }}>
    <div className={styles.Skills}>
        <h1>Skills</h1>
    </div>
     <div className={styles.logo}>
        <div className={styles.box}>
        <h1>HTML</h1>
        <div className={styles.img}> 
        <img className={styles.html} src="https://cdn-icons-png.flaticon.com/128/174/174854.png"></img>
    </div>
    </div>
     <div className={styles.box}>
        <h1>Javascript</h1>
        <div className={styles.img}> 
        <img className={styles.html} src="https://cdn-icons-png.flaticon.com/128/8422/8422177.png"></img>
    </div>
    </div>
     <div className={styles.box}>
        <h1>React</h1>
        <div className={styles.img}> 
        <img className={styles.html} src="https://cdn-icons-png.flaticon.com/128/1050/1050427.png"></img>
    </div>
    </div>
     <div className={styles.box}>
        <h1>Node JS</h1>
        <div className={styles.img}> 
        <img className={styles.html} src="https://cdn-icons-png.flaticon.com/128/919/919825.png"></img>
    </div>
    </div> 
     <div className={styles.box}>
        <h1>MongoDB</h1>
        <div className={styles.img}> 
        <img className={styles.html} src="https://cdn-icons-png.flaticon.com/128/9672/9672242.png"></img>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Skills;