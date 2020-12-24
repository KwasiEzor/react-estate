import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';


const Section = styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
    h1{
        text-align:center;
        margin:4rem 0;
    }
`;
const Container = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:800px;
    grid-gap:20px;
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
    }
`;
const Card = styled.div`
    max-width:30%;
    min-width:100%;
    object-fit:cover;
    padding:0.5rem;
    transition:0.3s;
    position:relative;
    img{
       min-width:33%;
       max-width:100%;
       object-fit:cover; 
    }
    h3{
        margin:1rem 0.5rem; 
    }
    p{
        line-height:1.3;
        margin:1rem 0.5rem;
    }
    &:hover{
        box-shadow:0 0 10px rgba(0,0,0,0.2);
        cursor:pointer;
        transform:scale(1.025);
    }
    .read-btn{
      
        margin:auto;
    }
`
const CardContent = styled.div`
    border:1px solid #f1f1f1;
    color:#000111;
    margin-bottom:3rem;
`
const DetailsSection = ({ cards }) => {
    return (
        <div>
           <Section>
               <h1>Different Styles of Houses</h1>
               <Container>
                    { cards.map((card, index) =>{
                        return(
                            <Card >
                                <img src={card.image} key ={index}alt="House Style"/>
                                <CardContent>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </CardContent>
                                <Button className="read-btn">Read More</Button>
                            </Card>
                        )
                    })}
               </Container>
           </Section> 
        </div>
    )
}

export default DetailsSection

