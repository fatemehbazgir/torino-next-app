"use client"

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../services/tour";


export default function Home() {


  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["tour"],
    queryFn: fetcher
  });

  console.log(data);

  return (
    <div>
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
