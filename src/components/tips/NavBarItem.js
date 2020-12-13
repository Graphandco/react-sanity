import React, {useState} from 'react';
import styled from 'styled-components';


const NavBarItem = ({tip, setCurrentSlug}) => {

    const [tipActive, setTipActive] = useState(false)

    const handleTip = (e) => {
        setCurrentSlug(tip.slug.current);
        setTipActive(!tipActive)
    }

    return (
        <TipItem  onClick={handleTip} active={tipActive}>
            <span>{tip.title}</span>
        </TipItem>
    )
}

const TipItem = styled.li`
    font-size: .9rem;
    margin: 10px 0;
    line-height: 1;
    transition: .3s;
    cursor: pointer;
    color: ${props => props.active ? 'var(--white)' : '#cacaca'};
    opacity: ${props => props.active ? 1 : 0.6};

    &:hover {
        color: var(--white);
        opacity: 1;
    }
`;

export default NavBarItem
