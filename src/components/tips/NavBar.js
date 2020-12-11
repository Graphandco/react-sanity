import React, {useState, useContext} from 'react'
import styled from 'styled-components';

import NavBarGroup from './NavBarGroup';



//Context
import { TipsContext } from '../contexts/TipsContext';


const NavBar = () => {

const [navOpen, setNavOpen] = useState(false)
const [tips, isLoading] = useContext(TipsContext);


const tipsCategories = [];
tips.map(tip => {
    if (tipsCategories.indexOf(tip.category) === -1) {
        tipsCategories.push(tip.category)
    }
});
    return (
        <NavBarWrapper className='navbar'>
            {tipsCategories.map((tipCategory) => (
                <NavBarGroup tipCategory={tipCategory} tips={tips} />
            ))}
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    background-color: var(--nav-bg-color);
`;


export default NavBar
