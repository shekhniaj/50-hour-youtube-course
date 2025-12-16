import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const apiData = await response.json();
        setData(apiData);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default FetchDataEffect;
