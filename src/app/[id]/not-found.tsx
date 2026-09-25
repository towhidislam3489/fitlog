import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black hover:bg-[#a8d900]"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;