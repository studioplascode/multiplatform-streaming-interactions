const Page404 = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-zinc-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="rounded-md mpsi-gradient px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="https://discord.gg/B6NJxzEXFn" className="text-sm font-semibold text-white">
              Get Help on Discord<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page404;
