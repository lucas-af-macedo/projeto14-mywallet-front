import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from '../assets/css/GlobalStyle'
import styled from 'styled-components' 
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import MainPage from './MainPage'
import MyContext from '../contexts/myContext'

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