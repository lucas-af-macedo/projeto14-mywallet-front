import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from '../assets/css/GlobalStyle'
import styled from 'styled-components' 
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import MainPage from './MainPage'
import MyContext from '../contexts/myContext'
import CashEntry from './CashEntry'
import CashOut from './CashOut'
import EditCashOut from './EditCashOut'
import EditCashEntry from './EditCashEntry'

export default function App(){
    const [userData,setUserData] = React.useState('')
    const [today,setToday] = React.useState(0)
    return (
        <MyContext.Provider value = {{userData, setUserData, today, setToday}}>
            <BrowserRouter>
                <GlobalStyle/>
                <Body>
                    <Routes>
                        <Route path='/' element = {<LoginPage/>} />
                        <Route path='/singup' element = {<RegisterPage/>} />
                        <Route path='/main' element = {<MainPage/>} />
                        <Route path='/cashout' element = {<CashOut/>} />
                        <Route path='/cashentry' element = {<CashEntry/>} />
                        <Route path='/edit-transation-out/:transationId' element = {<EditCashOut/> } />
                        <Route path='/edit-transation-entry/:transationId' element = {<EditCashEntry/> } />
                    </Routes>
                </Body>
            </BrowserRouter>
        </MyContext.Provider>
    )
}

const Body = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #8c11be;
`