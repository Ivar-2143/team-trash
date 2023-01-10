import React from 'react'
import styled from 'styled-components';

function Donation() {
  return (
    <DonationSection>
        <Wrapper>
            <h1>Donation Drive</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit, ab odio aperiam repellat animi! Odio, dolore velit ex ipsa animi aliquam eos quae provident laboriosam dignissimos blanditiis et quas.</span>
            <button>
                Coming Soon...
            </button>
        </Wrapper>
    </DonationSection>
  )
}

const DonationSection = styled.div`
    margin-bottom: 20px;
    /* margin: 20px 0; */
    width: 100%;
    height: 600px;
    background-color: #f5f5f5;
    position: relative;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    flex-direction: column;
    color: #3F3D56;
    h1{
        font-family: 'Chewy';
        font-size: 2.6rem;
        margin-top: 3%;
        text-transform: uppercase;
    }
    span{
        font-size: 1.5rem;
        width: 70%;
    }
    button{
        position: absolute;
        font-size: 1.8rem;
        font-weight: 700;
        border: none;
        background: none;
        bottom: 0;
        margin-bottom: 10%;
        text-align:left;
        padding: 0;
        width: 250px;
        color: #3F3D56;
    }
`;

export default Donation;