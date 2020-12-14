import React, {useState, useContext} from 'react'
import styled from 'styled-components';

import NavBarGroup from './NavBarGroup';



//Context
//import { TipsContext } from '../contexts/TipsContext';


const NavBar = ( {tips, currentSlug, setCurrentSlug} ) => {

const [navOpen, setNavOpen] = useState(false)
//const [tips, isLoading] = useContext(TipsContext);


const tipsCategories = [];
tips.map(tip => {
    if (tipsCategories.indexOf(tip.language) === -1) {
        tipsCategories.push(tip.language)
    }
});
    return (
        <NavBarWrapper className='navbar'>
            {tipsCategories.map((tipCategory) => (
                <NavBarGroup tipCategory={tipCategory} tips={tips} key={tipCategory} currentSlug={currentSlug} setCurrentSlug={setCurrentSlug} />
            ))}
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    background-color: var(--nav-bg-color);
`;


export default NavBar
