import React from "react"
import { useHistory } from "react-router-dom"
import "./DecisionPageList.css"

export const DecisionPageList = () => {
    const history = useHistory()

    return (
        <div className="decisionpage">
            <div className="decisionpageTopWords">A decison needs to be made! Will you make the right one?</div>
            <button className="upBtn"
            onClick={() => {
                history.push({pathname:"/survived"})
            }}> 
                Up
            </button>
            <button className="leftBtn">
                Left
            </button>
            <button className="rightBtn">
                Right
            </button>
            <button className="downBtn">
                Down
            </button>
        </div>
    )
}