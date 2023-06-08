// Actions
import getListings from "@/actions/getListings";

// Components
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/ui/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/ui/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

const Home = async () => {
  const listings = await getListings();
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
          {listings.map((listing) => (
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
