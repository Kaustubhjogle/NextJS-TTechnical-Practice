export default function Loading() {

    // Loading.tsx will automatically wrap the page.tsx file and any children below in a <Suspense> boundary.
    //  The new content is automatically swapped in once complete.
  return (
    <div>
      <h2>Loading Data Fetch</h2>
      <p>Please wait while data is being fetched.</p>
    </div>
  );
}
