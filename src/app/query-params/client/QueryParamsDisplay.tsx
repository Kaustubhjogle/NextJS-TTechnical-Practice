"use client";

import { useSearchParams } from "next/navigation";

export default function QueryParamsDisplay() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const page = searchParams.get("page");

  return (
    <div>
      <p>Name: {name ?? "N/A"}</p>
      <p>PageNo: {page ?? "1"}</p>
    </div>
  );
}
