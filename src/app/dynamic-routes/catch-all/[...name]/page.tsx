interface CatchAllPageProps {
  params: Promise<{name: string[]}>
}

const CatchAllPage = async (props: CatchAllPageProps) => {
  const paramData = await props.params;
  // url: http://localhost:3002/dynamic-routes/catch-all/123/1213412
  console.log("props :", props); // {params: ReactPromise, searchParams: ReactPromise}
  console.log('paramData :', paramData); // {name: Array(2)}
  console.log("paramData?.name :", paramData?.name); //["123", "1213412"]

  return (
    <>
      <div>Catch All Page Dynamic routeExample</div>
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
    </>
  );
};
export default CatchAllPage;
