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
                    }}>JUMP IN
            </button>
            {/* This dash is here for the page to look better you can barely see it but it creates spaces under the jump in buuton */}-
        </div>
    )
}