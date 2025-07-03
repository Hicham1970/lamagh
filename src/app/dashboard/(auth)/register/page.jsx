"use client";
import styles from './page.module.css'; 
import Link from 'next/link';
import {useState} from 'react'; 
import {useRouter} from 'next/navigation';

const Register = () => {
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(name, email, password); 

    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password
        })  
        
      }); 

      if (res.ok) {
        const data = await res.json();
        if (res.status === 201) {
          router.push('/dashboard/login?success=Account has been created');
        } else {
          setError(true);
          console.log("Registration failed:", data);
        }
      } else {
        setError(true);
        console.log("Registration failed with status:", res.status);
      }

      
    } catch (error) {
      console.log(error);
      setError(true); 
    }

  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className={styles.input} required/>
        <input type="email" placeholder="email" className={styles.input} required/>
        <input type="password" placeholder="password" className={styles.input} required/>
        <button className={styles.button}>Register</button>
      </form>
      {error && <span className={styles.error}>Something went wrong!</span>}
      <Link href="/dashboard/login" className={styles.link} >Do you have an account? Login</Link>
    </div>
  )
}

export default Register
