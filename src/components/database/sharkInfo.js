//This will be used for survived AND eaten page.
import React, { useState, createContext } from "react"

export const SharkInfoContext = createContext()

export const SharkInfoProvider = (props) => {
    const [facts, setFacts] = useState([]);

    const getFacts = () => {
        return fetch("http://localhost:8000/sharkfacts", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("dive_token")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setFacts);
    }

    return (
        <SharkInfoContext.Provider
            value={{
                facts,
                getFacts
            }}>
            {props.children}
        </SharkInfoContext.Provider>
    )
}