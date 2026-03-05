"use client";

import { Suspense } from "react";
import QueryParamsDisplay from "./QueryParamsDisplay";

const QueryParamsClientPage = () => {
  // In Next.js, any Client Component that uses useSearchParams() must be wrapped in a <Suspense> boundary.

  // Because useSearchParams() causes the component to be rendered on the client side based on the URL.
  // During the build process (Static Analysis), there is no "URL" to read, so Next.js needs a Suspense boundary to "catch"
  // that component and prevent it from breaking the entire page's static generation.

  return (
    <div>
      <p>Example of QueryParams in ClientPage</p>
      <Suspense fallback={<p>Loading search settings...</p>}>
        <QueryParamsDisplay />
      </Suspense>
    </div>
  );
};

export default QueryParamsClientPage;
