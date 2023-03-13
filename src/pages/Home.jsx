import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nomad - Find your perfect home, wherever life takes you</title>
        <meta
          name="description"
          content="Discover unique properties and personalized support on Nomad's peer-to-peer housing marketplace. Find your dream home and live life to the fullest."
        />
        <meta
          property="og:title"
          content="Nomad - Find your perfect home, wherever life takes you"
        />
        <meta
          property="og:description"
          content="Discover unique properties and personalized support on Nomad's peer-to-peer housing marketplace. Find your dream home and live life to the fullest."
        />
      </Helmet>
      <section className="h-hero w-screen overflow-hidden bg-nomad-light-grey bg-cover bg-right bg-no-repeat pb-48">
        <div className="mx-auto box-border px-5 md:w-content-md md:px-10 lg:w-content-lg lg:px-0">
          <div className="flex w-full flex-col items-start space-y-3 pt-12 text-center md:w-3/4 md:pt-20 md:text-left lg:w-1/2">
            <h1 className="text-3xl font-medium text-nomad-blue md:text-4xl">
              Find your perfect home, wherever life takes you
            </h1>
            <h2 className="pb-4 text-lg text-nomad-grey md:pb-2 md:text-xl">
              Discover, rent and buy unique homes from local residents with our
              community&#8209;driven approach to housing.
            </h2>
            <Link
              to="/register"
              className="flex h-14 w-full items-center justify-center rounded bg-nomad-orange text-white md:h-12 md:w-44"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
