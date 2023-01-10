import React from 'react'
import styled from 'styled-components';

function onSubmit(e){
    e.preventDefault();
}

function ConcernForm() {
  return (
    <Wrapper>
        <form action="submit">
            <input type="text" placeholder="First Name" id="fName"/>
            <input type="text" placeholder='Last Name' name="" id="lName" />
            <input type="email" placeholder='Email' name="" id="email" />
            <textarea name="" id="" placeholder="Message" />
            <button type='submit'  onClick={onSubmit}>Submit</button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 45%;
    max-width: 450px;
    height: 500px;
    background-color: #3F3D56;
    border-radius: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    form{
        width: 90%;
        position: relative;
        height: 400px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-around;
        flex-flow: wrap;
        input[type="text"]{
            width: 48%;
            position: relative;
            height: 10%;
            border:none;
            border-radius: 4px;
            font-size: 1.4rem;
        }
        input[type="email"]{
            position:relative;
            width:100%;
            height: 10%;
            font-size: 1.4rem;
            border:none;
            border-radius: 4px;
        }
        input:hover,textarea:hover{
            cursor: text;
        }
       input:focus,textarea:focus{
            background-color: #F0F0F4;
            cursor: text;
        }
        textarea{
            width: 100%;
            position: relative;
            resize: none;
            font-size: 1.2rem;
            height: 50%;
            border:none;
            border-radius: 4px;
        }
        button{
            height: 10%;
            width: 100%;
            border:none;
            font-size: 1.4rem;
            border-radius: 4px;
            background-color: #84FF65;
            &:hover{
                cursor:pointer;
            }
        }
    }
`;


export default ConcernForm