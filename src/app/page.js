import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetcher } from '../../services/tour';
import Image from "next/image";
import SearchForm from "../../components/module/SearchForm";
import TourList from "../../components/template/TourList";


export default async function Home() {


  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["tours"],
    queryFn: fetcher
  });



  return (
    <div>
      <div>
        <Image src="/images/banner.png" width={1351} height={350} alt='banner' />
      </div>
      <SearchForm />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TourList />
      </HydrationBoundary>

    </div>

  );
}
