import React, { useContext, useEffect } from "react"
import "./EatenPageList.css"
import { useHistory } from "react-router-dom"
import { SharkInfoContext } from "../database/sharkInfo"

export const EatenPageList = () => {
    const history = useHistory()
    const { facts, getFacts } = useContext(SharkInfoContext);

    useEffect(() => {
        getFacts();
    }, []);
    
    return(
        <div className="eatenPage">
        <div className="eatenText">BETTER LUCK NEXT TIME</div>
        <div className="eatenTextTwo">Pushing the shark above you is a terrble idea since they can dive down, This will make you vacation a very bad day.
        </div>
        <div className="infoBoxEaten">
            {
                facts.map(fact => {
                    return (
                        <section key={`fact--${fact.id}`} className="sharkFacts">
                            <div>{fact.shark_fact_title}</div>
                        </section>
                        
                    )
                })
            }
        </div>
        <button className="homeBtn"
            onClick={() => {
                history.push({pathname:"/Dive"})
            }}>HOME</button>
        </div>
    )
}