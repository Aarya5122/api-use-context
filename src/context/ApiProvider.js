import { useState, useEffect } from "react";

import Axios from "axios";

import ApiContext from "./ApiContext"

const ApiProvider = (props) => {
    const [ details, setDetails ] = useState({});

  const fetchDetails = async () => {
    //{data} --> response.data  --> response is an object
    const {data} = await Axios.get("https://randomuser.me/api");
    const details = data.results[0]
    setDetails(details);
  }

  useEffect(()=>{fetchDetails()}, [])

  return(
    <>
      <ApiContext.Provider value={{details}}>
        {props.children}
      </ApiContext.Provider>
      <button onClick={fetchDetails}>Change</button>
    </>
  );
}

export default ApiProvider