import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";



//! fetching data from a server side
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  return data;
}

// generate metadata for dynamic routes
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}


const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.desc}</p>
          </div>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt="avatar"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>{data.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
