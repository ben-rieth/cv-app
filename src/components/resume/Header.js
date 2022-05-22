import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: blue;
    grid-area: header;
`;

class Header extends React.Component {
    render() {
        return(
            <HeaderContainer>
                header
            </HeaderContainer>
        );
    }
}

export default Header;