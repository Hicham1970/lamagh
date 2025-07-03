import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation'


export const metadata = {
  title: "Gh Lama blog",
  description: "A blog page for Gh Lama",
};

// function get data:
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });



  if (!res.ok) {
   throw new Error("Failed to fetch data");
  }

  return res.json();

}

const Blog = async () => {
  let data;
  try {
    data = await getData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Failed to load data</div>;
  }

  

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              width={400}
              height={250}
              alt=""
              className={styles.img}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
