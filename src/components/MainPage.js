import styled from 'styled-components';
import React,{useEffect, useContext} from 'react';
import leave from '../assets/img/leave.png';
import plus from '../assets/img/plus.png';
import minus from '../assets/img/minus.png';
import Wallet from './Wallet';
import { useNavigate } from "react-router-dom";
import MyContext from '../contexts/myContext';
import axios from 'axios';

export default function MainPage(){
    const [transation, setTransation] = React.useState([]);
    const {userData, setUserData} = useContext(MyContext);
    const navigate = useNavigate();
    const [balance, setBalance] = React.useState(0.00);

    useEffect(()=>{
        const URL = 'http://localhost:5000/transations';
        const config = {
            headers:{
                authorization: `Bearer ${userData.token}`
            }
        };
        const request = axios.get(URL, config)
        request.then(answer => {
            setTransation(answer.data)
            calculeBalance(answer.data)
        });
        request.catch(error => {
            navigate('/')
        });
    },[navigate, userData]);
    
    function calculeBalance(transationTemporary){
        let balanceTemporary = 0.00
        for (let i=0; i<transationTemporary.length ;i++){
            if (transationTemporary[i].type==='entry'){
                balanceTemporary += transationTemporary[i].value;
            }else{
                balanceTemporary -= transationTemporary[i].value;
            }
        }
        setBalance(balanceTemporary)
    }

    function exit(){
        localStorage.removeItem('user')
        setUserData('')
        navigate('/')
    }

    function response(){
        const URL = 'http://localhost:5000/transations';
        const config = {
            headers:{
                authorization: `Bearer ${userData.token}`
            }
        };
        const request = axios.get(URL, config)
        request.then(answer => {
            setTransation(answer.data)
            calculeBalance(answer.data)
        });
        request.catch(error => {
            navigate('/')
        });
    }

    return(
        <Container>
            <Welcome>
                <h2>Ol??, {userData.name}</h2>
                <img src={leave} alt='leave' onClick={exit} />
            </Welcome>
            <WalletBox>
                {transation.length
                    ?<Wallet transation={transation} balance={balance} response={response} />
                    :<MessageWallet>
                        <h3>N??o h?? registros de entrada ou sa??da</h3>
                    </MessageWallet>
                }
                
            </WalletBox>
            <OptionsBox>
                <Option onClick={() => navigate('/cashentry')}>
                    <img src={plus} alt='plus'/>
                    <div>
                        <h3>Nova</h3>
                        <h3>entrada</h3>
                    </div>
                </Option>
                <Option onClick={() => navigate('/cashout')}>
                    <img src={minus} alt='minus'/>
                    <div>
                        <h3>Nova</h3>
                        <h3>saida</h3>
                    </div>
                </Option>
            </OptionsBox>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #8c11be;
    max-width: 500px;
`

const Welcome = styled.div`
    width: 100%;
    font-size: 31px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 600;
    img{
        cursor: pointer;
        width: 23px;
        height: 31px;
    }
`

const  WalletBox = styled.div`
    background-color: white;
    border-radius: 5px;
    width: 100%;
    margin-top: 18px;
    height: calc(100vh - 215px);
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OptionsBox = styled.div`
    margin-top: 13px;
    height: 114px;
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    overflow: scroll;
`
const Option = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    min-width: 155px;
    border-radius: 5px;
    margin-right: 15px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    img{
        height: 22px;
        width: 22px;
    }
    h3{
        color: white;
        font-size: 17px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        margin-top: 5px;
    }
`

const MessageWallet = styled.div`
    height: calc(100vh - 215px);
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #868686;
    font-size: 20px;
`