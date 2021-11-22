import React, {useContext, useEffect} from "react"
import "./SurvivedPageList.css"
import { useHistory } from "react-router-dom"
import { SharkInfoContext } from "../database/sharkInfo"

export const SurvivedPageList = () => {
    const history = useHistory()
    const { facts, getFacts } = useContext(SharkInfoContext);

    useEffect(() => {
        getFacts();
    }, []);

    return(
        <div className="survivedPage">
            <div className="survivedText">
                CONGRADULATIONS!!!
            </div> 
            <div className="survivedTextTwo">Pushing down on a sharks head and pushing yourself up is a recommended way of surviving a sharks thrust to eat you alive!
            </div>
            <div className="infoBoxSurvived">
                {
                    facts.map(fact => {
                        return (
                            <section key={`fact--${fact.id}`} className="sharkFacts">
                                <div className="sharkFactTitle">{fact.shark_fact_title}</div>
                                <div className="sharkFact">{fact.shark_fact}</div>
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