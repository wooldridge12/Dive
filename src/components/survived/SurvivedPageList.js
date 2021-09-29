import React from "react"
import "./SurvivedPageList.css"
import { useHistory } from "react-router-dom"

export const SurvivedPageList = () => {
    const history = useHistory()

    return(
        <div className="survivedPage">
            <div className="survivedText">
                CONGRADULATIONS!!!
            </div> <div className="survivedTextTwo">Pushing down on a sharks head and pushing yourself up is a recommended way of surviving a sharks thrust to eat you alive!</div>
            <div className="infoBoxSurvived"></div>
            <button className="homeBtn"
                onClick={() => {
                    history.push({pathname:"/"})
                }}>HOME</button>
        </div>
        
    )
}