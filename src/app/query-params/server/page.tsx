const QueryParamsPage = async({searchParams} : {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>   
//   { [key: string]: ... }
//     This is called an Index Signature.
//     It means: "The object can have any number of properties, and the names (keys) of those properties will be strings."
//     Example: If your URL is ?color=blue&size=m, the keys are "color" and "size".
}) => {
const { name, page } = await searchParams;

return(
    <div>
      <p>Example of QueryParams</p>
      <p>Name: {name} PageNo: {page}</p>
      </div>

)
}

export default QueryParamsPage;
