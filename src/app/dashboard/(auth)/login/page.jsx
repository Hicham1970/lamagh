"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState(false);
  const session = useSession(); 
  const router = useRouter();

  // if (session.status === "unauthenticated") {
  //   router.push("/dashboard/login");
  // }

  if (session.status === "loading") {
    return <p className={styles.loading}>Loading....</p>;
  }

  useEffect(() => {
    if(session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>  
      </form>
      {error && <span className={styles.error}>Something went wrong!</span>}
      <button onClick={() => signIn("google")} className={styles.button}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
