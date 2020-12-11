import React from 'react';
import styled from 'styled-components';

const NavBarItem = ({tip}) => {
    return (
        <TipItem>
            <span>{tip.name}</span>
        </TipItem>
    )
}

const TipItem = styled.li`
    opacity: .6;
    font-size: .9rem;
    margin: 2px 0;
`;

export default NavBarItem
