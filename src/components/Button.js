
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background : ${({ primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space:nowrap;
    outline:none;
    border:2px solid transparent;
    min-width:100px;
    max-width:200px;
    font-weight:600;
    cursor:pointer;
    text-decoration:none;
    transition:0.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({ big })=>(big ? '16px 40px' : '14px 24px')};
    color: ${({ primary })=>(primary ? '#fff' : '#000d1a')};
    font-size:${({ big })=>( big ? '20px' : '14px')};
    &:hover {
        color:#000d1a;
        border:2px solid #cd853f;
        background-color:rgba(255,255,255,0.8);
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    }
`;

