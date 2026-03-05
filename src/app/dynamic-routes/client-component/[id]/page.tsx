"use client";

import { use } from "react";

const DynamicClientExample = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  console.log("id :", id);

  return (
    <div>
      <p>http://localhost:3002/dynamic-routes/client/12</p>
      <p>This is an example for dynamic route in client Component</p>
      <p>Id is {id}</p>
    </div>
  );
};
export default DynamicClientExample;
