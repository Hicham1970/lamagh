"use client"; 

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";





const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate ,error, isLoading } = useSWR(
    `/api/posts?username=${session.data?.user.name}`,
    fetcher
  );
  
  console.log(data); 
  console.log(session);
  console.table(session.data);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (session?.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
    if (session?.status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [session?.status, router]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value; 
    const desc = e.target[1].value; 
    const img = e.target[2].value; 
    const content = e.target[3].value; 
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      e.target.reset();
      router?.refresh();
      mutate()
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };



  if (session.status === "loading") {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      width={100}
                      height={100}
                      alt="post img"
                      className={styles.img}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                </span>
                
                </div>
              ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Add New Post</h2>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            col="30"
            rows="10"
            className={styles.textarea}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

};

export default Dashboard;
