import styled from 'styled-components'
import React, { useContext } from 'react'

export default function CashOut(){
    return(
        <Container>
            <Title>
                <h3>Nova saida</h3>
            </Title>
            
            <form>
                <input placeholder='Valor' step='0.01' type='number' name='valor' required/>
                <input placeholder='Descricao' type='text' name='text' required/>
                <button type="submit"><p>Entrar</p></button>
		    </form>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    width: 303px;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #8c11be;
    max-width: 500px;
    input{
        margin-bottom: 13px;
        width: 303px;
        height: 45px;
        border-radius: 4px;
        border: 0px;
        border: 1px solid #D5D5D5;
        padding: 13px;
        font-size: 20px;
        outline: 0px;
        font-family: 'Raleway', sans-serif;
    }
    input::placeholder{
        color: black;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
    }
    button{
        width: 303px;
        height: 45px;
        background: #A328D6;
        border-radius: 4px;
        border: 0px;
        color: white;
        font-size: 21px;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
        cursor: pointer;
    }
    
    button:hover{
        transition: ease 0.1s;
        filter: brightness(1.1);
    }
`
const Title = styled.div`
    width: 303px;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 40px;
`