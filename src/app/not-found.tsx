import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-start justify-start pt-8 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="md:leading-14 text-6xl font-extrabold leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn&apos;t find this page.
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue shadow-xs focus:outline-hidden inline rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-green-700"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
