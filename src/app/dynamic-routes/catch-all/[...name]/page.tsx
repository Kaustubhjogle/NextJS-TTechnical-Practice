interface CatchAllPageProps {
  params: Promise<{name: string[]}>
}

const CatchAllPage = async (props: CatchAllPageProps) => {
  console.log("props :", props);
  const paramData = await props.params;
  console.log("paramData :", paramData?.name);
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
