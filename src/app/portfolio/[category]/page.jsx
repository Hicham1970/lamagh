import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

// fetch data from the data file data.js

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              width={600}
              height={400}
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
