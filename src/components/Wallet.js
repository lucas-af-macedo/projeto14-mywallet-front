import styled from 'styled-components';
import React,{useContext} from 'react';
import MyContext from '../contexts/myContext';
import dayjs from 'dayjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Wallet({transation, balance, response}){
    const {userData} = useContext(MyContext)
    const navigate = useNavigate()

    function remove(item){
        const URL = `http://localhost:5000/transation/${item._id}`
        const config = {
            headers: {
                authorization: `Bearer ${userData.token}`
            }
        }
        const request = axios.delete(URL, config)
        request.then(answer => {
            response()
        })
        request.catch(error => {
            navigate('/')
        })
    }

    function edit(item){
        if(item.type==='out'){
            navigate(`/edit-transation-out/${item._id}`)
        }else{
            navigate(`/edit-transation-entry/${item._id}`)
        }    
    }

    return(
        <Container>  
            <Transations>
                {transation.map((item,index)=>
                        <Transation key={item._id}>
                            <Description>
                                <h3>{dayjs(item.date).format('DD/MM')}</h3>
                                <h4 onClick={()=>edit(item)} >{item.description}</h4>
                            </Description>
                            <Value type={item.type}>
                                <h3>{item.value.toFixed(2)}</h3>
                                <h4 onClick={()=>remove(item)} >x</h4>
                            </Value>
                        </Transation>)
                }
            </Transations>
            <Balance balance={balance}>
                <h3>SALDO</h3>
                <h4>{balance.toFixed(2)}</h4>
            </Balance>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Balance = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 17px;
    h3{
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
    }
    h4{
        color: ${(props)=>(props.balance>=0)?'#03AC00':'#C70000'};
        font-family: 'Raleway', sans-serif;
    }
`

const Transations  = styled.div`
    height: calc(100vh - 250px);
    min-height: 115px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding-top: 10px;
`

const Transation = styled.div`
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
`

const Description = styled.div`
    margin-bottom: 5px;
    display: flex;
    font-family: 'Raleway', sans-serif;
    h3{
        font-family: 'Raleway', sans-serif;
        color: #C6C6C6;
    }
    h4{
        max-width: calc(100% - 70px);
        margin-left: 8px;
        font-family: 'Raleway', sans-serif;
    }

`

const Value = styled.div`
    display: flex;
    h3{
        color: ${(props)=>(props.type==='entry')?'#03AC00':'#C70000'};
        font-family: 'Raleway', sans-serif;
    }

    h4{
        margin-left: 7px;
        color: #C6C6C6;
        font-family: 'Raleway', sans-serif;
    }
`