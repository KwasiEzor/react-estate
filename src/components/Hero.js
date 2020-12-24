import React , {useEffect ,useState, useRef } from 'react'
import { RiSlideshow2Fill } from 'react-icons/ri';
import styled , { css } from 'styled-components/macro'
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection  = styled.section`
    height: 100vh;
    max-height:1100px;
    position relative;
    overflow:hidden;
    
`;

const HeroWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:hidden;
    

`;

const HeroSlide = styled.div`
    z-index: 1;
    width:100%;
    height:100%;
`;
const HeroSlider = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    &::before{
        content:'';
        position:absolute;
        z-index:2;
        width:100%;
        height:100vh;
        bottom:0vh;
        overflow:hidden;
        opacity:0.4;
        background:linear-gradient(
            0deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 5%,
            rgba(0,0,0,0.6) 100%
            )
    }
`;
const HeroImage = styled.img`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    object-fit:cover;
    transition:0.1s ease;
`;
const HeroContent = styled.div`
    position:relative;
    z-index:10;
    display:flex;
    flex-direction:column;
    max-width:1600px;
    width:calc(100%-100px);
    color:#fff;
    padding-right:1.5rem;

    h1{
        font-size: clamp(1rem,8vw,2rem);
        text-transform:uppercase;
        font-weight:400;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
        text-align:left;
        margin-bottom:0.8rem;
       
    }
    p{
        margin-bottom: 1.2rem;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    }
    @media screen and (max-width:660px){
        &{
            padding-left:2rem;
        }
    }
`;

const SliderButtons = styled.div`
    position:absolute;
    bottom:50px;
    right:50px;
    display:flex;
    z-index:10;
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left:5px;
`;
const ArrowButtons = css`
    width:50px;
    height:50px;
    color:#fff;
    cursor:pointer;
    background:#000d1a;
    border-radius:50%;
    padding:10px;
    margin-right:1rem;
    user-select:none;
    transition:0.3s;
    &:hover{
        background: #cd853f;
        transform:scale(1.05);
    }
`;
const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
    ${ArrowButtons}
`;
const Hero = ({ slides }) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current)
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
    }

    const prevSlide = () =>{
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1   : current - 1)
        console.log(current)
    }
    // useEffect(()=>{
    //     const nexSlide = ()=>{
    //         setCurrent( current => (current=== length - 1 ? 0 : current + 1))
    //     }
    //     timeout.current = setTimeout( nexSlide, 1000)
    //     return function () {
    //         if(timeout.current){
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // },[current,length]);
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide,index)=>{
                    return (
                        <HeroSlide key={index}>
                            {index === current && (

                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path}
                                            primary="true"
                                            css={`max-width : 160px; cursor:pointer;`}
                                            >
                                                
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                            
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick ={prevSlide}/>
                    <NextArrow onClick ={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
