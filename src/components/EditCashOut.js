import styled from 'styled-components'
import React,{useState,useContext,useEffect} from 'react'
import MyContext from '../contexts/myContext'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function EditCashOut (){
    const params = useParams()
    const navigate = useNavigate()
    const {userData} = useContext(MyContext)
    const [disabled,setDisabled] = useState(false)
    const [form, setForm] = useState({
        value: undefined,
        description: ""
    });


    function submit(event){
        event.preventDefault();
        setDisabled(true)

        const URL = `http://localhost:5000/transation/${params.transationId}`
        const body = {
            ...form,
            value: Number(form.value),
        }
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const request = axios.put(URL, body, config);
        request.then(answer => {
            navigate('/main')
        });
        request.catch(erro => {
            setDisabled(false)
        })
    }

    function handleForm (e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        }) 
    }

    
    useEffect(()=>{
        if (userData===''){
            navigate('/')
        }
    },[])

    return(
        <Container>
            <Title>
                <h3>Editar saida</h3>
            </Title>
            
            <form onSubmit={submit}>
                <input placeholder='Valor' step='0.01' type='number' name='value' onChange={handleForm} disabled={disabled} required/>
                <input placeholder='Descricao' type='text' name='description' onChange={handleForm} disabled={disabled} required/>
                <button type="submit"><p>Atualizar saida</p></button>
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