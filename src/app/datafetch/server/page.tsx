type ResponseStructure = {
  type: string;
  setup: string;
  punchline: string;
  id: string;
};

const ServerDataFetch = async () => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const apiResponseData: ResponseStructure = await response.json();

    return (
      <div>
        Server component Data fetching
        {apiResponseData && (
          <div>
            <p>{apiResponseData.setup}</p>
            <p>{apiResponseData.punchline}</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("error :", error);

    return (
      <div>
        <p>Error while fetching data</p>
      </div>
    );
  }
};

export default ServerDataFetch;
