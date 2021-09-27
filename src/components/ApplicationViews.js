import React from "react"
import { Route } from "react-router-dom"
import { MainPageList } from "./MainPage/MainPageList"
import { DecisionPageList } from "./DecisionPage/DecisionPageList"

export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <MainPageList />
            </Route>

            <Route exact path="/decisions">
                <DecisionPageList />
            </Route>
        
        </>
    )
}