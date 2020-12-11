import React, {useState} from 'react';
import NavBarItem from './NavBarItem';
import styled from 'styled-components';

import { IconContext } from 'react-icons/lib';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiPrestashop } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const NavBarGroup = ({tipCategory, tips}) => {

 const [navOpen, setNavOpen] = useState(false);

 const handleNavOpen = () => {
     setNavOpen(!navOpen);
 }

    return (
        <IconContext.Provider value={{ style: {fontSize: '1.2rem'}}}>
            <NavBarGroupItems className='navbar-group navbar-group-js'>
                    <NavBarGroupTitle className='navbar-group-title' onClick={handleNavOpen} navOpen={navOpen}>
                        <NavBarGroupName className='navbar-group-name'>
                            {tipCategory === 'javascript' && <IoLogoJavascript /> }
                            {tipCategory === 'prestashop' && <SiPrestashop /> }
                            {tipCategory === 'css' && <FaCss3Alt /> }
                            {tipCategory === 'react' && <FaReact /> }
                            <span>{tipCategory}</span>
                        </NavBarGroupName>
                        {navOpen ? <FaChevronUp /> : <FaChevronDown />}                        
                    </NavBarGroupTitle>
                    {navOpen && 
                    <NavBarItems>
                        {tips.filter(tip => tip.category === tipCategory).map(filteredTip =>(
                        <NavBarItem key={filteredTip.slug} tip={filteredTip} />
                        ))}
                    </NavBarItems>
                    }
                </NavBarGroupItems>
        </IconContext.Provider>
    )
}

const NavBarGroupItems = styled.div`
   
`;

const NavBarGroupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1rem .25rem 1rem;
    margin-bottom: ${props => props.navOpen && '.75rem'};
    background-color: ${props => props.navOpen && 'rgba(255,255,255, .2)'};
    transition: .3s;
    cursor: pointer;

    svg:nth-child(2) {
        opacity: .7;
    }

    &:hover {
        background-color: var(--orange);
        color: var(--bg-color);
    }
`;

const NavBarGroupName = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;

    span {
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 3px;
    }
`;

const NavBarItems = styled.ul`
    list-style: none;
    margin-left: 3rem;
`;

export default NavBarGroup
