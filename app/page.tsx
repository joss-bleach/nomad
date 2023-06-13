export const dynamic = "force-dynamic";
// Actions
import getListings, { IListingsParams } from "@/actions/getListings";

// Types
import { SafeListing } from "./types";

// Components
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/ui/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/ui/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <section className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing: SafeListing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </section>
      </Container>
    </ClientOnly>
  );
};

export default Home;
