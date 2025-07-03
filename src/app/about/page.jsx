import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

// generate metadata for static routes
export const metadata = {
  title: "Gh Lama About",
  description: "This is a About page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/32776132/pexels-photo-32776132.jpeg"
          alt=""
          fill={true}
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital story Teller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences{" "}
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>How Are We?</h1>
          <p className={styles.itemDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            recusandae fugiat necessitatibus minus saepe libero, maxime, sit,
            tenetur accusantium architecto rerum odit voluptatibus! Voluptate
            beatae aperiam a. Ad quia dolorum, sint labore impedit dolore
            laboriosam neque, recusandae sequi, dolorem explicabo corporis
            facere iusto laborum sed nesciunt.
            <br />
            <br />
            Nesciunt omnis iusto ut officia explicabo enim labore cupiditate
            quisquam, iste beatae ipsa quod laudantium esse doloribus eaque
            laborum maiores saepe minus neque obcaecati. Doloribus numquam
            pariatur, rem voluptatum debitis optio, at sapiente exercitationem
            ratione ab, voluptas non ullam illo. Debitis, amet. Accusantium
            tempora temporibus architecto! Cumque quod asperiores odit
            voluptatem aspernatur necessitatibus eveniet, laborum nostrum
            corporis aliquid veniam est pariatur. Corporis possimus et,
            distinctio, commodi consequuntur sint, omnis tempora pariatur dolore
            provident excepturi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.itemDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            recusandae fugiat necessitatibus minus saepe libero, maxime, sit,
            tenetur accusantium architecto rerum odit voluptatibus! Voluptate
            beatae aperiam a. Ad quia dolorum, sint labore impedit dolore
            laboriosam neque, recusandae sequi, dolorem explicabo corporis
            facere iusto laborum sed nesciunt.
            <br />
            <br />
            -Creatives Illstrations
            <br />
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />
            <br />
            -Mobile Apps
            <br />
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
