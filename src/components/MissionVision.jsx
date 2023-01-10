import React from 'react'
import styled from 'styled-components';
import mBanner from '../images/mission.jfif';
import vBanner from '../images/vision.jfif';

const mission = "To bring awareness to the youth and to engage them in nurturing and protecting the environment in all its diversity through drives and rewarding activities"

const vision = "To be a well-known organization that develops individuals to become responsible with trash management towards a greener and healthy land. We envision a world led by disciplined, educated, and advocate individuals that love the environment."

function MissionVision() {
  return (
    <Wrapper>
        <MissionPNL>
            <Mission>
                <h4>Our Mission</h4>
                <div>{mission}</div>
            </Mission>
            <MissionIMG src={mBanner}/>
        </MissionPNL>
        <VisionPNL>
            <Vision>
                <h4>Our Vision</h4>
                <div>{vision}</div>
            </Vision>
            <VisionIMG src={vBanner}/>
        </VisionPNL>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const VisionPNL = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 300px;
    margin: 5% 0;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    /* left: 50%;
    transform: translate(-50%,0); */

`;
const MissionPNL = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 300px;
    margin: 5% 0;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    align-self: flex-start;

`;

const Vision = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    margin: 0 7%;
    /* margin-left: 15%; */
    h4{
        font-family: 'Chewy';
        font-size: 1.7rem;
        color: #3F3D56;
    }
    div{
        font-size: 1.1rem;
        text-align: justify;
        width: 100%;
        color: #3F3D56;
    }
`;
const Mission = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    right: 0;
    margin: 0 7%;
    /* margin-right: 15%; */
    h4{
        font-family: 'Chewy';
        font-size: 1.7rem;
        color: #3F3D56;
    }    
    div{
        font-size: 1.2rem;
        text-align: justify;
        width: 100%;
        color: #3F3D56;
    }
`;

const VisionIMG = styled.img`
    position: absolute;
    right: 0;
    height: 350px;
    border-radius: 10px;
    
`;

const MissionIMG = styled.img`
    position: absolute;
    height: 350px;
    left: 0;
    border-radius: 10px;
`;

export default MissionVision