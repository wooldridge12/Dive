import React from "react"
import { Route } from "react-router-dom"
import { MainPageList } from "./MainPage/MainPageList"
import { DecisionPageList } from "./DecisionPage/DecisionPageList"
import { SurvivedPageList } from "./SurvivedPage/SurvivedPageList"
import { EatenPageList } from "./EatenPage/EatenPageList"
import { SharkInfoProvider } from "./database/sharkInfo"

export const ApplicationViews = () => {
    return (
        <>
            <SharkInfoProvider>

            <Route exact path="/Dive">
                <MainPageList />
            </Route>

            <Route exact path="/decisions">
                <DecisionPageList />
            </Route>

            <Route exact path="/survived">
                <SurvivedPageList />
            </Route>

            <Route exact path="/eaten">
                <EatenPageList />
            </Route>
        
            </SharkInfoProvider>
        </>
    )
}