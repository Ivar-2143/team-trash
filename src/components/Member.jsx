import React from 'react'
import styled from 'styled-components';
import aaron from '../images/member-icons/Aaron.png';
import gelo from '../images/member-icons/Gelo.png';
import ivar from '../images/member-icons/Ivar.png';
import nico from '../images/member-icons/Nico.png';
import logo from '../images/team_trash_logo.png';

const members = [
    {
        name: "Aaron",
        image: aaron
    },
    {
        name: "Ivar",
        image: ivar
    },
    {
        name: "Gelo",
        image: gelo
    },
    {
        name: "Nicowww",
        image: nico
    },
    {
        name: "Pierre",
        image: logo
    },
    {
        name: "Jeyd",
        image: logo
    }
];

function Member() {
  return (  
    <Wrapper>
        {members.map((member)=>{
            return(
                <Card>
                    <img src={member.image} alt="" />
                    <span>{member.name}</span>
                </Card>
            );
        })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    margin-bottom: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-wrap: wrap;
    justify-content: space-evenly; */

`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 128px;
        border-radius: 100%;
    }
    span{
        font-family: 'Chewy';
        color: #3F3D56;
        font-size: 1.2rem;
    }

`;

export default Member