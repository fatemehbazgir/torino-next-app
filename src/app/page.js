"use client"

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../services/tour";
import Image from "next/image";
import SearchForm from "../../components/module/SearchForm";


export default function Home() {


  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["tour"],
    queryFn: fetcher
  });

  console.log(data);

  return (
    <div>
      <div>
        <Image src="/images/banner.png" width={1351} height={350} alt='banner' />
      </div>
      <SearchForm />
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
