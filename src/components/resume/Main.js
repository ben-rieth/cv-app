import React from "react";
import styled from "styled-components";
import AddSectionDropdown from "../AddSectionDropdown";

const MainContainer = styled.div`
    border: 1px solid red;
    grid-area: main;
`;

class Main extends React.Component {
    render() {
        return(
            <MainContainer>
                <AddSectionDropdown />
            </MainContainer>
        );
    }
}

export default Main;