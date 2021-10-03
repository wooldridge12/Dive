import React from "react"
import "./EatenPageList.css"
import { useHistory } from "react-router-dom"

export const EatenPageList = () => {
    const history = useHistory()
    
    return(
        <div className="eatenPage">
        <div className="eatenText">BETTER LUCK NEXT TIME</div>
        <div className="eatenTextTwo">Pushing the shark above you is a terrble idea since they can dive down, This will make you vacation a very bad day.
        </div>
        <div className="infoBoxEaten"></div>
        <button className="homeBtn"
            onClick={() => {
                history.push({pathname:"/Dive"})
            }}>HOME</button>
        </div>
    )
}