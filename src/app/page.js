"use client"

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../services/services";

export default function Home() {


  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["tour"],
    queryFn: fetcher,
    staleTime: 60 * 1000,
  });


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
