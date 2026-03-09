"use client";

import { useEffect, useState } from "react";

type ResponseStructure = {
  type: string;
  setup: string;
  punchline: string;
  id: string;
};

const ClientDataFetch = () => {
  const [apiResponseData, setApiResponseData] =
    useState<ResponseStructure | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await apiData?.json();
      console.log("data :", data);
      if (data) setApiResponseData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      Client component Data fetching
      {apiResponseData && (
        <div>
          <p>{apiResponseData?.setup}</p>
          <p>{apiResponseData?.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default ClientDataFetch;
