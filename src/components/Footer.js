import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
    justify-content:flex-end;
    width:100%;
    height:auto;
    background-color:#000111;
    padding:2rem 1rem;
    color:#fff;
`
const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
`
const FooterBlock = styled.div`
    min-width:24%;
    max-width:100%;
    margin-bottom:1rem;
    h4{
        margin-bottom:0.8rem;
    }
    li{
        list-style-type:none;
        margin-bottom:0.5rem;
        font-size:14px;
    }
`
const Footer = ({ footerData }) => {
    return (
        <div>
            <Section>
                
                <Container>
                    { footerData.map((item, index)=>(
                        <FooterBlock>
                            <h4>{item.title}</h4>
                            <ul>
                                {item.links.map((link, key)=>(
                                    <li key={key}>{link}</li>
                                ))}
                            </ul>

                        </FooterBlock>
                    ))}

                </Container>
            </Section>
        </div>
    )
}

export default Footer
