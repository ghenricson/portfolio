import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top
`;

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/contact",
        text: "Contact"
    },
    {
        id: 3,
        to: "/about",
        text: "About"
    },
    {
        id: 4,
        to: "/projects",
        text: "Projects"
    }   
];

/* function showLoop () */

const StyledLink = styled(Link)`
/*     color: black;
    background-color: #f1356d;
    border-radius: 8px;  */
`;
const Navbar = () => {
    return (
        <StyledNav>
            {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}

        </StyledNav>
    );
}

export default Navbar;