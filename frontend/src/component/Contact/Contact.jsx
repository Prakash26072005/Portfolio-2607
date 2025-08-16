// import { useState } from "react";
// import styles from "./Contact.module.css";

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//       });

//       const data = await res.json();
//       alert(data.message);

//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div id="Contact" className={styles.home}>
//       <div className={styles.left}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.head}>
//             <h1>Contact</h1>
//           </div>

//           <div className={styles.form}>
//             <div className={styles.input}>
//               <label>Email*</label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className={styles.inputBox}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.input}>
//               <label>Full Name*</label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Full Name"
//                 className={styles.inputBox}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.input}>
//               <label>Message*</label>
//               <textarea
//                 placeholder="Enter Your Message"
//                 className={styles.textBox}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </div>

//             <button className={styles.button} type="submit">Send</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ for navigation
// import styles from "./Contact.module.css";
//     import BgImg from "../../assets/5th.jpg";



// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // ✅ navigation hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//       });

//       if (res.ok) {
//         // ✅ Redirect to success page
//         navigate("/success");
//       } else {
//         console.error("Error submitting form");
//       }

//       // Clear form fields
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div id="Contact" className={styles.home} style={{ backgroundImage:`url(${BgImg})` }}>
//       <div className={styles.left}>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.head}>
//             <h1>Contact</h1>
//           </div>

//           <div className={styles.form}>
//             <div className={styles.input}>
//               <label>Email*</label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className={styles.inputBox}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.input}>
//               <label>Full Name*</label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Full Name"
//                 className={styles.inputBox}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className={styles.input}>
//               <label>Message*</label>
//               <textarea
//                 placeholder="Enter Your Message"
//                 className={styles.textBox}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </div>

//             <button className={styles.button} type="submit">
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import BgImg from "../../assets/5th.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loader state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ start loader

    try {
     const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      setLoading(false); // ✅ stop loader

      if (res.ok) {
        navigate("/success");
      } else {
        console.error("Error submitting form");
      }

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setLoading(false);
      console.error("Error sending message:", err);
    }
  };

  return (
    <div
      id="Contact"
      className={styles.home}
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* ✅ Loader Overlay */}
      {loading && (
        <div className={styles.loaderOverlay}>
          <div className={styles.loader}></div>
          <p>Sending...</p>
        </div>
      )}

      <div className={styles.left}>
        <form onSubmit={handleSubmit}>
          <div className={styles.head}>
            <h1>Contact</h1>
          </div>

          <div className={styles.form}>
            <div className={styles.input}>
              <label>Email*</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={styles.inputBox}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.input}>
              <label>Full Name*</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className={styles.inputBox}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.input}>
              <label>Message*</label>
              <textarea
                placeholder="Enter Your Message"
                className={styles.textBox}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
