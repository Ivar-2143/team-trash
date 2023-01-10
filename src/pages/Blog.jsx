import React from 'react'
import styled from 'styled-components';
import banner1 from '../images/infographics/The Problem.png';
import banner2 from '../images/infographics/The Solution.png';
import banner3 from '../images/infographics/Waste Segregation.png';
import banner4 from '../images/infographics/Eco Brick.png';
import banner5 from '../images/infographics/Eco Build.png';
import logo from '../images/team_trash_logo.png';

const blogs = [
    {
        title: "The Problem",
        image: banner1,
        description: "One of the missions of <span>#TeamTrash</span> is to spread awareness on nurturing and protecting the environment in all its diversity, and in our country, we are facing a major problem."
    },{
        title: "The Solution",
        image: banner2,
        description:"Trash might not be trash at all!. There are a lot of things you can do with trash, you can turn it to something useful and not just that. You're keeping the earth safe for your friends and families!"
    },{
        title: "Waste Segregation",
        image: banner3,
        description:"Have you heard of Proper Waste Segration? Some of you may or may not heard of it, but no worries we got you covered! Our mission as an organization to help inform people that there are 3 types you can dispose your trash: Recycable, Biodegradable and Non-Recycable."
    },
    {
        title: "Eco Brick",
        image: banner4,
        description:"Just a simple tutorial on how you could build your own Eco Brick."
    },{
        title: "Eco Build",
        image: banner5,
        description:"Let us build! Broaden your imagination just like building Lego blocks! Let's build and build and build, for a better future!"
    }
];


function Blog() {
  return (
    <Wrapper>
        {blogs.map((blog)=>{
            return(
                <BlogCard>
                    <Heading>
                        <img src={logo} alt="" />
                        <span>
                            {blog.title}
                        </span>
                    </Heading>
                    <ImgWrap>
                        <img src={blog.image} alt="" srcset="" />
                    </ImgWrap>
                    <DescWrap dangerouslySetInnerHTML={{__html:blog.description}}>
                    </DescWrap>
                </BlogCard>
            );
        })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 70%;
    left: 50%;
    top: 100px;
    transform: translate(-50%,0);
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const BlogCard = styled.div`
    width: 425px;
    height: 600px;
    background-color: #fff;
    margin: 2% 5px;
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
`;

const Heading = styled.div`
    position: relative;
    width: 90%;
    height: 15%;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    align-items: center;
    span{
        color: #3F3D56;
        font-family: 'Chewy';
        font-size: 1.5rem;
        margin-left: 4%;
    }
    img{
        width: 50px;
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    background-color: #F0F0F4;
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: auto;
    height: 380px;
    img{
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        height: 380px;
    }
    `;

const DescWrap = styled.div`
    width: 90%;
    position: relative;
    left:50%;
    transform: translate(-50%,0);
    margin-top: 10px;
    color: #3F3D56;
    text-align: justify;
    span{
        color: #006cf8;
        font-weight: 700;
        &:hover{
            text-decoration: underline;
        }
    }
`;


export default Blog