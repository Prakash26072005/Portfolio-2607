import styles from './Resume.module.css'; 
import ResumePhoto from "../../assets/Resume.jpg"
    import BgImg from "../../assets/4th.jpg";


function Resume() {

  return (
    <div id='Resume' className={styles.home} style={{ backgroundImage:`url(${BgImg})` }}>
   
 <div className={styles.left}> 
   <div className={styles.head}> 
         <h1>Resume</h1>
         </div>
         <div className={styles.img}> 
         <img className={styles.image} src={ResumePhoto}></img>
     </div>
        </div>
          </div>
  )
}
export default Resume