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
            <button className="leftBtn" 
                onClick={() => {
                // setting variable random to the value of Math.random(); BUT I am getting decimal numbers. I need whole numbers. 
                //SOOOO we use Math.floor to create a whole number.
                var randomLeft = Math.floor(Math.random() * 2) +1;
                console.log(randomLeft)

                //This is the functionality of what happens when the Math.random has ran and selected a number the the corrisponding case number and selected number will invoke which path is taken.
                switch (randomLeft) {
                    case 1:
                        history.push({pathname:"/survived"})
                        break;
                    case 2:
                        history.push({pathname:"/eaten"})
                        break;
                }
            }}>
                Left
            </button>
            <button className="rightBtn"
                onClick={() => {
                    var randomRight = Math.floor(Math.random() * 2) +1;
                    console.log(randomRight)

                    switch (randomRight) {
                        case 1:
                            history.push({pathname:"/survived"})
                            break;
                        case 2:
                            history.push({pathname:"/eaten"})
                            break;
                    }
                }}>
                Right
            </button>
            <button className="downBtn"
                onClick={() => {
                    history.push({pathname:"/eaten"})
                }}>
                Down
            </button>
        </div>
    )
}