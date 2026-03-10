"use client";

import { usePathname, useRouter } from "next/navigation";

const PathNameExample = () => {
  const path = usePathname(); /* Path: /link/usepathname */
  const router = useRouter();

  /*
    <Link> is used for declarative navigation and supports automatic prefetching,
    <Link> is used when you know the destination route in advance
    while router.push() is used for programmatic navigation triggered by events or application logic.
    useRouter() works only in Client Components.
  */

  return (
    <div>
      <div>Path: {path}</div>
      <button onClick={() => router.push("/datafetch/client")}>
        Go to DataFetching Page
      </button>
    </div>
  );
};

export default PathNameExample;
