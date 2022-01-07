import { useState, useEffect } from "react";

const useFetch = url => {

  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
      const getData = async()=>{
        try {
            const resp = await fetch(url);
            let dataRes = await resp.json();
            dataRes = dataRes[0];
            setData(dataRes);
            setFetching(false);

        } catch (error) {
          console.log(error);
        }
      }
      getData();
  }, [url])

  return {
    data,
    fetching
  }
};

export default useFetch;