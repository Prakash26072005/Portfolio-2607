import styles from './Home.module.css'; 
import reactlogo from "../../assets/react.svg";
import BgImg from "../../assets/1st.jpg";
function Home() {

  return (
    <div id='home' className={styles.home} style={{ backgroundImage:`url(${BgImg})` }}>
    <div className={styles.left}> 
         <div className={styles.logo}>   
           <img src={reactlogo} alt="logo" className={styles.logoimg} />
    </div> 
    </div>
    <div className={styles.right}> 
      <h1 className={styles.heading} >Welcome</h1>
      <p className={styles.content} >👋 Hi  , I'm Prakash</p>
      <p className={styles.content} >A Passionate React Frontend Developer 💻  I build modern, responsive websites using React, Redux & MERN Stack. I build fast, modern,and responsive web applications using React.js,Redux,Tailwind CSS, and MERN Stack</p>

     </div>
          </div>
  )
}

export default Home