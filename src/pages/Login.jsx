import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Components
import OAuthButton from "../components/OAuthButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Nomad - Log In</title>
        <meta
          name="description"
          content="Log in to your Nomad account and access your personalised housing dashboard."
        />
        <meta property="og:title" content="Nomad - Log In" />
        <meta
          property="og:description"
          content="Log in to your Nomad account and access your personalised housing dashboard."
        />
      </Helmet>
      <section className="w-screen overflow-hidden bg-cover">
        <div className="mx-auto box-border px-5 py-8 md:w-content-md md:px-10 lg:w-content-lg lg:px-0 lg:py-16">
          <form className="w-full flex-col items-start space-y-4">
            <div className="relative mx-auto w-full md:w-96">
              <h1 className="text-xl text-nomad-blue">Welcome back</h1>
            </div>
            <div className="relative mx-auto w-full md:w-96">
              <input
                type="email"
                className="focus:border-primary peer block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-nomad-blue ease-in-out placeholder:text-transparent focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-nomad-blue focus:outline-none lg:w-96 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                id="email"
                placeholder="name@example.com"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-nomad-blue transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
              >
                Email address
              </label>
            </div>
            <div className="relative mx-auto w-full md:w-96">
              <input
                type={showPassword ? "text" : "password"}
                className="focus:border-primary peer block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-nomad-blue ease-in-out placeholder:text-transparent focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-nomad-blue focus:outline-none lg:w-96 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                id="password"
                placeholder="Password"
              />
              <span
                role="button"
                aria-label={`${showPassword ? "Hide" : "Show"} password input.`}
                className="absolute top-5 right-0 pr-3 text-neutral-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </span>
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-nomad-blue transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none"
              >
                Password
              </label>
            </div>
            <div className="relative mx-auto w-full md:w-96">
              <button className="h-[58px] w-full items-center justify-center rounded bg-nomad-orange text-white">
                Log in
              </button>
            </div>
          </form>
          <div className="mx-auto w-full py-8 md:w-96">
            <span className="block h-0.5 w-full rounded bg-neutral-300"></span>
            <div className="flex w-full justify-center">
              <p className="-mt-3.5 bg-white px-4 text-center font-light text-nomad-blue">
                or
              </p>
            </div>
            <div className="mx-auto w-full md:w-96">
              <OAuthButton />
            </div>
            <p className="py-6 text-sm text-nomad-blue">
              Don't have a Nomad account?{" "}
              <Link to="/register" className="underline">
                Click here
              </Link>{" "}
              to register.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
