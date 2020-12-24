import React ,{ useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { RiMenu3Line } from 'react-icons/ri';
import '../index.css';
import hamburger from '../images/hamburger.svg';

const Nav = styled.nav`
    height: 60px;
    // background: #000111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
`;
const NavLink = css`
    color:#fff;
    display:flex;
    align-items:center;
    height:100%;
    cursor:pointer;
    padding: 0 1rem;
    text-decoration:none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(RiMenu3Line)`
    display:none;
    @media screen and (max-width: 768px){
        display:block;
        color:#fff;
        width:40px;
        height:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transition:0.3s;
        transform:translate(-50%,25%);
       &:hover{
           color:#cd853f;
        } 
    }
`;

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-48px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:24px;
    @media screen and (max-width: 768px){
        display:none;
        font-size:1.3rem;
        font-weight:bold;
        height:40px;
        width:44px;
    }
`;
const ActiveNav = css`
    background-color:#cd853f;
`;

const Navbar = ({ toggle }) => {
    const [navBar, setNavbar] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
    return (
        <Nav className={navBar ? `navbar active` : `navbar`}>
            <Logo to='/'>Dream.House</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                { menuData.map((item,index) =>(
                    <NavMenuLinks to ={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
