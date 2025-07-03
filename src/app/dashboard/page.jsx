"use client"; 

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";


const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  
  // console.log(data); 
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


  if (session.status === "loading") {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (isAuthenticated) {
    return <div className={styles.container}>Dashboard</div>;
  }

  


};

export default Dashboard;
