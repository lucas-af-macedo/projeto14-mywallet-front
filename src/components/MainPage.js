import styled from 'styled-components'
import React, { useContext } from 'react'
import leave from '../assets/img/leave.png'

export default function MainPage(){
    return(
        <Container>
            <Welcome>
                <h2>Olá, fulano</h2>
                <img src={leave} alt='leave'/>
            </Welcome>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #8c11be;
`

const Welcome = styled.div`
    width: 100%;
    font-size: 31px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 600;
`