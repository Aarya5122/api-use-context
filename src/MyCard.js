import React, { useContext } from "react";

import ApiContext from "./context/ApiContext";

const MyCard = () =>{

    const {details} = useContext(ApiContext);
    console.log(details);

    return(
        <>
            <img src={details.picture?.large} alt="Display"/>
            <ApiContext.Consumer>
                {(context)=>(<p>First Name: {details.name?.first}</p>)}
            </ApiContext.Consumer>  
            <p>Last Name: {details.name?.last}</p>
        </>
    );

    
};

export default MyCard;
