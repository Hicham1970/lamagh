"use client"; 

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {useRouter} from 'next/navigation'; 


// export const metadata = {
//   title: "Contact Gh Lama",
//   description: "This is a Contact page for Gh Lama",
// };

const Contact = () => {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    console.log("Session data:", session);
    console.log("Form data:", { name, email, message });

    try {
      console.log("Sending data:", { name, email, message, username: session?.user?.name });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, message: message, username: session?.user?.name }),
      });

      console.log("Response:", response);

      if (response?.ok) {
        console.log("Message sent successfully!");
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        // redirect vers home
        router.push("/");
      } else {
        console.log("Failed to send message.");
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending the message.");
    }

    console.log("handleSubmit finished");
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Let's Keep In Touch </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact photos"
            fill={true}
            className={styles.image}
            priority={true}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            col="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button type="submit" className={styles.button}>Send Massage</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
