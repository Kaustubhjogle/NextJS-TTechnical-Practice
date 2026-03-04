interface CatchAllPageProps {
  params: Promise<{name: string[]}>
}

const OptionalCatchAllPage = async (props: CatchAllPageProps) => {
  const paramData = await props.params;
  // url: http://localhost:3002/dynamic-routes/optional-catch-all/123/1213412
  console.log("props :", props); // {params: ReactPromise, searchParams: ReactPromise}
  console.log('paramData :', paramData); // {name: Array(2)}
  console.log("paramData?.name :", paramData?.name); //["123", "1213412"]

  return (
    <>
      <div>Optional Catch All Page Dynamic routeExample</div>
      <div>
        {paramData?.name?.map((route: string, index: number) => {
          return (
            <p key={route}>
              {" "}
              Part {index + 1} Route: {route}
            </p>
          );
        })}
      </div>
      <div className="mt-5 p-5">
        Optional catch all will also work for
          <p>http://localhost:3002/dynamic-routes/optional-catch-all</p>
          Along with
          <p>http://localhost:3002/dynamic-routes/optional-catch-all/123</p>
          <p>http://localhost:3002/dynamic-routes/optional-catch-all/123/1213412</p>
          <p>http://localhost:3002/dynamic-routes/optional-catch-all/123/1213412/78612</p>

      </div>
    </>
  );
};
export default OptionalCatchAllPage;
