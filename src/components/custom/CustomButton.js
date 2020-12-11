import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid var(--orange);
    padding: 0.8rem 2.2rem;
    background-color: var(--orange);
    font-size: 1rem;
    color: white;
    transition: 0.3s;
    padding: ${props => props.pad};
    cursor: pointer;

    a {
        display: inline-flex;
        align-items: center;
    }

    &:hover {
        background-color: transparent;
    }
`;

const CustomButton = props => {
    if (props.link) {
        return (
            <StyledButton className='custom-button'>
                <NavLink to={props.link}>
                    <span>{props.title}</span>
                </NavLink>
            </StyledButton>
        );
    } else {
        return (
            <StyledButton className='custom-button'>
                <span>{props.title}</span>
            </StyledButton>
        );
    }
};

export default CustomButton;
