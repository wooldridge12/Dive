import React from "react"
import "./MainPageList.css"
import { useHistory } from "react-router-dom";

export const MainPageList = () => {
    const history = useHistory()

    return(
        <div className="mainPage">
           <div className="mainpageText"> Welcome To <div className="diveLetters">DIVE</div> </div> 
            <button className="jumpInBtn"
                    onClick={() => {
                        history.push({pathname:"/decisions"})
                    }}>JUMP IN</button>
                    -
        </div>
    )
}