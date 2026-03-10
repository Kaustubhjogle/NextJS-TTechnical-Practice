import Link from "next/link";

const NavigationExample = () => {
  return (
    <div className="m-4">
      Navigation Example
      <div>
        <Link href={"/datafetch/server"} prefetch={true} className="m-2 border">
          Data fetching(Server)
        </Link>
        <p>
          prefetch in Next.js {"<Link>"} enables background loading of route
          resources when the link enters the viewport, allowing near-instant
          client-side navigation.
        </p>
      </div>
    </div>
  );
};

export default NavigationExample;
