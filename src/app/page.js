"use client"

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../services/tour";
import Image from "next/image";
import styles from "./Page.module.css"


export default function Home() {


  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["tour"],
    queryFn: fetcher
  });

  console.log(data);

  return (
    <div>
      <div>
        <Image className={styles.banner} src="/images/banner.png" width={1351} height={350} alt='user profile' />

      </div>
      <h1>تورینو</h1>
      <ul>
        {data?.map((tour) => (
          <li key={tour.id}>
            <strong>{tour.title}</strong>
          </li>
        ))}
      </ul>

    </div>

  );
}
