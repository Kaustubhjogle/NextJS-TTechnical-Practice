const DynamicPageTwo = async (props: { params: Promise<{ id: string }> }) => {
  console.log("props :", props);
  const paramData = await props.params;
  return (
    <>
      <div>2.This is Dynamic page example by using params</div>
      <div>Data for id: {paramData.id}</div>
    </>
  );
};

export default DynamicPageTwo;
